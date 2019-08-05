import React from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import {
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default class minePage extends React.Component {
    constructor() {
        super();
        this.state = {
          journals: [],
          exercises: []
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
           const journalsArr = res.data.journals
           this.state.journals.push(journalsArr)
          console.log(this.state.journals); 
        })
        .catch((error) => {
            console.log(error)
        })
      }
      getExercises = (event) => {
        event.preventDefault();
        const api = 'https://get-hercules.herokuapp.com/api/restricted/exercises/journal/:id'; 
        const token = localStorage.getItem('token');
        // console.log(token);
        // const token = user.data.id; /*take only token and save in token variable*/
        axios.get(api ,  {headers:{Authorization : token} }, {Parameters:{id :22} })
        .then(res => {
          //  const journalsArr = res.data.journals
          //  this.state.journals.push(journalsArr)
          const exercisesArr = res.data.exercises
          this.state.exercises.push(exercisesArr)
          console.log(this.state.exercises); 
          console.log(exercisesArr)
        })
        .catch((error) => {
            console.log(error)
        })
      }
      deleteJournal = (event) => {
        event.preventDefault();
        const api = 'https://get-hercules.herokuapp.com/api/restricted/journals/:id'; 
        const token = localStorage.getItem('token');
        const id = 1;
        // console.log(token);
        // const token = user.data.id; /*take only token and save in token variable*/
        axios.DELETE(api ,  {headers:{Authorization : token} }, {Parameters:{id : id} })
        .then(res => {
          //  const journalsArr = res.data.journals
          //  this.state.journals.push(journalsArr)
          
        })
        .catch((error) => {
            console.log(error)
        })
      }
      newJournal = (event) => {
        event.preventDefault();
        const api = 'https://get-hercules.herokuapp.com/api/restricted/journals/'; 
        const token = localStorage.getItem('token');
        const date = "Jan 20, 2019";
        const region = "Legs";
        const userId = 1;
        // console.log(token);
        // const token = user.data.id; /*take only token and save in token variable*/
        axios.Post(api ,  {headers:{Authorization : token} }, {Body:{"date": date,
        "region": region,
        "userId": userId} })
        .then(res => {
          //  const journalsArr = res.data.journals
          //  this.state.journals.push(journalsArr)
          
        })
        .catch((error) => {
            console.log(error)
        })
      }
     
  render() {
    // console.log(this.state.journals);
    const journData = [{created_at: "2019-06-23 23:19:17",
                        date: "1561231957525",
                        id: 155,
                        region: "Legs",
                        updated_at: "2019-06-23 23:19:17",
                        userId: 1}, {created_at: "2019-06-23 23:19:17",
                        date: "1561231957525",
                        id: 155,
                        region: "Legs",
                        updated_at: "2019-06-23 23:19:17",
                        userId: 1}, {created_at: "2019-06-23 23:19:17",
                        date: "1561231957525",
                        id: 155,
                        region: "Arms",
                        updated_at: "2019-06-23 23:19:17",
                        userId: 2}];
    // const journData = this.state.journals;
     const filterData = [];
    const journArr = journData.filter(item => filterData.push(item.region));
    // console.log(filterData);
    const journBtn = filterData.map(item => <Button>{item}</Button>);
    return (   
      <div>
        <div className="mainContent">
        <Button onClick={this.getJournals} type="submit">Journals</Button>
        <Button onClick={this.getExercises} type="submit">Exercises</Button>
        <div className="journals">{journBtn}</div>
        </div>
      </div>
    );
  }
}