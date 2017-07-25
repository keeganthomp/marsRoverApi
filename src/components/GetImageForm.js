import React, { Component } from "react";
import "../styles/App.css";
import GetImageButton from "./GetImageButton";
import ImageDisplay from "./ImageDisplay";

const API_KEY = "17VDhwfLoFyDl89jpfMHUUSAQKwmpWDgWqMotCvB";

export default class GetImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: ""
    };
  }

  fetchRoverImage = () => {
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

    fetch(imageUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let roverImage = data;
        this.setState({ images: roverImage.photos });
        console.log("image STATE:", this.state.images);
      });
  };

  handleRover = e => {
    let rover = e.target.value;
    this.setState({ rover });
    console.log(rover);
  };

  handleCamera = e => {
    let camera = e.target.value;
    this.setState({ camera });
    console.log("camera ", camera);
  };

  handleSol = e => {
    let sol = e.target.value;
    this.setState({ sol });
    console.log("sol ", sol);
  };

  render() {
    return (
      <div>
        <div className="center">
          <label htmlFor="rover">Rover</label>
          <select
            onChange={this.handleRover}
            id="rover"
            value={this.state.value}
          >
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select
            onChange={this.handleCamera}
            id="rover"
            value={this.state.value}
          >
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input
            type="number"
            onChange={this.handleSol}
            max="2000"
            min="1000"
            value={this.state.value}
          />
          <GetImageButton
            fetchRoverImage={this.fetchRoverImage}
            roverType={this.state.rover}
          />
          <ImageDisplay images={this.state.images} />
        </div>
      </div>
    );
  }
}
