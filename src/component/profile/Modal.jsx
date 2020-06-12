import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ModalKa(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  setTimeout(() => {
    setShow(false);
  }, 10000);

  return (
    <div>
      <span variant='primary' onClick={handleShow}>
        {props.question.points}
      </span>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.question.text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className='form-control' placeholder='Ваш ответ'></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary'>Answer</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
