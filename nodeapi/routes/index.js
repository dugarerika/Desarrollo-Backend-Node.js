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

router.get('/parametros/:color/piso/:piso/puerta/:puerta', (req,res,next) => {
  console.log(req.params);
  res.send('ok')
});


module.exports = router;
