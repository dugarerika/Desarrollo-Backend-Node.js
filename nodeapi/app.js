var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

// Establecemos la variable title para todas las vistas
app.locals,title = 'Express';

// Ante cada peticion se ejecutan los siguiente middlewares
app.use(function(req, res, next){
  console.log('Soy un middleware');
    // En un middleware siempre hay que hacer una de 2:
  //  - Responder
  //  -Lammar a next
  // res.send('hola');
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('/albaran','d:/ficherospdf/albaranes'));

app.use('/',      require('./routes/index'));
app.use('/users', require('./routes/users'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  console.log(err)
  if(err.array){ //error de validacion
    err.status = 422;
    const errInfo = err.array({onlyFirstError: true})[0];
    err.message = `El parametro ${errInfo.param} ${errInfo.msg}`;
  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
