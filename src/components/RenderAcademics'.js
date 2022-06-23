import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdHighlightOff } from "react-icons/md";

function RenderAcademics(props) {
  const { sections } = props;
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
                onClick={props.editSection}
                id={"edit-" + section.sectionNumber}
                name="edit-academic"
              >
                <FaRegEdit style={{ pointerEvents: "none" }} />
              </button>
              <hr />
              <button
                type="button"
                className="del-section-btn"
                onClick={props.removeSection}
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
        <h3>{props.program}</h3>
        <p>{props.school}</p>
        {props.startDate !== "" && <p>From: {props.startDate}</p>}
        {props.endDate !== "" && <p>To: {props.endDate}</p>}
      </div>
    </div>
  );
}

export default RenderAcademics;
