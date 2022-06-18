import React, { Component } from "react";

class ProfessionalExp extends Component {
  constructor() {
    super();
    this.state = {
      name: "Super real name",
      email: "superrealemail@thing.com",
      phone: "010101-020202-0303",
    };
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <section className="exp-section">
        <h3>Professional Experience</h3>
        <label htmlFor="exp-workplace">previous workplace</label>
        <input
          type={"text"}
          id="exp-workplace"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="exp-position">previous position title</label>
        <input type={"text"} id="exp-position"></input>
        <label htmlFor="exp-tasks">main tasks</label>
        <textarea rows="10" cols="50" id="exp-tasks"></textarea>
        <label htmlFor="exp-dates">how long did you work there?</label>
        <input type={"text"} id="exp-dates"></input>
      </section>
    );
  }
}

export default ProfessionalExp;
