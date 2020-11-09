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

/* GET /agentes/<_id> */
router.get('/:_id', async (req, res, next) => {
    try {
    const _id = req.params._id;
    const agente = await Agente.findOne({_id: _id});
    res.json({result: agente});

    } catch(err) {
        next(err)
    }
});


/* POST /api/agentes */
router.post('/', async (req, res, next) => {
    try {
    const agenteData = req.body;

    // creamos el documento en memoria
    const agente = new Agente(agenteData);

    // lo gardamos en el BD
    const agenteGuardado = await agente.save();
    
    res.json({result: agenteGuardado});

    } catch(err) {
        next(err)
    }
});


/* PUT /api/agentes/:_id */

router.put('/:_id', async (req, res, next) => {
    try {
    
    const _id = req.params._id;
    const agenteData = req.body;

    const agente = await Agente.findOneAndUpdate({ _id: _id}, agenteData, {
        new:true,
        useFindAndModify:false   // para evitar warning deprecated
    });
    res.json({result: agente});

    } catch(err) {
        next(err)
    }
});

/* DELETE /api/agentes/:_id */

router.delete('/:_id', async (req, res, next) => {
    try {
    
    const _id = req.params._id;

    const agente = await Agente.findOneAndDelete({ _id: _id});
    res.json();

    } catch(err) {
        next(err)
    }
});

module.exports = router;
