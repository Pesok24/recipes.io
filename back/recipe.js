const { Router } = require('express');
const router = Router();
const User = require('./models/user');
const Recipe = require('./models/recipe');
const Reviews = require('./models/reviews');
const fetch = require('node-fetch');

const apiKey = '0b6291b8eb0e48d595c1f6ef3cc36eb0';

//Отрисовывает все рецепты
router.get('/all', async (req, res) => {

  const recipes = await Recipe.find({});


  res.json(recipes);
});

//Ручка поиска, будет изменена полностью
router.post('/search', async (req, res) => {
  let data = req.body.data;
  const recipes = await Recipe.find({});
  const array = [];
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ingridients.length; j++) {
      if (data === recipes[i].ingridients[j]) {
        array.push(recipes[i]);
      }
    }
    res.json({ data: array });
  }
});
// ручка поиска по api

router.post('/apisearch', async (req, res) => {
  const data = req.body.data;

  const query = data.split(',').join('%20');
  const response = await fetch(
    `https://yummly2.p.rapidapi.com/feeds/search?FAT_KCALMax=1000&maxTotalTimeInSeconds=7200&allowedAttribute=diet-lacto-vegetarian%252Cdiet-low-fodmap&q=${query}&start=0&maxResult=18`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'yummly2.p.rapidapi.com',
        'x-rapidapi-key': 'dd1bc0357dmsh0ba4599a6c83c49p189e69jsne4d3cdbfe506',
      },
    }

  );
  const result = await response.json();
  const feed = result.feed;
  // console.log(result);
    let array = [];


  for (let i = 0; i < feed.length; i++) {
    const recipe = new Recipe({
      title: feed[i].display.displayName,
      image: feed[i].display.images[0],
      steps: feed[i].content.preparationSteps,
      ingridients: feed[i].content.ingridientLines,
      recipe: feed[i].content.preparationSteps.join(' '),
    });
    await recipe.save();
  }

  
  const recipes = await Recipe.find().sort({ _id: -1 }).limit(10)
  // console.log(recipes);
  
  res.json(recipes)
})


//ручка для перехода по рецептам
router.post('/link', async (req, res) => {
  const link = await Recipe.findOne({ _id: req.body.id });
  res.json(link);
});

//ручка добавления отзыва на странице рецепта
router.post('/review', async (req, res) => {
  const data = req.body;

  const review = new Reviews({
    text: data.text,
    recipe: data.params,
    author: data.userId,
  });
  await review.save();

  const allReviews = await Reviews.find({ recipe: data.params });
  const authors = await Reviews.find({ recipe: data.params }).populate(
    'author'
  );
  res.json({ data: allReviews, authors: authors });
});

// ручка изменения имени
router.post('/changeName', async (req, res) => {
  const data = req.body;
  // console.log(data);
  const usss = await User.findOneAndUpdate(
    { _id: data.id },
    { name: data.name }
  );

  res.json({ data: data.name });
});

//ручка отрисовки отзывов на странице рецепта
router.post('/getrev', async (req, res) => {
  const datas = req.body;
  const authors = await Reviews.find({ recipe: datas.params }).populate(
    'author'
  );
  res.json({ data: authors });
});

//ручка добавления нового рецепта
router.post('/addnew', async (req, res) => {
  const data = req.body;
  const recipe = await new Recipe({
    title: data.title,
    author: data.author,
    date: Date.now(),
    image: data.image,
    ingridients: data.ingridients, //Array only!
    recipe: data.recipe,
  });
  recipe.save();
  res.json({ data: 'done' });
});

//ручка удаления рецепта
router.post('/delete', async (req, res) => {
  const data = req.body;
  const recipe = await Recipe.findOne({ _id: data.recipe });
  if (data.userId === recipe.author) {
    await Recipe.findOneAndDelete({ _id: data.recipe });
    res.json({ data: 'deleted' });
  } else {
    res.json({ data: 'error' });
  }
});

//ручка поставить лайк рецепту
router.post('/addtomy', async (req, res) => {
  const data = req.body;
  // console.log(data);
  const recipe = await Recipe.findOne({ _id: data.recipeId });
  const indexUser = recipe.owners.indexOf(data.userId);
  // console.log('INDEX USER', indexUser);
  // console.log(recipe.owners);
  // console.log('do ifa', data.userId);
  if (indexUser === -1) {
    // console.log('jopa', data.userId);
    recipe.owners.push(data.userId);
    recipe.save();
    res.json({ data: recipe.owners });
  } else {
    recipe.owners.splice(indexUser, 1);
    recipe.save();
    res.json({ data: recipe.owners });
  }
});

