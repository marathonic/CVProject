import React, { Component } from "react";
import phoneIcon from "../img/mobile.png";

// const RenderPersonal = () => {
//   return (
//     <div className="rendered-personal">
//       <h3>Name</h3>
//       <hr />
//       <p>emailadress@thing.com</p>
//       <div>
//         <img src={phone} alt="phone icon" />
//         <p>222-111-000</p>
//       </div>
//     </div>
//   );
// };

class RenderPersonal extends Component {
  constructor(props) {
    super(props);
  }

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
