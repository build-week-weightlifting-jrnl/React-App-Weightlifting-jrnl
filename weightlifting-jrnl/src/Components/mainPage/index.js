import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "../Header/Header";
import Footer from "../Footer/footer";

export default class minePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>content</div>
        <Footer />
      </div>
    );
  }
}
