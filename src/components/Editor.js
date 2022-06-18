import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import ProfessionalExp from "./ProfessionalExp";
import Education from "./Education";

class Editor extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="editing-container">
        <PersonalDetails />
        <ProfessionalExp />
        <Education />
      </div>
    );
  }
}

export default Editor;
