import React, { Component } from "react";
import "./UserDetails.css";

export default class UserDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      imageClicked: false,
      mode: 1,
      name: props.name.toUpperCase().substring(0, 3)
    };
  }

  setImageAsVisited() {
    this.setState({
      ...this.state,
      imageClicked: !this.state.imageClicked
    });
  }

  switchMode() {
    this.setState({
      ...this.state,
      mode: this.state.mode === 1 ? 2 : 1
    });
  }

  render() {
    return (
      <div className="user-details">
        <button onClick={() => this.switchMode()}>
          Switch mode {this.state.mode}
        </button>

        {this.state.mode === 1 && (
          <img
            src={this.props.profileImg}
            alt={this.props.name + " profile image"}
            title={this.props.name + " profile image"}
            onClick={() => this.setImageAsVisited()}
          />
        )}

        {this.state.imageClicked && (
          <h1>
            {this.state.name} ({this.props.age}) - {this.props.profession}
          </h1>
        )}

        {!this.state.imageClicked && <h1>{this.props.profession}</h1>}
      </div>
    );
  }
}
