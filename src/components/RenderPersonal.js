import React from "react";
import phoneIcon from "../img/mobile.png";

function RenderPersonal(props) {
  return (
    <div className="rendered-personal">
      <h3>{props.fullName}</h3>
      <hr />
      <p>{props.email}</p>
      <div>
        <img src={phoneIcon} alt="phone icon" />
        <p>{props.phone}</p>
      </div>
    </div>
  );
}

export default RenderPersonal;
