import React, { Fragment, useState } from 'react';
import Resultado from '../Resultado';
const WebPregunta = () => {
    const [respuesta, guardarRespuesta] = useState('');
    
    return (
        <Fragment>
            <label>¿Las páginas o aplicaciones web quieres diseñarlas y agregarles interactividad también?</label>
            <select onChange={(e)=>guardarRespuesta(e.target.value)}>
                <option>--Selecciona una opción---</option>
                <option value="si">Si, quiero diseñar mi aplicación y crear la base de datos , manipular la información y mostrar la información en la interfaz</option>
                <option value="no">No, solo quiero crear la base de datos y manipularla con un lenguaje de programación</option>
            </select>

            {respuesta === 'si' ?
                <Resultado descripcion='Empieza con html 5, despues CSS3, JavaScript, ReactJs, NodeJs, ExpressJS y por ultimo una base de datos no relacional
                 MongoDB, este stack se le conoce como MERN'/> :
             respuesta === 'no' ?
             <Resultado descripcion="Empieza con HTML 5, como solo haras la logica del lado del servidor utiliza php y despues SQL, el gestor mas popular es MySQL" />
             : null
            }
        </Fragment>
    );
}

export default WebPregunta;