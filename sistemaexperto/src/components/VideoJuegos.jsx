import React, { Fragment, useState } from 'react';
import Resultado from './Resultado';
const VideoJuegos = () => {
    const [respuestajuegos, guardarRespuestaJuegos] = useState('');
    const obtenerRespuesta = e => {
        guardarRespuestaJuegos(e.target.value);
    }
    return (
        <Fragment>
            <label>¿Quieres crear video juegos con resultados de alto nivel, pero una  curva de aprendizaje mas compleja</label>
            <select onChange={obtenerRespuesta}>
                <option>--Selecciona una opción---</option>
                <option value="si">Si</option>
                <option value="no">No</option>
            </select>

            {respuestajuegos === 'si' ?
                <Resultado descripcion='Como lenguaje de programación debes utilizar
            C++, de ahi es importante que aprendas algoritmos y estructuras de datos en C++,
            como motor grafico utilizaras Unreal Engine y para modelado 3D Blender.'/> :
                respuestajuegos === 'no' ?
                    <Resultado descripcion="Como lenguaje de programación debes utilizar
                C#, de ahi es importante que aprendas algoritmos y estructuras de datos en C#
                como motor grafico utilizaras Unity y para modelado 3D Blender"/>
                    : null
            }
        </Fragment>
    );
}

export default VideoJuegos;