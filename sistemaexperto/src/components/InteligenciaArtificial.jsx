import React, { Fragment, useState } from 'react';
import Resultado from './Resultado';
const InteligenciaArtificial = () => {
    const [respuestainteligencia, guardarRespuestaInteligencia] = useState('');
   
    return (
        <Fragment>
            <label>¿Qué quieres realizar?</label>
            <select onChange={(e)=>guardarRespuestaInteligencia(e.target.value)}>
                <option>--Selecciona una opción---</option>
                <option value="analisis">Análisis estadístico y ciencia de datos en general</option>
                <option value="automatizacion">Automatización de procesos, Data mining, redes neuronales</option>
                <option value="reconocimiento">Aplicaciones web con reconocimiento facial, redes neuronales, etc.</option>
            </select>

            {
            respuestainteligencia === 'analisis' ?
                <Resultado descripcion='Antes de empezar a tocar codigo primero debes saber
                estadistica, de ahi inteligencia de negocios, modelado de negocios, despues como lenguaje de programación
                utilizaras R, SQL y como gestor se recomienda SQL SERVER y como plus Apache Spark, que sirve para
                crear aplicaciones con aprendizaje automático' /> :
            respuestainteligencia === 'automatizacion' ?
                <Resultado descripcion='Antes de empezar a tocar codigo primero debes saber
                Algebra Lineal y estadistica, de ahi como lenguaje de programación utilizaras Python,
                algoritmos y estructuras de datos en Python, y como libreria TensorFlow' /> :
            respuestainteligencia === 'reconocimiento' ?
                <Resultado descripcion='Primero HTML5, CSS3, JavaScript, se recomienda utilizar una libreria
                que se llama TensorFlow, para crear aplicaciones de ese tipo, etc.' />
                : null
            }
        </Fragment>
    );
}

export default InteligenciaArtificial;