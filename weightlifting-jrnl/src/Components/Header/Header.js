import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import "./Header.css"

const Header = () =>
    <header className = "row d-flex justify-content-between">
        <div className = "col-md-2">
            <img id = "leon-logo" className = "img-responsive image-resize"  src = {logo} alt ="img"></img>
        </div>

        <div className = "col-md-5"> 
            <nav className = "d-flex justify-content-around">
                <a href="index.html">Home</a>
                <a href="aboutUs.html">About Us</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
    </header>;


export default Header;