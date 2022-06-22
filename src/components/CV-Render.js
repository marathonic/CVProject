import React, { Component } from "react";
import RenderAcademics from "./RenderAcademics'";
import RenderPersonal from "./RenderPersonal";
import RenderProfessional from "./RenderProfessional";

class CVRender extends Component {
  render() {
    return (
      <div className="cv-render">
        <RenderPersonal />
        <RenderProfessional />
        <RenderAcademics />
      </div>
    );
  }
}

export default CVRender;
