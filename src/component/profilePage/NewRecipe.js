import React, { useState, useEffect } from 'react';

import { Button, Modal, Form } from 'react-bootstrap';

import { useSelector  } from 'react-redux';
function NewRecipe(props) {

    const user = useSelector(state => state.user)
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');

    //добавление ингредиентов
    const [ingridients,setIngridient] = useState('');
    const [autor,setAutor] = useState('');
    const [image,setImage] = useState('');
    //название блюда
    const [title,setTitle] = useState('');
    const [recipe,setRecipe] = useState('');

    // const [newRecipe,addRecipe] = useState({
    //     title: '',
    //       author: '',
    //       date: '',
    //       image:'',
    //       ingridients: '',
    //       recipe: ''
    // })

   const  getRecipe = (event) => {
       setRecipe(event.target.value)
   };

        const getIng = (event)=> {
            const title = event.target.value;
            const arrTitle = title.split(' ');

            setIngridient(arrTitle)

        };

    const getTitle = (event) => {
        setTitle(event.target.value)

    }
    const getImg = (event) => {
        setImage(event.target.value)
    }
    console.log(image);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handlGetRecipe = () => {

        handleClose()

        const postRecipe = async () => {
            const response = await fetch("/addnew", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: name, author: user.name,ingridients: ingridients,recipe:recipe })
            });
            const result = await response.json()
            return result
        }
        postRecipe()

    };


    return (
        <>
            <Button className='button' variant="primary" onClick={handleShow}>
                Добавить рецепт
            </Button>

            <Modal size="sm" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавте рецепт</Modal.Title>
                </Modal.Header>
                {/*<Modal.Body><Form.Control <input onChange={(ev) => setName(ev.target.value)} rows="3" id='reviewTextArea'/> /></Modal.Body>*/}
                <Modal.Body>
                    <input type="text" name="title" placeholder="Блюдо" onChange={getTitle}/>
                    <input type="file"  name="image" placeholder="Добавить фото" onChange={getImg}/>
                    <figure>
                        <figcaption>Введите через пробел </figcaption>
                        <textarea  placeholder="Что для этого нужно"  onChange={getIng}/>
                    </figure>
                    <textarea placeholder="рецепт" onChange={getRecipe}/>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={handlGetRecipe}>
                        Отправить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewRecipe;
