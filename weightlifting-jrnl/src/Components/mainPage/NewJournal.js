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

export default class newJournal extends React.Component {
    constructor() {
        super();
        this.state = {
          date: "",
          region: '',
          userId: 1

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
        }
      
    render() {
        return (
            <div>
                <Container className="App">
                    <h2>Create New Journal</h2>
                    <Form className="form" onSubmit={this.handleSubmit}>
                        <Col>
                            <FormGroup controlId="Region">
                                <Label>Region</Label>
                                <Input
                                    type="Region"
                                    name="Region"
                                    id="Region"
                                    placeholder="Region"
                                    value={this.state.Region}
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