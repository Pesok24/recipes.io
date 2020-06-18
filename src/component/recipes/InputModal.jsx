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


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Оставить отзыв
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do you like it?</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form.Control as="textarea" rows="3" id='reviewTextArea' /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={() => {
            handleClose()
            const input = document.getElementById('reviewTextArea')
            const doFetch = async () => {
              const responce = await inputFetch({text: input.value, params: props.params, userId: user.id})
              dispatch({ type: "REVIEWS", reviews: [...reviewSelector, { text: input.value , author: { name: user.name }} ] })
            }
            doFetch()
          }}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example

// render(<Example />);
