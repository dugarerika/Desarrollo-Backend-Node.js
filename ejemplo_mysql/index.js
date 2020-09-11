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
})

});

