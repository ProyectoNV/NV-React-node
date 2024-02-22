const express = require("express");
const adminController =require('../Controllers/Administrador/AdminController');
//const alumnoController =require('../Controllers/Alumno');
//const docenteController =require('../Controllers/Docente');
const rutaDatos = express.Router();


rutaDatos.get("/",adminController.VerDocente)
rutaDatos.post("/agregar",adminController.AgregarDocente)

module.exports=rutaDatos;