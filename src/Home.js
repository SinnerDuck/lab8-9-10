import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



import ExamplesPhoto from './components/ExamplesPhoto';
import Cards from './components/Cards';






import six from './img/six.jpg'
import sally from './img/sally.jpg'
import fran from './img/fran.jpg'
import dbd from './img/dbd.jpg'
import pony from './img/pony.jpg'
import at from './img/at.jpg'
import tail from './img/tail.jpg'
import lovers from './img/lovers.jpg'
import gensh from './img/gensh.jpg'





export default function Home ()  {
    return (
      
      <>
     
      
      
      <ExamplesPhoto />
     
     
      <Cards name='Little Nightmare' about='is a cross-platform action-adventure video game developed by the Swedish company Tarsier Studios and published by Bandai Namco Entertainment.' img={six} name2='Dead by Daylight' about2='Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors.' img2={dbd} name3='Shingeki no Kyojin' about3='is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives inside cities surrounded by three enormous walls that protect them from the gigantic man-eating humanoids referred to as Titans; ' img3={at}/>
  
  
      
      <Cards name='Fran Bow' about='Fran Bow is a creepy adventure game that tells the story of Fran, a young girl struggling with a mental disorder and an unfair destiny. ' img={fran} name2='MLP' about2='Canadian-American childrens animated television series created by Lauren Faust for Hasbro.' img2={pony} name3='Fairy Tail' about3='shonen manga by Hiro Mashima. The manga was serialized in Kodanshas Weekly Shōnen Magazine from August 2006 to July 2017.' img3={tail}/>
  
      <Cards name='Sally Face' about='Sally Face is a dark and tragic game in which you will have to unravel the mysteries of Sallys life.' img={sally}  name2='Diabolik Lovers' about2='a series of Japanese media products for a female target audience created by Rejet.' img2={lovers} name3='Genshin' about3='is an open world action-adventure game with RPG elements developed by the Chinese company miHoYo Limited. The game is distributed through digital distribution on a free-to-play model.' img3={gensh}/>
      
  
      
     
     
      
      </>
      
      
      
      
      
       
  
        
  
        
        
      
  
        
      
    );
  }
  
  
  
  
  
 