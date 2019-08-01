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
    constructor() {
        super();
        this.state = {
          journals: ""
        };
      }
    getJournals = (event) => {
        event.preventDefault();
        const api = 'https://get-hercules.herokuapp.com/api/restricted/journals'; 
        const token = localStorage.getItem('token');
        console.log(token);
        // const token = user.data.id; /*take only token and save in token variable*/
        axios.get(api ,  {headers:{Authorization : token} })
        .then(res => {
           const journals = res.data.journals
            console.log(journals);
        })
        .catch((error) => {
            console.log(error)
        })
      }
  render() {
    return (
      <div>
        <div className="mainContent">
        <Button onClick={this.getJournals} type="submit">Journals</Button>
        <div className="journals"><span>{this.state.journals[0]}</span></div>
        </div>
      </div>
    );
  }
}