import React, { StrictMode } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './component/Login';
import SignUP from './component/Register';
import CandidateHomeScreen from './component/screens/CandidateHomeScreen';
import {  HashRouter } from 'react-router-dom';
import Logout from './component/Logout';
import AlertScreen from './component/screens/AlertScreen';
import UserScreen from './component/screens/UserScreen';


function App() {
  
 
    return (
      <div className="App">
         <Router> 
         <Routes>
         <Route exact path="/login" element={<SignIn/>}/>
          
             <Route exact path="/" element={<SignUP/>}/> 
            
            
            <Route exact path="/home" element={<CandidateHomeScreen/>}/>
            <Route exact path="/logout" element={<Logout/>}/>
            <Route exact path="/alerts" element={<AlertScreen/>}/>
            <Route exact path="/user" element={<UserScreen/>}/>

            

            </Routes>
      
         </Router> 
        
      </div>
    );

}

export default App;
