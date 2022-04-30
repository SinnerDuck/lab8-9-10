import React from 'react';



import { Button, Container, Row, Col, Card} from 'react-bootstrap';
import './More.css';





export default function Cards(props){
    return (


<>
<div className='div'>
<Container style={{paddingTop:'2rem', paddingBottom:'2rem'}}>
                <Row>
                    <Col>
                    <Card style={{width:'18rem'}}>
                      <Card.Img variant='top' src={props.img}/>
                      <Card.Body>
                          <Card.Title>{props.name}</Card.Title>
                          <Card.Text>{props.about} </Card.Text>
                          <Button variant='dark'><a href='/more'>More</a></Button>
                      </Card.Body>
                      </Card>
                   
                    
                    </Col>
                    <Col>
                    <Card style={{width:'18rem'}}>
                      <Card.Img variant='top' src={props.img2}/>
                      <Card.Body>
                          <Card.Title>{props.name2}</Card.Title>
                          <Card.Text>{props.about2} </Card.Text>
                          <Button variant='dark'><a href='/more'>More</a></Button>
                      </Card.Body>
                      </Card>
                   
                    
                    </Col>

                    <Col>
                    <Card style={{width:'18rem'}}>
                      <Card.Img variant='top' src={props.img3}/>
                      <Card.Body>
                          <Card.Title>{props.name3}</Card.Title>
                          <Card.Text>{props.about3} </Card.Text>
                          <Button variant='dark'><a href='/more'>More</a></Button>
                      </Card.Body>
                      </Card>
                   
                    
                    </Col>
                </Row>
            </Container>
            </div>
            </>

)
}
