import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import Diagnostico from './components/Diagnostico';

function App() {
  const [respuetas, guardarRespuestas] = useState({
    edad: '',
    diabetes: '',
    hipertension: '',
    infarto: '',
    fumar: '',
    colesterol: '',
    dificultadRespirar: '',
    fatiga: '',
  });

  const obtenerRespuesta = e => {
    guardarRespuestas({ ...respuetas, [e.target.name]: e.target.value });
  }

  const { edad, diabetes, hipertension, infarto, fumar, colesterol, dificultadRespirar, fatiga } = respuetas;

  return (
    <Form className="p-5 bg-primary text-white fs-5 container-xl mt-3">
      <h1 className="text-center fs-1">Diagnostico de una enfermedad cardiaca</h1>
      <Form.Group className="mb-3">
        <Form.Label className="">¿Que edad tienes?</Form.Label>
        <Form.Select onChange={obtenerRespuesta} name="edad">
          <option>Elige una opción</option>
          <option value="joven">Joven menor a 39 años</option>
          <option value="adulto">Adulto entre 40 y 60 años</option>
          <option value="mayorEdad">Mayor de 60 años</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Tienes diabetes?</Form.Label>
        <Form.Select onChange={obtenerRespuesta} name="diabetes">
          <option>Elige una opción</option>
          <option value="siDiabetes">Si</option>
          <option value="noDiabetes">No</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Tienes hipertensión arterial?</Form.Label>
        <Form.Select onChange={obtenerRespuesta} name="hipertension">
          <option>Elige una opción</option>
          <option value="siHipertension">Si</option>
          <option value="noHipertension">No</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Tienes antecedentes familiares de infarto?</Form.Label>
        <Form.Select onChange={obtenerRespuesta} name="infarto">
          <option>Elige una opción</option>
          <option value="siInfarto">Si</option>
          <option value="noInfarto">No</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Fuma con frecuencia?</Form.Label>
        <Form.Select onChange={obtenerRespuesta} name="fumar">
          <option>Elige una opción</option>
          <option value="siFumar">Si</option>
          <option value="noFumar">No</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Cual es su nivel de colesterol?</Form.Label>
        <Form.Select onChange={obtenerRespuesta} name="colesterol">
          <option>Elige una opción</option>
          <option value="bajo">colesterol bajo menor a 200mg/dl</option>
          <option value="alto">colesterlo alto 180 - 240 mg/dl</option>
          <option value="muyalto">colesterol mayor a 240 mg/dl</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Tienes dificultades para respirar?</Form.Label>
        <Form.Select onChange={obtenerRespuesta} name="dificultadRespirar">
          <option>Elige una opción</option>
          <option value="siRespirar">Si</option>
          <option value="noRespirar">No</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>¿Tienes fatiga extrema al hacer ejercicio?</Form.Label>
        <Form.Select onChange={obtenerRespuesta} name="fatiga">
          <option>Elige una opción</option>
          <option value="siFatiga">Si</option>
          <option value="noFatiga">No</option>
        </Form.Select>
      </Form.Group>
      {
        (edad === 'mayorEdad' || edad === 'joven' || edad === 'adulto') && diabetes === 'siDiabetes' && hipertension === 'siHipertension' && infarto === 'noInfarto' &&
          fumar === 'siFumar' && colesterol === 'alto' && dificultadRespirar === 'siRespirar' && fatiga === 'siFatiga' ?
          
          <Diagnostico descripcion='Diagnostico: Tienes angina de pecho estable, consulta tu medico'/> :
          diabetes === 'siDiabetes' && hipertension === 'siHipertension' && infarto === 'siInfarto' &&
          fumar === 'siFumar' && (colesterol === 'muyalto' || colesterol === 'alto') && (dificultadRespirar === 'siRespirar' || dificultadRespirar === 'noRespirar') && fatiga === 'siFatiga' ? 
          <Diagnostico descripcion='Diagnostico: Podrias presentar un infarto agudo de miocardio, acude a tu medico de inmediato'/> :
   
         (diabetes === 'noDiabetes' ||  diabetes === 'siDiabetes') && hipertension === 'siHipertension' && (infarto === 'siInfarto' || infarto === 'noInfarto') &&
         (fumar === 'siFumar' ||  fumar === 'noFumar') && (colesterol === 'bajo' || colesterol === 'alto') && (dificultadRespirar === 'siRespirar' || dificultadRespirar === 'noRespirar') && ( fatiga === 'siFatiga' || fatiga === 'noFatiga') ? 

          <Diagnostico descripcion='Diagnostico: Tienes angina de pecho estable, consulta tu medico'/> :
          diabetes === 'noDiabetes' && hipertension === 'noHipertension'  && infarto === 'noInfarto' &&
          fumar === 'noFumar' && colesterol === 'bajo' && dificultadRespirar === 'noRespirar'  &&  fatiga === 'noFatiga' ?

          <Diagnostico descripcion='Cuentas con buena salud, pero no dejes de acudir a tu medico'/> :
          diabetes !== '' && hipertension !== ''  && infarto !== '' &&
          fumar !== '' && colesterol !== '' && dificultadRespirar !== ''  &&  fatiga !== '' ? 
          <Diagnostico descripcion='Diagnostico: Tienes angina de pecho estable, consulta tu medico'  />  : null
          
    
}
    </Form>

  );
}

export default App;
