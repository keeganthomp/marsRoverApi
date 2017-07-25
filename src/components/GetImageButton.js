import React, { Component } from "react";
import "../styles/App.css";

export default class GetImageForm extends Component {
  render() {
    return (
      <div className="buttonContainer">
        <button className="button" onClick={this.props.fetchRoverImage}>
          Get Rover Images
        </button>
        <div className="title">
          {this.props.roverType}
        </div>
      </div>
    );
  }
}
