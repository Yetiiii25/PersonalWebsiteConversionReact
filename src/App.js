import Landingpage from './components/landingpage/Landingpage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Hamburger from './components/hamburger/Hamburger';
import React,{useState} from 'react'


const App = () => {
 
 
  return (
    <>
    <Navbar />
    <Hamburger /> 
    <Landingpage />
    <Footer />
    </>
  );
};



export default App;
