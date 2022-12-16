import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//importing css
import './bootstrap_quartz.min.css';
import './NasabahApp.css'

//importing components
import Header from './components/Header';

//importing main pages
import HomeNasabahData from './pages/HomeNasabahData';
import Transactions from './pages/Transactions';
import CheckPoints from './pages/CheckPoints';
import PrintReport from './pages/PrintReport';





function NasabahApp() {
  return (
    <BrowserRouter>
      <div id="nasabah-app">
      {console.log('nasabah-app rendered')}
      <Header/>
      <Routes>
        <Route path='/' element={<HomeNasabahData/>}/>
        <Route path='/transactions' element={<Transactions/>}/>
        <Route path='/check-points' element={<CheckPoints/>}/>
        <Route path='/print-report' element={<PrintReport/>}/>
      </Routes>
      
      {/* <Transactions/>
      <CheckPoints/>
      <PrintReport/> */}
   </div>
    </BrowserRouter>
    
  
   
  );
}
 
export default NasabahApp;
