import React, { Component } from "react";

class PersonalDetails extends Component {
  render() {
    return (
      <section className="details-section">
        <h3>Personal Details</h3>
        <label htmlFor="details-name">Name</label>
        <input type={"text"} id="details-name"></input>
        <label htmlFor="details-email">email</label>
        <input type={"email"} id="details-email"></input>
        <label htmlFor="details-phone">phone</label>
        <input type={"text"} id="details-phone"></input>
      </section>
    );
  }
}

export default PersonalDetails;