//ручка для useEffect отрисовывает все лайкнутые пользователем рецепты (Вам понравилось)
router.post('/favorite', async (req, res) => {
  const data = req.body;
  const userFavorite = await User.findOne({ _id: data.userId }).populate(
    'favorite'
  );
  res.json({ data: userFavorite });
});

//ручка для добавления отзыва со смайлом на странице профиля
router.post('/done', async (req, res) => {
  const data = req.body;
  const user = await User.findOne({ _id: data.userId });
  const recipe = await User.findOne({ _id: data.userId }).populate('status');
  const review = new Reviews({
    text: data.text,
    author: data.userId,
    recipe: user.status,
    flag: data.flag,
  });
  review.save();
  user.history.push(user.status);
  user.save();
  res.json({ flag: data.flag, recipe: recipe });
});

router.post('/getlikes', async (req, res) => {
  const data = req.body;
  const recipe = await Recipe.findOne({ _id: data.data });
  // console.log('PORTAL', recipe.owners);
  res.json(recipe.owners);
});

//статус
router.post('/tostatus', async (req, res) => {
  let data = req.body;
  // console.log(data);
  const user = await User.findOne({ _id: data.user });
  user.status = '';
  user.status = data.recipe;
  user.save();
  res.json({ data: 'Добавлено', user: user.status });
});

//ручка отрисовки статуса (принимает id пользователя, возвращает статус)
router.post('/status', async (req, res) => {
  const data = req.body;
  const user = await User.findOne({ _id: data.id });
  const recipe = await Recipe.findOne({ _id: user.status });
  res.json({ data: recipe.title, id: user.status });
});

router.post('/getreview', async (req, res) => {
  const data = req.body;
  const review = new Reviews({
    text: data.text,
    author: data.userId,
    recipe: data.recipeId,
    flag: data.flag,
  });
  review.save();
  res.json({ code: 200 });
});

router.post('/renderreview', async (req, res) => {
  const data = req.body;
  // console.log(data);
  const reviews = await Reviews.find({ author: data.userId }).populate(
    'recipe'
  );

  // console.log(reviews);
  res.json(reviews);
});

router.post('/likecarousel', async (req, res) => {
  const data = req.body;
  const recipes = await Recipe.find({ owners: data.id });
  // console.log('ЭТО ВОТ ЭТО', recipes);
  res.json(recipes);
});

router.post('/phone', (req, res) => {
  const data = req.body;
  setTimeout(() => {
    var http = require('http');
    var querystring = require('querystring');

    var phone = data.phone; // номер телефона
    var text = 'recipe.io waiting for you review ;)'; // текст
    var from = 'INFORM'; // имя отправителя из списка https://smspilot.ru/my-sender.php
    // !!! Замените API-ключ на свой https://smspilot.ru/my-settings.php#api
    var apikey =
      '5A3ZVL052Q35ZQC09L79D82W5E59K7NMSI61398OC4M8G887G5YKCE5X5294609A';
    var uri = [
      'http://smspilot.ru/api.php',
      '?send=',
      querystring.escape(text),
      '&to=',
      phone,
      '&from=',
      from,
      '&apikey=',
      apikey,
      '&format=json',
    ].join('');

    http
      .get(uri, function (res) {
        var str = '';
        res.on('data', function (chunk) {
          str += chunk;
        });

        res.on('end', function () {
          // console.log('ответ сервера: ' + str);
          var parsedData = JSON.parse(str);
          // console.log('server_id=' + parsedData.send[0].server_id);
        });
      })
      .on('error', function (err) {
        // console.log('ошибка сети ' + err);
      });
  }, 30000);
});

// router.post(('/updatePhoto', async (req, res)=>{
//   // let data = req.body;
//   console.log('l');
//   // const user = await User.findOneAndUpdate({ _id: data.id }, { image: data.src })
//   res.json('h')
// }))
router.post('/updatePhoto', async (req, res) => {
  let data = req.body;
  // console.log(typeof req.body.src);
  await User.findOneAndUpdate(
    { _id: req.session.user._id },
    { image: data.src }
  );
  const g = await User.findById({ _id: req.session.user._id });
  req.session.user = g;
  // console.log(g);
  res.json({ asd: 'красава' });
});

module.exports = router;
