import React, { useState } from 'react';
import { Nav, Navbar,Button, Container, Modal} from 'react-bootstrap';






    

export default function NavBar  (){

    const[show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
    

    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand>Artist's portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            <a href='/'>Home</a>
                            <a href='/blog' >Blog</a>
                            <a href='/don' >Donate</a>
                            
                        </Nav>
                        <Nav>
                            <Button variant='primary' onClick={handleShow}>Contact</Button>
                            
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Me in the net</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>ilias.zh02@gmail.com</p>
                    <p>Phone number: +77471800005</p>
                    <a href='/'>Instagram: @_zzhanabayev</a>
                </Modal.Body>
            </Modal>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Me in the net</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>ilias.zh02@gmail.com</p>
                    <p>Phone number: +77471800005</p>
                    <a href='/'>Instagram: @_zzhanabayev</a>
                </Modal.Body>
            </Modal>
            
            
            </>
    );
    }



 