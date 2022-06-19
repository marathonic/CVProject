import React, { Component } from "react";

// const RenderProfessional = () => {
//   return (
//     <div className="rendered-professional">
//       <div className="big-xp">
//         <h3>Previous</h3>
//         <h3> XP</h3>
//       </div>
//       <div className="prev-exp">
//         {/* Here begin the exp strips */}
//         <div className="exp-strip">
//           <div className="exp-brick">
//             <p>Amazon</p>
//             <p>CEO</p>
//             <p>1996-2021</p>
//           </div>
//           <div className="exp-tasks">
//             <p>
//               Built Amazon from the ground up. <br />
//               Forged Amazon Web Servers.
//             </p>
//           </div>
//         </div>
//         <div className="exp-strip">
//           <div className="exp-brick">
//             <p>Apple</p>
//             <p>Lead software developer</p>
//             <p>1975-2001</p>
//           </div>
//           <div className="exp-tasks">
//             <p>
//               In charge of developing version 1 of iOS in preparation for the
//               launch of the iPhone
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

class RenderProfessional extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sections } = this.props;

    // const { professional } = this.props;
    // const { workplace, position, lengthOfStay, tasks } =
    //   this.props.professional;

    const assignID = () => {
      // we can set a uniqid(unique key) as an object property, then pass the key to each of these buttons as the id.
    };

    return (
      <div className="rendered-professional">
        <div className="big-xp">
          <h3>Previous</h3>
          <h3> XP</h3>
        </div>
        <div className="prev-exp">
          {/* Here begin the exp strips */}

          {sections.map((section) => {
            return (
              <div className="exp-strip">
                <button
                  className="del-section-btn"
                  onClick={this.props.removeSection}
                  id={section.sectionNumber}
                >
                  Delete
                </button>
                {/* ADDED TODAY: button below */}
                <button
                  className="edit-section-btn"
                  onClick={this.props.editSection}
                  id={"edit-" + section.sectionNumber}
                  name="edit-professional"
                >
                  Edit
                </button>
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
        </div>
      </div>
    );
  }
}

export default RenderProfessional;
