const conn = require('../../Model/conn').promise();

const VerDocente = async (req,res)=>{
    try {
        const consulta="SELECT * FROM usuario"
        const resultado = await conn.query(consulta)

        res.status(200).json(resultado)
    } catch (error) {
        console.error(`Errro: ${error}`)
    }
}

const AgregarDocente = async(req,res)=>{
    try {
        const {tipoDoc,numeroId,idRol,nombres,apellidos,fechaNacimiento,genero,correo,celular,contrasena,estado}=req.body;
        const consulta="SELECT * FROM usuario WHERE pkfk_tdoc = ? AND numero_id = ?";
        const [verificarUsuario] = await conn.query(consulta, [tipoDoc, numeroId]);

        console.log(verificarUsuario.length)
        if (verificarUsuario.length ===0){
            await conn.query('INSERT INTO usuario (pkfk_tdoc,numero_id,id_rol,Nombres,Apellidos,fecha_nacimiento,genero,correo,celular,contrasena,estado) VALUES (?,?,?,?,?,?,?,?,?,?,?)',[tipoDoc,numeroId,idRol,nombres,apellidos,fechaNacimiento,genero,correo,celular,contrasena,estado]);

            await conn.query("INSERT INTO docente VALUES (?,?)",[tipoDoc,numeroId])

            res.json({message:"Usuario y docente creado correctamente"})
        }

    } catch (error) {
        console.error("Error al agregar al profesor :",error)
        res.status(500).json({message:"El profesor no pudo ser registrado "})
    }

}
module.exports={
    VerDocente,
    AgregarDocente
}
