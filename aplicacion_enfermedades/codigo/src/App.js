import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import Diagnostico from './components/Diagnostico';

function App() {
  const [respuetas, guardarRespuestas] = useState({
    diagnostico: '',
    medidas: '',
    aglomeracion: '',
    sintomas: '',
    sintomasNeuro: '',

  });

  const obtenerRespuesta = e => {
    guardarRespuestas({ ...respuetas, [e.target.name]: e.target.value });
  }

  const { diagnostico, medidas, aglomeracion, sintomas, sintomasNeuro } = respuetas;

  return (
    <Form className="p-5 bg-dark text-white fs-5 container-xl mt-3">
      <h1 className="text-center fs-1">Sistema experto Covid 19</h1>


      <Form.Group className="mb-3">
        <Form.Label>¿Has estado en contacto con personas diagnosticada con la covid 19 en las últimas 2 semanas ?</Form.Label>
        <Form.Select onChange={obtenerRespuesta} name="diagnostico">
          <option>Elige una opción</option>
          <option value="siDiagnostico">Si</option>
          <option value="noDiagnostico">No</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
          ¿Has usado las medidas de forma correcta como cubrebocas, sana distancia, lavado de manos? </Form.Label>
        <Form.Select onChange={obtenerRespuesta} name="medidas">
          <option>Elige una opción</option>
          <option value="siMedidas">Si</option>
          <option value="noMedidas">No</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Has estado en aglomeraciones de personas en las últimas dos semanas? </Form.Label>
        <Form.Select onChange={obtenerRespuesta} name="aglomeracion">
          <option>Elige una opción</option>
          <option value="siAglomeracion">Si</option>
          <option value="noAglomeracion">No</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Has tenido algunos de los siguientes  síntomas respiratorios?</Form.Label>
        <Form.Select onChange={obtenerRespuesta} name="sintomas">
          <option>Elige una opción</option>
          <option value="congestion">Congestión nasal</option>
          <option value="tos">Tos</option>
          <option value="estornudos">Estornudos</option>
          <option value="dificultad">Dificultad respiratoria</option>
          <option value="ninguna">Ninguna</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Has tenido alguno de los siguientes síntomas neurológicos?</Form.Label>
        <Form.Select onChange={obtenerRespuesta} name="sintomasNeuro">
          <option>Elige una opción</option>
          <option value="perdida">Pérdida del olfato</option>
          <option value="perdida">Pérdida del gusto</option>
          <option value="no">No</option>
        </Form.Select>
      </Form.Group>
      {
        //diagnostico de covid positivo
        diagnostico === 'siDiagnostico' && medidas === 'noMedidas' &&
          aglomeracion === 'siAglomeracion' && (sintomas === 'congestion' || 'dificultad'
            || 'estornudos' || 'tos' || 'dificultad') && sintomasNeuro === 'perdida' ?
          <Diagnostico descripcion='Tienes Covid19 positivo, acude a un medico de inmediato' /> :
          //diagnostico negativo de covid
          diagnostico === 'noDiagnostico' && medidas === 'siMedidas' && aglomeracion === 'noAglomeracion'
            && (sintomas === 'ninguna' || sintomas === 'congestion' || sintomas == 'estornudos') && sintomasNeuro === 'no' ?
            <Diagnostico descripcion='Puedes tener gripe comun' /> :

            diagnostico === 'noDiagnostico' && medidas === 'siMedidas' && aglomeracion === 'noAglomeracion' &&
              sintomas === 'ninguna' && sintomasNeuro === 'no' ?
              <Diagnostico descripcion='Cuentas con buena salud' /> :
              diagnostico !== '' && medidas !== '' && aglomeracion !== '' &&
                sintomas !== '' && sintomasNeuro !== '' ?
                <Diagnostico descripcion='tienes gripe comun' /> : null




      }
    </Form>

  );
}

export default App;
