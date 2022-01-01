import React, { Fragment, useState } from 'react';
import Resultado from './Resultado';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const InteligenciaArtificial = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 10,
        borderRadius: 2,
        p: 4,
    }
    const [abrir, manipularAbrir] = useState(false);
    const abrirModal = () => manipularAbrir(true);
    const cerrarModal = () => manipularAbrir(false);
    const [respuestainteligencia, guardarRespuestaInteligencia] = useState('');

    return (
        <Fragment>
            <label>¿Qué quieres realizar?</label>

            <div className="contenedor-btn-ayuda">
                <button
                    onClick={abrirModal}
                    type="button"
                    className="btn-ayuda"
                >
                    ?
                </button>
                <Modal
                    open={abrir}
                    onClose={cerrarModal}
                >
                    <Box sx={style}>
                        <div>
                            <ul>
                                <li><p>El <strong>análisis estadístico</strong> es la recopilación e interpretación de datos para descubrir patrones y tendencias. ... El análisis estadístico puede utilizarse en situaciones como la compilación de interpretaciones de la investigación, la elaboración de modelos estadísticos o el diseño de encuestas y estudios.</p></li>
                            </ul>
                            <ul>
                                <li><p> La <strong>Ciencia de datos</strong> La ciencia de datos es un campo interdisciplinario que involucra métodos científicos, procesos y sistemas para extraer conocimiento o un mejor entendimiento de datos en sus diferentes formas
                                </p></li>
                            </ul>
                            <ul>
                                <li><p>La automatización procesos, persigue el objetivo de reducir costes utilizando la integración de aplicaciones que sustituyen procesos manuales, acelerando el tiempo de ejecución de las tareas y eliminando los posibles errores humanos que pueden cometerse a la hora de trabajar de forma manual</p></li>
                            </ul>
                        </div>
                    </Box>
                </Modal>
            </div>
            <select onChange={(e) => guardarRespuestaInteligencia(e.target.value)}>
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