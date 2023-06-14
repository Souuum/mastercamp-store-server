var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sequelize = require('./config/database')
var cors = require('cors');
var session = require('express-session');
var Store = session.Store;

var auth = require('./routes/auth');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoriesRouter = require('./routes/categories');
var recipesRouter = require('./routes/recipes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  maxAge: 500,

}));

app.use('/', indexRouter);
app.use('/auth', auth);
app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);
app.use('/categories', categoriesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

sequelize.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("ERROR : " + err));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const Categories = require('./models/categories');
const Recipes = require('./models/recipes');
const Users = require('./models/users');
Recipes.belongsTo(Categories, {through: 'category_id'});


sequelize.sync({ alter: true }).then(() => {
  console.log("Database structure updated")
})

module.exports = app;
