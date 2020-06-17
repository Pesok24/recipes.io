import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import CropForm from "../ImageUpload";
import { useSelector, useDispatch } from "react-redux";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function PhoneModal(props) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userId = useSelector(state => state.user.id)
  
  // const user = useSelector(state => state.user)
  // const reviewSelector = useSelector(state => state.reviews)
  // const dispatch = useDispatch()

  return (
    <>
      <Button className="button" variant="primary" onClick={handleShow}>
        Загрузить фото:
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Введите номер телефона:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              const doFetch = async () => {
                const responce = await fetch(
                  "http://localhost:3000/recipe/phone",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ phone: value, id: userId }),
                  }
                );
                const result = await responce.json()
                return result
              };
              doFetch()
              handleClose();
            }}
          >
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PhoneModal;
