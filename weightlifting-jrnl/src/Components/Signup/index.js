import React from "react";
// import ReactDOM from "react-dom";
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

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
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

  signup = (event) => {
    event.preventDefault();
    console.log(this.state)
    axios

      // logs in user, response should include some sort of token to set in memory.
      .post("https://get-hercules.herokuapp.com/api/auth/register", {
        username: this.state.username,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email
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
          <h2>Sign Up</h2>
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
            <Col>
              <FormGroup controlId="firstName">
                <Label>First Name</Label>
                <Input
                  type="firstName"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup controlId="lastName">
                <Label>Last Name</Label>
                <Input
                  type="lastName"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup controlId="email">
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Button
              onClick={this.signup}
              /* disabled={!this.validateForm()} */ type="submit"
            >
              Signup
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
