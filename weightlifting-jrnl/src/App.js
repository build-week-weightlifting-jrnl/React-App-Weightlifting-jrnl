import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login-Page';
import Signup from './Components/Signup';
import mainPage from './Components/mainPage';
const App = () => (
  <div className="main">
    <Route path="/" component={mainPage} />
  </div>
);

export default App