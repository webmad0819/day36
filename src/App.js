import React, { Component } from "react";
import UserDetails from "./UserDetails";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <section className="App">
        <UserDetails
          name="Dani"
          age="39"
          profession="teacher"
          profileImg="https://media.licdn.com/dms/image/C4D03AQFAqpCNhEhfBg/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=oyO6GNrOLoLcA6gHN9bA3JlVN2P_3azHsSJbfOMTSVU"
        ></UserDetails>
        <UserDetails
          name="Lorena 2"
          age="42"
          profession="student"
          profileImg="https://media.licdn.com/dms/image/C5603AQFeRoRWWvwKAQ/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=vuu2N9t72BlZOImq8rHodjCNCuetM03DLCdOcoEKbH8"
        ></UserDetails>
      </section>
    );
  }
}
