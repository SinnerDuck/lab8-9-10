import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from  './Home';
import Blog from  './components/Blog';
import NavBar from  './components/NavBar';
import Footer from './components/Footer';
import Donate from  './components/Donate';
import More from  './components/More';


import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    
    <>
   
  
   <NavBar />
    
    
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/don' element={<Donate />}/>
      <Route path='/more' element={<More />}/>
   
      
    </Routes>

    <Footer/>

   
    
   
    
    </>
    
    
    
    
    
     

      

      
      
    

      
    
  );
}





export default App;
