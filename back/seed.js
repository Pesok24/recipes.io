/* const Recipe = require('./models/recipe')
const mongoose = require('mongoose');
var faker = require('faker');

mongoose.connect('mongodb+srv://eda:elbruseda@cluster0-vwjpv.mongodb.net/eda?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

function seed() {
  for (let i = 0; i < 30; i++) {
    let title = faker.name.title();
    let author = faker.name.firstName();
    let image = 'https://loremflickr.com/320/240/food'
    let ingridients = faker.random.word(5)
    let recipes = faker.lorem.words(300)
    let owners = [faker.name.firstName(), faker.name.firstName(), faker.name.firstName()]
    let reviews = [faker.lorem.words(20), faker.lorem.words(20), faker.lorem.words(20)]

    const recipe = new Recipe({
      date: Date.now(),
      title: title,
      author: author,
      image: image,
      ingridients: ingridients,
      recipe: recipes,
      owners: owners,
      reviews: reviews

    });
    recipe.save();
  }
}

seed()
 */

const Recipe = require('./models/recipe')
const mongoose = require('mongoose');
var faker = require('faker');

mongoose.connect('mongodb+srv://eda:elbruseda@cluster0-vwjpv.mongodb.net/eda?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

function seed() {
  for (let i = 0; i < 30; i++) {
    let title = 'Яичница с помидорами';
    let author = '';
    let image = ''
    let ingridients = faker.random.word(5)
    let recipes = faker.lorem.words(300)
    let owners = [faker.name.firstName(), faker.name.firstName(), faker.name.firstName()]
    let reviews = [faker.lorem.words(20), faker.lorem.words(20), faker.lorem.words(20)]

    const recipe = new Recipe({
      date: Date.now(),
      title: title,
      author: author,
      image: image,
      ingridients: ingridients,
      recipe: recipes,
      owners: owners,
      reviews: reviews

    });
    recipe.save();
  }
}

seed()
