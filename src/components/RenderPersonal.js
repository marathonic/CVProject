import React, { Component } from "react";
import phoneIcon from "../img/mobile.png";

class RenderPersonal extends Component {
  render() {
    return (
      <div className="rendered-personal">
        <h3>{this.props.fullName}</h3>
        <hr />
        <p>{this.props.email}</p>
        <div>
          <img src={phoneIcon} alt="phone icon" />
          <p>{this.props.phone}</p>
        </div>
      </div>
    );
  }
}

export default RenderPersonal;
