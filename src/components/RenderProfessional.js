import React, { Component } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdHighlightOff } from "react-icons/md";

class RenderProfessional extends Component {
  render() {
    const { sections } = this.props;

    return (
      <div className="rendered-professional">
        <div className="big-xp">
          <h3>Previous</h3>
          <h3> XP</h3>
        </div>
        <div className="prev-exp">
          {sections.map((section) => {
            return (
              <div className="exp-strip" key={section.sectionNumber}>
                <div className="button-strip">
                  <button
                    className="edit-section-btn"
                    onClick={this.props.editSection}
                    id={"edit-" + section.sectionNumber}
                    name="edit-professional"
                  >
                    <FaRegEdit style={{ pointerEvents: "none" }} />
                  </button>
                  <hr />
                  <button
                    className="del-section-btn"
                    onClick={this.props.removeSection}
                    id={section.sectionNumber}
                  >
                    <MdHighlightOff style={{ pointerEvents: "none" }} />
                  </button>
                </div>
                <div className="exp-brick">
                  <p>{section.workplace}</p>
                  <p>{section.position}</p>
                  <p>{section.stay}</p>
                </div>
                <div className="exp-tasks">
                  <p>{section.tasks}</p>
                </div>
              </div>
            );
          })}
          {this.props.workplace !== "" && (
            <div className="exp-strip">
              <div className="exp-brick">
                <p>{this.props.workplace}</p>
                <p>{this.props.position}</p>
                <p>{this.props.stay}</p>
              </div>
              <div className="exp-tasks">
                <p>{this.props.tasks}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default RenderProfessional;
