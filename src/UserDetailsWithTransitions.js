import React, { Component } from "react";
import "./UserDetailsWithTransitions.css";

export default class UserDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      imageStyle: "",
      mode: 1,
      name: props.name.toUpperCase(),
      showFullDetails: false
    };
  }

  setImageAsVisited() {
    this.setState({
      ...this.state,
      showFullDetails: !this.state.showFullDetails
    });
  }

  switchMode() {
    this.setState({
      ...this.state,
      imageStyle: this.state.imageStyle === "active" ? "" : "active"
    });
  }

  render() {
    return (
      <div className="user-details">
        <button onClick={() => this.switchMode()}>Switch mode</button>

        <img
          src={this.props.profileImg}
          alt={this.props.name + " profile image"}
          title={this.props.name + " profile image"}
          onClick={() => this.setImageAsVisited()}
          // className={`${this.state.mode === 1 ? "" : "active"}`}
          className={`${this.state.imageStyle}`}
        />

        {/* {this.state.imageClicked && (
          <h1>
            {this.state.name} ({this.props.age}) - {this.props.profession}
          </h1>
        )}

        {!this.state.imageClicked && <h1>{this.props.profession}</h1>} */}

        <h1 className={`${this.state.showFullDetails ? "visible" : "not-visible"}`}>
          {this.state.name} ({this.props.age}) - {this.props.profession} ({this.props.salary} eur)
        </h1>

        <h1 className={`${!this.state.showFullDetails ? "visible" : "not-visible"}`}>{this.props.profession} ({this.props.age})</h1>
      </div>
    );
  }
}
