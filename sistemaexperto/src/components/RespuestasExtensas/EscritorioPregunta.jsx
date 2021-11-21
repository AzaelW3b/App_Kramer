import React, { Fragment, useState } from 'react';
import Resultado from '../Resultado';
const EscritorioPregunta = () => {
    const [respuestaescritorio, guardarRespuestaEscritorio] = useState('');
    const obtenerRespuesta = e => {
        guardarRespuestaEscritorio(e.target.value);
    }
    return (
        <Fragment>
            <label>¿Aparte de crear aplicaciones de escritorio te gustaria crear aplicaciones web ?</label>
            <select onChange={obtenerRespuesta}>
                <option>--Selecciona una opción---</option>
                <option value="si">Si</option>
                <option value="no">No</option>
            </select>

            {respuestaescritorio === 'si' ?
                <Resultado descripcion='Como lenguaje de programación utilizaras c#,
            este lenguaje se utiliza mucho para crear aplicaciones modernas tanto de escritorio como web,
            para poder crear aplicaciones web, debes aprender un framework que se llama .NET, de ahi 
            SQL y como son tecnologias de Microsoft, se recomienda SQL SERVER'/> :
                respuestaescritorio === 'no' ?
                    <Resultado descripcion="Como lenguaje de programación utilizaras Java, de ahi 
                se recomienda que aprendas alguna libreria moderna de diseño de interfaces en Java
                como JavaFx y por ultimo SQL y como gestor MySQL. Aunque Java también se puede usar para aplicaciones web, con un framework que se llama SpringBoot"/>
                    : null
            }
        </Fragment>
    );
}

export default EscritorioPregunta;