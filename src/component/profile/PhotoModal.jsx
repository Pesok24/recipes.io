import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap' 
import CropForm from '../ImageUpload';
import { useSelector, useDispatch } from 'react-redux';

// const PhotoModal = () => {
//   return ( 
//     <Modal.Dialog>
//   <Modal.Header closeButton>
//     <Modal.Title>Modal title</Modal.Title>
//   </Modal.Header>

//   <Modal.Body>
//     <CropForm />
//     <p>Modal body text goes here.</p>
//   </Modal.Body>

//   <Modal.Footer>
//     <Button variant="secondary">Close</Button>
//     <Button variant="primary">Save changes</Button>
//   </Modal.Footer>
// </Modal.Dialog>
//    );
// }
 
// export default PhotoModal;


function PhotoModal (props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // const user = useSelector(state => state.user)
  // const reviewSelector = useSelector(state => state.reviews)
  // const dispatch = useDispatch()


  return (
    <>
      <Button className='button' variant="primary" onClick={handleShow}>
        Загрузить фото:
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Выберите фото:</Modal.Title>
        </Modal.Header>
        <Modal.Body><CropForm /></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Закрыть
          </Button>
          {/* <Button variant="primary" onClick={() => {
            handleClose()
          }}>
            Отправить
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PhotoModal
