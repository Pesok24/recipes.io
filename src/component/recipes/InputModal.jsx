import React from 'react';
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import inputFetch from '../../inputFetch';
import { useSelector, useDispatch } from 'react-redux';

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector(state => state.user)
  const reviewSelector = useSelector(state => state.reviews)
  const dispatch = useDispatch()
console.log(user, "Стэйт");

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Оставить отзыв
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Напишите свой отзыв:</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form.Control as="textarea" rows="3" id='reviewTextArea' /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={() => {
            handleClose()
            const input = document.getElementById('reviewTextArea')
            console.log(input.value);
            const doFetch = async () => {
              const responce = await inputFetch({text: input.value, params: props.params, userId: user.id})
              console.log('qweqewqwe',responce);
              dispatch({ type: "REVIEWS", reviews: [...reviewSelector, { text: input.value , author: { name: user.name }} ] })
            }
            doFetch()
          }}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example

// render(<Example />);
