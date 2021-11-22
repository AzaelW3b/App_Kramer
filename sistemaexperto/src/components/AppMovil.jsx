import React, { Fragment, useState } from 'react';
import AndroidPregunta from './RespuestasExtensas/AndroidPregunta';
import Resultado from './Resultado';
const AppMovil = () => {
    const [respuestamovil, guardarRespuestaMovil] = useState('');
  
    return (
        <Fragment>
            <label>¿Para que plataforma quieres desarrollar?</label>
            <select onChange={(e)=>guardarRespuestaMovil(e.target.value)}>
                <option>--Selecciona una opción---</option>
                <option value="android">Android</option>
                <option value="ios">IOS</option>
                <option value="ambas">Ambas</option>
            </select>

            {
                respuestamovil === 'android' ?
                    <AndroidPregunta /> :
                respuestamovil === 'ios' ?
                        <Resultado descripcion="Si solamente quieres programar app moviles para IOS, necesitas para empezar tener una computadora mac, ya que utilizaras un entorno que se llama xcode y como lenguaje de programación utilizaras swift" />:
                respuestamovil === 'ambas'?
                        <Resultado descripcion="Para crear aplicaciones moviles para ambas plataformas, se pueden utilizar tecnologias web
                        entonces debes aprender HTML5, CSS3, JavaScript, React, ReactNative NodeJS MongoDB
                        tambien puedes en lugar de React y ReactNative, Angular, Ionic, con este stack
                        puedes craer aplicaciones moviles, que se conecten a web client"/> : 
                null
            }
        </Fragment>
    );
}

export default AppMovil;