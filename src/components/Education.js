import React, { Component } from "react";
import "../style.css";
import { getDate, getMaxFutureGrad } from "./getDate";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dateCheck = getDate();
    let maxFutureGrad = getMaxFutureGrad();
    return (
      <section className="education-section">
        <h3>Formal education</h3>
        <label htmlFor="edu-school">School</label>
        <input type={"text"} id="edu-school"></input>
        <label htmlFor="edu-title">Title of study</label>
        <input type={"text"} id="edu-title"></input>
        <div className="education-section-dates">
          <label htmlFor="edu-date-from">From</label>
          <input
            type={"month"}
            min={"1920-01"}
            max={dateCheck}
            id="edu-date-from"
          ></input>
          <label htmlFor="edu-date-to">To</label>
          <input type={"month"} max={maxFutureGrad} id="edu-date-to"></input>
        </div>
        {console.log({ dateCheck })}
      </section>
    );
  }
}

export default Education;
