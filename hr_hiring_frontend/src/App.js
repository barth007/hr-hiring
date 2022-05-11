import React, { StrictMode } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './component/Login';
import SignUP from './component/Register';
import CandidateHomeScreen from './component/CandidateHomeScreen';
import {  HashRouter } from 'react-router-dom'



function App() {
 
    return (
      <div className="App">
        <Router>
        

          <StrictMode>
          

            <Routes>
            <Route exact path="/" element={<SignUP/>}>

            </Route>
            <Route exact path="/login" element={<SignIn/>}>

            </Route>

            <Route exact path="/home" element={<CandidateHomeScreen/>}>
            </Route>
           
            

            </Routes>
          

            
            
          </StrictMode>
         
        </Router>
        
      </div>
    );

}

export default App;
