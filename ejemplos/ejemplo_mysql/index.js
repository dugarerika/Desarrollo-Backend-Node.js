'use strict'

//  Cargar driver
const mysql = require('mysql');

// crear una conexion
const conexion = mysql.createConnection({
    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

// Conectar al servidor

conexion.connect(err =>{
    if (err){
        console.log('error al conectar', err);   
        return; 
    }
    console.log('Conectado a Mysql');

// Lanzar una consulta

    conexion.query('SELECT * FROM agentes', (err, rows, fields) => {
        if (err){
            console.log('error en la consulta');
            return;
        }

        console.log(rows);

        // Cerrar la conexion
        conexion.end();

    });

});

// con un ORM : Agente.find({age:30}); // select * from agentes where age = 30;

// en la carpeta bin encontramos mongo es un cliente para conectarse al servidor , mongod es el servidor 
// ./bin/mongod --dbpath ./data/db --directoryperdb
// ./bin/mongo
// insertar en la collecino de agentes
// show dbs
// use cursonode
// db.agentes.insert({name:'Smith', age: 48})
// db.agentes.find()
// db.agentes.update({"_id" : ObjectId("5fa58ec9fb049a189288b37e")}, { name: 'Superlopez'})
// db.agentes.update({"_id" : ObjectId("5fa58ec9fb049a189288b37e")}, { $set: {name: 'Superlopez'}})
// db.agentes.update({"_id" : ObjectId("5fa5a186d976d4ce40cbfcf4")}, { $set: {age: 30}})
// db.agentes.update({"_id" : ObjectId("5fa5a186d976d4ce40cbfcf4")}, { $set: { address: 'Calle Pez, 19', phones:['600112233', '622334455']}})
// db.agentes.find().pretty()
// db.agentes.remove({"_id" : ObjectId("5fa58ec9fb049a189288b37e")})
// db.coleccion.drop()
// db.agentes.createIndex({name:1, age:-1})
// db.agentes.getIndexes()
// db.agentes.find({ name: 'Smith'})
// db.agentes.find({"_id" : ObjectId("5fa58ec9fb049a189288b37e")})
// db.agentes.find({ age: { $gt:30}}) // $lt. $gte, $lte
// db.agentes.find({age: { $gt:30, $lt:40}})
// db.agentes.find({ name: { $in: ['Jones', 'Brown']}}) //$nin
// db.agentes.find({ name: 'Smith', $or: [
//     { age: { $lt: 30}},
//     { age: 43 } // 'Smith' and (age < 30 or age = 43)
// ]})
// db.agentes.find({age: { $gt: 31}})
// SUBDOCUMENTOS
// db.agentes.find().sort({age:-1})
// // db.agentes.find().skip(1).limit(1)
// // db.agentes.find().count()
// db.agentes.createIndex({titulo: 'text', subtitulo:'text'})
// db.agentes.find({$text: { $search: 'Smith Jones'}})
// db.agentes.createIndex({ubicacion: '2dsphere'})
// geospacial indexes
// db.agentes.insert({
//     "ubicacion":{
//         "coordinates": [-73.856077, 40.848447],  //longitud, latitud
//         "type": "Point"
//     }
// })
