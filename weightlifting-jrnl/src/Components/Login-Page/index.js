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
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  login = (event) => {
    event.preventDefault();
    console.log(this.state)
    axios

      // logs in user, response should include some sort of token to set in memory.
      .post("https://get-hercules.herokuapp.com/api/auth/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        const token = response.data.token;
        // JWT - JSON WEB TOKEN
        localStorage.setItem("token", token);
        // saves a token in the browsers local memory.
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getItems() {
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
  render() {
    return (
      <div>
        <Container className="App">
          <h2>Sign In</h2>
          <Form className="form" onSubmit={this.handleSubmit}>
            <Col>
              <FormGroup controlId="username">
                <Label>Username</Label>
                <Input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup controlId="password">
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Button onClick={this.login} type="submit"><Link to={'/mainPage'}>Login</Link></Button>
          </Form>
        </Container>
      </div>
    );
  }
}
