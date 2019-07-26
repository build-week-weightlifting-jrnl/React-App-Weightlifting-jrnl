import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Login from "./Components/Login Page/index"

function App() {
  return (
    <div>
      <header className="App-header">
        <div>This Is the Header</div>
        <div><Login /></div>
        <div>This Is the Footer</div>
      </header>
    </div>
  );
}

export default App;
