import React, { Component } from "react";

// const RenderAcademics = () => {
//   return (
//     <div className="rendered-academics">
//       <h3>Academic stuff</h3>
//       <div className="edu-details">
//         <h3>Real studies</h3>
//         <p>Rawnald Institution</p>
//         <p>June 2001 - August 2008</p>
//       </div>
//     </div>
//   );
// };

class RenderAcademics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sections } = this.props;
    return (
      <div className="rendered-academics">
        <h3>Academic stuff</h3>
        {sections.map((section) => {
          return (
            <div className="rendered-edu-details">
              <h3>{section.program}</h3>
              <p>{section.school}</p>
              <p>{section.startDate}</p>
              <p>{section.endDate}</p>
              <button
                type="button"
                className="del-section-btn"
                onClick={this.props.removeSection}
                id={section.sectionNumber}
              >
                Del
              </button>
            </div>
          );
        })}
        <div className="edu-details">
          <h3>{this.props.program}</h3>
          <p>{this.props.school}</p>
          {/* <p>From: {this.props.startDate}</p> */}
          {this.props.startDate !== "" && <p>From: {this.props.startDate}</p>}
          {/* <p>To: {this.props.endDate}</p> */}
          {this.props.endDate !== "" && <p>To: {this.props.endDate}</p>}
        </div>
      </div>
    );
  }
}

export default RenderAcademics;
