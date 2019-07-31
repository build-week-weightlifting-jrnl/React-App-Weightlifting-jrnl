import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login-Page';
import Signup from './Components/Signup';
const App = () => (
  <div className="main">
    <Route path="/" component={Login} />
  </div>
);

export default App