var express = require('express');
const { ValidatorsImpl } = require('express-validator/src/chain');
var router = express.Router();
var createError = require('http-errors');
// Destructuring asignnment
// const expressValidator = require('express-Validator');
// const query = expressValidator.query
// const  validationResult = expressValidator.validationResult

const {query, validationResult} = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/paramenruta/:etiqueta', (req, res, next) => { 
  console.log(req.params);
  res.send('OK');
});

router.get('/paramenrutaopcional/:numero?', (req, res, next) => { 
  console.log(req.params);
  res.send('opcional');
});

// http://localhost:3000/parametros/22/piso/22/puerta/C
router.get('/parametros/:id([0-9]+)/piso/:piso/puerta/:puerta', (req, res, next) => { 
  console.log(req.params);
  res.send('ok');
});

// recibir parametros en querystring
// http://localhost:3000/enquerystring?color=rojo&talla=L&almacen=jaen
router.get('/enquerystring', 
      [ // validaciones
        query('color').isAlpha().withMessage('deberia ser texto'),
        query('talla').isNumeric().withMessage('debe ser numérico'),
        
      ],
    (req, res, next) => { 
    validationResult(req).throw(); //lanzar exception si hay errores de validacion 
  console.log(req.query);
  res.send('ok');
});

// recibir parametros en el body
// Debe ser probado en postman
router.post('/enelbody', (req, res, next) => { 
  console.log(req.body);
  if(req.body.color != 'rojo'){
    next(createError(422,'color no admitido (solo funciona con el rojo)'))
    return
  } 
  res.send('ok');
});

module.exports = router;


