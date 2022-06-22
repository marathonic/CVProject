import React, { Component } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdHighlightOff } from "react-icons/md";

class RenderAcademics extends Component {
  render() {
    const { sections } = this.props;
    return (
      <div className="rendered-academics">
        <div className="big-academics">
          <h3>Academic</h3>
          <h3>STUFF</h3>
        </div>
        {sections.map((section) => {
          return (
            <div className="edu-strip" key={section.sectionNumber}>
              {/* Buttons section */}
              <div className="button-strip">
                <button
                  className="edit-section-btn"
                  onClick={this.props.editSection}
                  id={"edit-" + section.sectionNumber}
                  name="edit-academic"
                >
                  <FaRegEdit style={{ pointerEvents: "none" }} />
                </button>
                <hr />
                <button
                  type="button"
                  className="del-section-btn"
                  onClick={this.props.removeSection}
                  id={section.sectionNumber}
                >
                  <MdHighlightOff style={{ pointerEvents: "none" }} />
                </button>
              </div>
              <div className="edu-details">
                <h3>{section.program}</h3>
                <p>{section.school}</p>
                <p>{section.startDate}</p>
                <p>{section.endDate}</p>
              </div>
            </div>
          );
        })}
        <div className="edu-details">
          <h3>{this.props.program}</h3>
          <p>{this.props.school}</p>
          {this.props.startDate !== "" && <p>From: {this.props.startDate}</p>}
          {this.props.endDate !== "" && <p>To: {this.props.endDate}</p>}
        </div>
      </div>
    );
  }
}

export default RenderAcademics;
