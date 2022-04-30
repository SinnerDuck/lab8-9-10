import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import kuroko from './kuroko.jpg'
import genshin from './genshin.png'
import at1 from './at1.jpg'






const ExamplesPhoto = ()=>{
    return (
    
                  <>
                  <Carousel>
                  <Carousel.Item interval={1000} style={{'height':'600px'}}>
                    <img className='d-block w-100'
                    src={kuroko}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Kuroko no Basuke</h3>
                      <p>also known as Kuroko no Basket, The Basketball Which Kuroko Plays or Kuroko's Basketball.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={1000}  style={{'height':'600px'}}>
                    <img className='d-block w-100'
                    src={genshin}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Genshin Impact</h3>
                      <p>Genshin Impact is an open-world action RPG. In the game, set forth on a journey across a fantasy world called Teyvat.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  
                
                  <Carousel.Item interval={1000}  style={{'height':'600px'}}>
                    <img className='d-block w-100'
                    src={at1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Attack on Titan</h3>
                      <p>is a Japanese manga series written and illustrated by Hajime Isayama</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  
                </Carousel>

                
              
                  
          

                
          
                </>
    )
  }

 export default ExamplesPhoto;