import React, { useState, Fragment } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Diagnostico = ({descripcion}) => {
    const [mostrarResultado, obtenerResultado] = useState(false);

    const mostrarDiagnostico = () => obtenerResultado(true);
    const ocultarDiagnostico = () => obtenerResultado(false);
    return (
        <Fragment>
            <Button className="text-white bg-dark p-3" onClick={mostrarDiagnostico}>Ver diagnostico</Button>
            <Modal show={mostrarResultado} onHide={ocultarDiagnostico}>
                <Modal.Header closeButton>
                    <Modal.Title>Diagnostico</Modal.Title>
                </Modal.Header>
                <Modal.Body>{descripcion}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ocultarDiagnostico}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export default Diagnostico;