

import { Container } from 'react-bootstrap';

import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <>
        <Container fluid style={{backgroundColor: '#37495C ', color: '#fff'}}>
            <Container style={{display: 'flex', justiyContent:'center', padding:'10px'}}>
                <p>Copyright © 2022 IZE,Inc.  </p>
             
            </Container>
        </Container>
        
        </>
    )
  }
}


    