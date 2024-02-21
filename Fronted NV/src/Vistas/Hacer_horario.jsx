import React from "react"
import { useState, useRef} from "react";
import Verifi  from "../Imagenes/Quality Check_Outline.svg"
import Check from "../Imagenes/Checklist_Line.svg";
import SidebarAdmi from "../Componentes/Dashboard_admi";
import '../css/cronograma.css'

export const Hacer_crono = () => {

    var refModal = useRef();
    var refModal2 = useRef();

    const Mostrar = (e) => {
        const myrefValue = refModal.current;
        myrefValue.style.opacity= "1";
        myrefValue.style.pointerEvents= "inherit";
    };

    const Mostrar2 = (e) => {
        const myrefValue = refModal2.current;
        myrefValue.style.opacity= "1";
        myrefValue.style.pointerEvents= "inherit";
    };

    const Ocultar = (e) =>{
        const myrefocultar = refModal.current;
        myrefocultar.style.opacity= "0";
        myrefocultar.style.pointerEvents= "none";
    }

    const Ocultar2 = (e) =>{
        const myrefocultar = refModal.current;
        myrefocultar.style.opacity= "0";
        myrefocultar.style.pointerEvents= "none";
        const myrefocultar2 = refModal2.current;
        myrefocultar2.style.opacity= "0";
        myrefocultar2.style.pointerEvents= "none";
    }
    
    var refmove = useRef();
	const [showe, setShowe]= useState(false);
	const move_conte = (e) => {
		setShowe(!showe)
	}
    return(
        <div className={`contenert ${showe ? 'space-toggle' : null}`} ref={refmove}>
            <SidebarAdmi Move={move_conte}/>
            <section className="modal_regis-d" ref={refModal}>
                <div className="modal_container">
                    <img src={Verifi} class="modal_img"/>
                    <h2 className="modal_tittle">¿Estas seguro de Agregar al horario este espacio?</h2>
                    <p className="modal_paragraph">Una vez se agregue el horario se podra visualizar en el cronograma de actividades</p>
                    <div className="content_modal_b">
                        <a href="#" class="modal_close_actu" id="close_modal_regis" onClick={Ocultar}>Cancelar</a>
                        <a href="#" class="modal_close_actu" id="Regis" onClick={Mostrar2}>Agregar</a>
                    </div>
                </div>
            </section>
            <section className="modal_confir_regi" ref={refModal2}>
                <div className="modal_container">
                    <input type="checkbox" id="cerrar"/>
                    <label for="cerrar" id="btn-cerrar" onClick={Ocultar2}>X</label>
                    <img src={Check} className="modal_img"/>
                    <h2 className="modal_tittle">¡Felicidades!</h2>
                    <p className="modal_paragraph">Se agrego al horario</p>
                </div>
            </section>
            <div className="info-text">
			  <h1>Cronograma de actividades</h1>
              <div>
                <form className="form_crono">
                    <legend className="crono_title">Asigna un horario</legend>
                    <div className="info_crono">
                        <div>
                            <p>La actividad correspondiente</p> 
                            <select name="opcion_actividad" id="opcion_actividad">
                                <option value=""></option>
                                <option value="Refuerzo_Escolar">Refuerzo Escolar</option>
                                <option value="Robotica">Robotica</option>
                                <option value="Fotografia">Fotografias</option>
                                <option value="Emprendimiento">Emprendimiento</option>
                                <option value="Futbol_pequeños">Futbol Pequeños</option>
                                <option value="danza">Danza</option>
                                <option value="artes">Artes</option>
                                <option value="Exploración_Musical">Exploración Musical</option>
                                <option value="futbol_grandes">futbol Grandes</option>
                                <option value="musica_grandes">Musica Grandes</option>
                            </select>
                        </div>
                        <div>
                            <p>Seleccione el dia de la semana</p>
                            <select name="opcion_dia" id="opcion_dia">
                                <option value=""></option>
                                <option value="lunes">Lunes</option>
                                <option value="martes">Martes</option>
                                <option value="miercoles">Miercoles</option>
                                <option value="jueves">Jueves</option>
                                <option value="viernes">Viernes</option>
                                <option value="sabado">Sabado</option>
                            </select>
                        </div>
                        <div>
                            <label for="lugar">Ingrese el lugar</label>
                            <input id="lugar" type="text" name="lugar"/>
                        </div>
                        <div>
                            <label for="hinicio">Ingrese la hora de inicio</label>
                            <input id="hinicio" type="text" name="horai"/>
                        </div>
                        <div>
                            <label for="hfinal">Ingrese la hora en la que finaliza</label>
                            <input id="hfinal" type="text" name="horaf"/>
                        </div>
                    </div>
                    <div class="btn"><a className="button_cronograma" type="submit" id="btn_crono" onClick={Mostrar}>Agregar a horario</a></div>
                </form>
              </div>
			</div>
        </div>
    )
}

export default Hacer_crono