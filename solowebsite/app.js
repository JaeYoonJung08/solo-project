var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//라우터 선언 부분
var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');

//-------------
var mainRouter = require('./src/routes/main');
//--------------

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//---------------------------

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/main', mainRouter);


//------------------session----------------------
//app.use(session({
//  secret: "9842134342",
//  resave: false,
//  saveUninitialized: true
//}));
//-----------------------------------------------

// app.use('/member', require('./routes/member.js'));

// //login.ejs 라우팅
// app.get('/member/login', (req, res)=>{
//   res.render('login.ejs');
// })

// //register.ejs 라우팅 
// app.get('/member/register', (req, res) => {
//   res.render('register.ejs');
// })

//--------------------------


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
