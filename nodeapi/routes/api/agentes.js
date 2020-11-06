var express = require('express');
var router = express.Router();
const Agente = require('../../models/Agente');

/* GET /agentes */
router.get('/', async function(req, res, next) {

    // Agente.find({}, (err, docs) => {
    //     res.json(docs);
    // });

    try {
        const agentes = await Agente.find();
        res.json(agentes);
    } catch(err) {
        next(err);
    }

});

module.exports = router;
