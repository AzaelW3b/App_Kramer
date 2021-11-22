import React, { Fragment, useState } from 'react'
import Resultado from './Resultado';
import WebPregunta from './RespuestasExtensas/WebPregunta';
const AppWeb = () => {

    const [respuestaweb, guardarRespuestaWeb] = useState('');

 
    return (
        <Fragment>
            <label>¿Qué tipo de página o aplicación web quieres crear?</label>
            <select onChange={(e)=>guardarRespuestaWeb(e.target.value)}>
                <option>---Selecciona una opción---</option>
                <option value="paginasWeb">Páginas web empresariales, informativas, restaurantes, servicios, etc.</option>
                <option value="AplicacionesWeb">Aplicaciones que hagan consulta con alguna base de datos externa y muestre la información solamente</option>
                <option value="paginasWebBd">Blogs, sitios web de noticias, reservaciones de hoteles, sistemas escolares, etc.</option>
                <option value="AplicacionesWebBd">Aplicaciones donde yo cree la base de datos y pueda manipular la información</option>
            </select>

            {respuestaweb === 'paginasWeb' || respuestaweb === 'AplicacionesWeb' ? 
            <Resultado descripcion="Empieza con html 5, despues CSS3 y por ultimo JavaScript"/> : 
             respuestaweb === 'paginasWebBd' || respuestaweb === 'AplicacionesWebBd' ? <WebPregunta /> : null
            }
        </Fragment>
    );
}

export default AppWeb;