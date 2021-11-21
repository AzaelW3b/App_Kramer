import React,{useState, Fragment} from 'react';
import Resultado from '../Resultado';
const AndroidPregunta = () => {

    const [androidpregunta, guardarAndroidPregunta] = useState('');
    const obtenerRespuesta = e => {
        guardarAndroidPregunta(e.target.value);
    }
    return (

        <Fragment>
            <label>¿Quieres que tu lenguaje de programación sea  de propósito general? que se pueda utilizar en otras áreas, aplicaciones web, aplicaciones de escritorio, etc.) </label>
            <select onChange={obtenerRespuesta}>
                <option>--Selecciona una opción---</option>
                <option value="si">Si</option>
                <option value="no">No</option>
            </select>

            {androidpregunta === 'si' ?
                <Resultado descripcion='Como lenguaje de programación utilizaras Java, de entorno de desarollo Android Studio y por ultimo SQL como gestor SQLITE, 
                Java tambien se puede utilizar para crear aplicaciones web, aplicaciones de escritorio, etc.'/> :
                androidpregunta === 'no' ?
                    <Resultado descripcion="Como lenguaje de programación utilizaras Kotlin y SQL como gestor utilizaras SQLITE" />
                    : null
            }
        </Fragment>
    );
}

export default AndroidPregunta;