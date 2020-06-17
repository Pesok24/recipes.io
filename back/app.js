const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');
const authRouter = require('./auth');
const recipeRouter = require('./recipe');
const bodyParser = require('body-parser')

const app = express();


mongoose.connect('mongodb+srv://eda:elbruseda@cluster0-vwjpv.mongodb.net/eda?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(morgan('dev'));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cookieParser());

app.use(
  session({
    store: new FileStore(),
    key: 'user_sid',
    secret: 'anything here',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  })
);

// app.use(express.json());

app.get('/', async (req, res) => {
  res.json({ data: 'привет' });
});

app.use('/', authRouter);
app.use('/recipe', recipeRouter);

app.listen(4000, () => {
  console.log('Starting Port 4000');
});
