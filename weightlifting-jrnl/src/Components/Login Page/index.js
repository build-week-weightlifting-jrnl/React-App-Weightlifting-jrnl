import React from 'react';
import ReactDOM from "react-dom";
import axios from "axios"

const Login = () => {
    function login() {
        axios
        // logs in user, response should include some sort of token to set in memory.
        .post("https://get-hercules.herokuapp.com/api/auth/login", {
            "username": "andrewj12763",                  
            "password": "password"
        })
        .then(response => {
            const token = response.data.token;
            // JWT - JSON WEB TOKEN
            localStorage.setItem("token", token);
            // saves a token in the browsers local memory.
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        });
    }

    function getItems() {
        const token = localStorage.getItem("token");
        // grabs token form browsers memory.
        axios
        .get("https://get-hercules.herokuapp.com/api/restricted/users", {
            headers: {
            Authorization: token
            // sets token on authorization headers using axios' syntax to determine that user is authorized
            }
        })
        .then(response => {
            console.log("RESPONSE FROM GET USERS", response);
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="App">
        <h1>Hello Auth</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={login}>Login</button>
        <button onClick={getItems}>Click me</button>
        </div>
    );
}
  export default Login;