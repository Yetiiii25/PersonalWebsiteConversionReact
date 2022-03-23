import LandingPage from './components/landingpage/LandingPage'
import Hamburger from './components/hamburger/Hamburger';
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import React from 'react'
// import { ThemeProvider } from 'styled-components'


const App = () => {


  
  return (
    <>
    <NavBar />
    <Hamburger /> 
    <LandingPage />
    <Footer />
    </>

  );
};



export default App;
