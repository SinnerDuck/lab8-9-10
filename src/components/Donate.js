import React, { useState } from 'react';
import { Button, Card,   Modal} from 'react-bootstrap';
import './More.css';





const Donate = ()=>{

  const[show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (


<>


<Card style={{paddingTop:'2rem', paddingBottom:'2rem'}} >
  <Card.Header as="h5">Support Me</Card.Header>
  <Card.Body>
    <Card.Title>I would be glad if you supported me financially</Card.Title>
    <Card.Text>
    iitu.bank: 8888 8888 8888 8888
    </Card.Text>
    <Button variant='primary' onClick={handleShow}>Support</Button>
  </Card.Body>
</Card>

 <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your donation has been accepted</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Thank U!</p>
                    
                </Modal.Body>
            </Modal>

</>

    )};

    export default Donate;