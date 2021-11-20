import React, { useState } from 'react';
import './sass/app.scss';
import AppWeb from './components/AppWeb';
import AppMovil from './components/AppMovil';
import AppEscritorio from './components/AppEscritorio';
import VideoJuegos from './components/VideoJuegos';
import InteligenciaArtificial from './components/InteligenciaArtificial';
function App() {

  const [respuesta, guardarRespuesta] = useState('');

  const obtenerRespuesta = e => {
    guardarRespuesta(e.target.value);
  }
  return (
    <form className="formulario contenedor">
      <div className="contenedor-pregunta">
        <label>¿Qué es lo que quieres crear?</label>
        <select onChange={obtenerRespuesta}>
          <option>---Selecciona una opción---</option>
          <option value="appWeb">Páginas y aplicaciones web</option>
          <option value="appMovil">Aplicaciones móviles</option>
          <option value="appEscritorio">Aplicaciones de escritorio</option>
          <option value="VideoJuegos">Videojuegos</option>
          <option value="inteligencia">Inteligencias artificiales</option>
        </select>
      </div>
      <div className="contenedor-pregunta">
        {
          respuesta === 'appWeb' ? <AppWeb /> :
          respuesta === 'appMovil' ? <AppMovil /> :
          respuesta === 'appEscritorio' ? <AppEscritorio /> :
          respuesta === 'VideoJuegos' ? <VideoJuegos /> :
          respuesta === 'inteligencia' ? <InteligenciaArtificial /> : null
        }
      </div>
    </form>
  );
}

export default App;
