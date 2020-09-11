var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/paramenruta/:etiqueta', (req,res,next) => {
  console.log(req.params);
  res.send('ok')
});

router.get('/paramenruta/:numero?', (req,res,next) => {
  console.log(req.params);
  res.send('ok opcional')
});

// http://localhost:3000/parametros/rojo/piso/2/puerta/c
router.get('/parametros/:color/piso/:piso/puerta/:puerta', (req,res,next) => {
  console.log(req.params);
  res.send('ok')
});

//  recibir parametros en query string
router.put('/enquerystring', (req, res, next) => {
  console.log(req.query);
  res.send('ok')
});

//  recibir parametros en el body
router.post('/enelbody', (req, res, next) => {
  console.log(req.body);
  res.send('ok')
});

module.exports = router;
