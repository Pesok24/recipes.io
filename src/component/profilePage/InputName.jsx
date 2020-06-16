import React from 'react';
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

function InputStatus(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeName = () => {

    dispatch({type: 'CHANGE_NAME', name: name })
    handleClose()
    
    const doFetch = async () => {
      const response = await fetch("recipe/changeName", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, id: user.id })
      });
      const result = await response.json()
      return result
    }
    doFetch()
  
  }

  const user = useSelector(state => state.user)

  return (
    <>
      <Button className='button' variant="primary" onClick={handleShow}>
        Изменить имя
      </Button>

      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Напишите новое имя</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form.Control as="textarea" value={name} onChange={(ev) => setName(ev.target.value)} rows="3" id='reviewTextArea' /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleChangeName}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
