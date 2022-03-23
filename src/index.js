import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PortfolioPage from './routes/PortfolioPage'
import AboutmePage from './routes/AboutmePage';
import MultiCountryPage from './routes/MultiCountryPage';
import PersonalPage from './routes/PersonalPage';
import PisPage from './routes/PisPage';


ReactDOM.render(
  <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<AboutmePage />} />
      <Route path='/myportfolio' element={<PortfolioPage />} />
      <Route path='/multicountry' element={<MultiCountryPage />} />
      <Route path='/personal' element={<PersonalPage />} />
      <Route path='/pis' element={<PisPage />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

