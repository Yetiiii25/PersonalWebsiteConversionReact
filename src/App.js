import Landingpage from './components/landingpage/Landingpage'
import Hamburger from './components/hamburger/Hamburger';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import React,{useState} from 'react'


const App = () => {


  
  return (
    <>
    <Navbar  />
    <Hamburger /> 
    <Landingpage />
    <Footer />
    </>
  );
};



export default App;
