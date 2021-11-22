import React, { Fragment, useState } from 'react';
import EscritorioPregunta from './RespuestasExtensas/EscritorioPregunta';
import Resultado from './Resultado';
const AppEscritorio = () => {
    const [resupuesescritorio, guardarRespuestaEscritorio] = useState('');
    
    return (
        <Fragment>
            <label>Te gustaria  primero crear una aplicación web y luego migrarla a escritorio o dispositivo móvil?  </label>
            <select onChange={(e)=>guardarRespuestaEscritorio(e.target.value)}>
                <option>--Selecciona una opción---</option>
                <option value="si">Si</option>
                <option value="no">No</option>
            </select>

            {resupuesescritorio === 'si' ?
                <Resultado descripcion='Primero debes aprender HTML 5, despues CSS3 y JavaScript, de ahi se recomienda
                aprender ReactJs para poder utilizar Electron, con Electron puedes migrar una aplicación web
                a una aplicación de escritorio'/> :
                resupuesescritorio === 'no' ?
                    <EscritorioPregunta />
                : null
            }
        </Fragment>
    );
}

export default AppEscritorio;