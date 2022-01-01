import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './sass/app.scss';
import AppWeb from './components/AppWeb';
import AppMovil from './components/AppMovil';
import AppEscritorio from './components/AppEscritorio';
import VideoJuegos from './components/VideoJuegos';
import InteligenciaArtificial from './components/InteligenciaArtificial';
import NuevoArticulo from './components/RespuestasExtensas/NuevoArticulo';
function App() {
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
  const [respuesta, guardarRespuesta] = useState('');

  return (
    <form className="formulario contenedor">
      <h1>Sistema experto, que ruta de aprendizaje seguir</h1>
      <div className="contenedor-pregunta">
        <label>¿Qué lenguaje de programación me recomiendas aprender?</label>
       
    
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
                        <NuevoArticulo />
                        </div>
                    </Box>
                </Modal>
            </div>
        <label>¿Que quieres desarrollar?</label>
        <select onChange={(e) => guardarRespuesta(e.target.value)}>
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
