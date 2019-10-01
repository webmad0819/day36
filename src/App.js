import React, { Component } from "react";
// import UserDetails from "./UserDetails";
import UserDetails from "./UserDetailsWithTransitions";
import "./App.css";
import { StudentsList } from "./studentsList.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      chosenAge: 38,
      studentsList: StudentsList
    };
  }

  reduceAge() {
    let newAge = this.state.chosenAge;
    newAge--;

    this.setState({
      ...this.state,
      chosenAge: newAge
    });
  }

  removeStudent() {
    let clonedStudentsList = [...this.state.studentsList]
    clonedStudentsList.shift()

    this.setState({
      ...this.state,
      studentsList: clonedStudentsList
    });
  }

  render() {
    return (
      <section className="App">
        <button onClick={() => this.reduceAge()}>Reduce age :)</button>
        <button onClick={() => this.removeStudent()}>Remove student</button>
        <h1>Chosen age: {this.state.chosenAge}</h1>
        {/* <ul>
          {[1, 2, 3, 4, 23,23,23,23,3, "KKKKKKK"].map(valor => (
            <li>{valor}</li>
          ))}
        </ul> */}

        <div className="students">
          {this.state.studentsList
          // .filter(
          //   student => student.age === this.state.chosenAge
          // )
          .map((student, idx) => (
            <UserDetails
              // key={student._id}
              key={idx}
              {...student}
              profileImg="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4017/s300/logo-ironhack-blue.png"
            ></UserDetails>
          ))}

          {/* {StudentsList.map(student => (
          <UserDetails
            name={student.name}
            age={student.age}
            profession={student.profession}
            salary={student.salary}
            profileImg="https://media.licdn.com/dms/image/C4D03AQFAqpCNhEhfBg/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=oyO6GNrOLoLcA6gHN9bA3JlVN2P_3azHsSJbfOMTSVU"
          ></UserDetails>
        ))} */}
        </div>
      </section>
    );
  }
}
