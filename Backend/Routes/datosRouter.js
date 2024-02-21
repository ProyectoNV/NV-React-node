const express = require("express");
const adminController =require('../Controllers/Administrador');
const alumnoController =require('../Controllers/Alumno');
const docenteController =require('../Controllers/Docente');
const rutaDatos = express.Router();


rutaDatos.get("/",datosController.Datos)

module.exports=rutaDatos;