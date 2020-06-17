const { Router } = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const User = require('./models/user');
const saltRounds = 10;

router.post('/signUp', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password: await bcrypt.hash(password, saltRounds),
    });
    req.session.user = user;
    const session = req.session.user;
    res.json({ status: 200, session: session });
  } catch (err) {
    const errorMess = Object.values(err.keyValue);
    res.json({ status: 400, error: errorMess });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = user;
    const session = req.session.user;
    const id = req.session.user._id;
    console.log(id)
    res.json({ status: 200, session: session, id: id });
  } else {
    res.json({ status: 400 });
  }
});

router.post('/logout', async (req, res, next) => {
  if (req.session.user) {
    try {
      await req.session.destroy();
      res.clearCookie('user_sid');
      res.redirect('/');
    } catch (error) {
      next(error);
    }
  } else {
    res.json({ status: 200 });
  }
});

router.post('/', async (req, res) => {
  const session = req.session.user;
  res.json({ session: session });
});

module.exports = router;
