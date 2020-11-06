'use strict';

const mongoose = require('mongoose');

// Crear un esquema (https://mongoosejs.com/docs/schematypes.html)
const agenteSchema = mongoose.Schema({
    name: String,
    // name: { type: String, index: true}
    age: Number
    // phones: [String]
    // message: mongoose.Schema.Types.Mixed // para datos sin schema
});

// Crear el modelo

const Agente = mongoose.model('Agente', agenteSchema);

// Exportar el modelo
module.exports = Agente;