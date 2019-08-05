import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () =>
    <header className = "row d-flex justify-content-between">
        <div className = "col-md-2">
            <img id = "leon-logo" className = "img-responsive image-resize"  src = {logo} alt ="img"></img>
        </div>

        <div className = "col-md-6"> 
            <nav className = "d-flex justify-content-around">
                <a href="index.html">Home</a>
                <a href="aboutUs.html">About Us</a>
                <a href="contact.html">Contact</a>
                <div><Link to={'/login'}>Login</Link></div>
                <div><Link to={'/signup'}>Sign Up</Link></div>
            </nav>
        </div>
    </header>;


export default Header;