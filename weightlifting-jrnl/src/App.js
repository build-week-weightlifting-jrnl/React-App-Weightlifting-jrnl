import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/footer';
import Login from './Components/Login-Page';
import Signup from './Components/Signup';
import mainPage from './Components/mainPage';

function App () {
    return (
      <div className="main">
      <Header />
      <Route path="/Login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/mainPage" component={mainPage} />
      <Footer />
      </div>
    );
  
  };

export default App