import React, { Component } from "react";
import "../styles/App.css";

export default class ImageDisplay extends Component {
  render() {

      let center = {
          textAlign: "center"
      }

    if (this.props.images.length < 1) {
      return <div style={center}>There are No Images To Display. Please Make a Selection</div>;
    } else {
      let images = this.props.images.map(e => {
        return (
          <img
            key={Math.random()}
            className="roverImg"
            src={e.img_src}
            alt="rover"
          />
        );
      });
      return (
        <div>
          {images}
        </div>
      );
    }
  }
}
