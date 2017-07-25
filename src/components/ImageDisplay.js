import React, { Component } from "react";
import "../styles/App.css";

export default class ImageDisplay extends Component {
  render() {
    let images = this.props.images.map(e => {
      return (
          <img class="roverImg" src={e.img_src} alt="rover"/>
      );
    });
    return (
      <div>
        {images}
      </div>
    );
  }
}
