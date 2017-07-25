import React, { Component } from "react";
import "../styles/App.css";
import GetImageForm from "./GetImageForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: ""
    };
  }

  componentDidMount = () =>{
    let url =
      "https://api.nasa.gov/planetary/apod?api_key=Kda5HM5NNGQTc4pvqRYK6rr8rTt6dvHAgRoPqLMC";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let roverImage = data;
        console.log(":::::", roverImage);
        // this.setState({
        //   desserts: menu[1].Desserts,
        //   appetizers: menu[1].Appetizers,
        //   entrees: menu[1].Entrees
        // });
      });
  };
  

  render() {
    return (
      <div>
        <GetImageForm />
      </div>
    );
  }
}
export default App;
