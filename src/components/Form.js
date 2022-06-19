import React, { Component } from "react";
import RenderPersonal from "./RenderPersonal";
import RenderProfessional from "./RenderProfessional";
import RenderAcademics from "./RenderAcademics'";
import { getDate, getMaxFutureGrad } from "./getDate";
import uniqid from "uniqid";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      personal: {
        fullName: "Name",
        email: "example@email.com",
        phone: "222111000",
      },

      professionalArray: [],

      professional: {
        workplace: "Workplace",
        position: "Position",
        stay: "X yr and/or months",
        tasks: "-",
        sectionNumber: uniqid(),
      },

      academicArray: [],

      academic: {
        school: "School",
        program: "Superfluid Dynamics",
        startDate: "",
        endDate: "",
        sectionNumber: uniqid(),
      },
    };
    this.removeSectionWorkplace = this.removeSectionWorkplace.bind(this);
    this.removeSectionAcademic = this.removeSectionAcademic.bind(this);
    this.editSection = this.editSection.bind(this);
    // this.removeWorkSection = this.removeWorkSection.bind(this);
  }
  dateCheck = getDate();
  maxDate = getMaxFutureGrad();

  handlePersonal = (e) => {
    const { name, value } = e.target;
    this.setState({
      personal: {
        ...this.state.personal,
        [name]: value,
      },
    });
  };

  handleProfessional = (e) => {
    const { name, value } = e.target;
    this.setState({
      professional: {
        ...this.state.professional,
        [name]: value,
      },
    });
  };

  handleAcademic = (e) => {
    const { name, value } = e.target;
    this.setState({
      academic: {
        ...this.state.academic,
        [name]: value,
      },
    });
  };

  recordSection = (e) => {
    const { name } = e.target;
    let sectionName = name + "Array";
    let sectionArr = this.state[sectionName];
    this.setState({
      [sectionArr]: this.state[sectionArr].concat(this.state[sectionArr]),
    });
    this.resetSection();
  };

  resetSection = (sectionName) => {
    //sectionName is an object, either 'professional' or 'academic'.
    const emptyProfessional = {
      workplace: "",
      position: "",
      stay: "",
      tasks: "",
      sectionNumber: uniqid(),
    };

    const emptyAcademic = {
      school: "",
      program: "",
      startDate: "",
      endDate: "",
      sectionNumber: uniqid(),
    };

    this.setState({
      [sectionName]:
        sectionName === "professional" ? emptyProfessional : emptyAcademic,
    });
  };
  //Here's an idea: Sort sections by date! The most recent job held will render first, then the second oldest job, etc.
  //NOTE: You should sort() BEFORE mapping over anything (although we're mapping inside of each Component, not here.)

  recordWorkSection = (e) => {
    //We're experimenting with SORTING by sectionNumber, to see if we can place new copies of edited (and promptly deleting the old version) sections.
    const newSection = [].concat(this.state.professional);
    // .sort((a, b) => (a.sectionNumber > b.sectionNumber ? 1 : -1));

    this.setState({
      professionalArray: this.state.professionalArray.concat(newSection), // <---- we need to push the whole section

      professional: {
        workplace: "",
        position: "",
        stay: "",
        tasks: "",
        sectionNumber: uniqid(),
      },
    });
  };

  recordAcademicSection = (e) => {
    this.setState({
      academicArray: this.state.academicArray.concat(this.state.academic),
      academic: {
        school: "",
        program: "",
        startDate: "",
        endDate: "",
        sectionNumber: this.state.academic.sectionNumber + 1,
      },
    });
  };

  removeSectionWorkplace(e) {
    this.setState({
      professionalArray: this.state.professionalArray.filter(function (
        section
      ) {
        return section.sectionNumber !== e.target.id;
      }),
    });
  }

  removeSectionAcademic(e) {
    this.setState({
      academicArray: this.state.academicArray.filter(function (section) {
        return Number(section.sectionNumber) !== Number(e.target.id);
      }),
    });
  }

  editSection(e) {
    // Steps: 1) Set the data as the state of the editable form. 2) Delete the original obj inside of professionalArray (obj that was copied).

    let { name, id } = e.target;
    let buttonID = id;
    buttonID = buttonID.substring(5);
    let sectionType = name.substring(5); //'professional' || 'academic'
    console.log("section type is " + sectionType);
    console.log("button id is " + buttonID);

    let foundSection = this.state.professionalArray.find(
      (sec) => (sec.sectionNumber = buttonID)
    );

    if (sectionType === "professional") {
      this.setState({
        professional: {
          ...foundSection,
          sectionNumber: uniqid(),
        },
      });
    } else if (sectionType === "academic") {
      this.setState({
        academic: {
          school: this.state.academicArray[buttonID].school,
          program: this.state.academicArray[buttonID].program,
          startDate: this.state.academicArray[buttonID].startDate,
          endDate: this.state.academicArray[buttonID].endDate,
          sectionNumber: this.state.academicArray[buttonID].sectionNumber,
        },
      });
    }
  }

  render() {
    const { professionalArray } = this.state;

    return (
      <div className="app-container">
        <form className="editing-container">
          {/* Here begins the details section */}
          <section className="details-section">
            <label htmlFor="prs-fullName">Name</label>
            <input
              type={"text"}
              value={this.state.personal.fullName}
              onChange={this.handlePersonal}
              id="prs-fullName"
              name="fullName"
            ></input>
            <label htmlFor="prs-email">Email</label>
            <input
              type={"email"}
              value={this.state.personal.email}
              onChange={this.handlePersonal}
              id="prs-email"
              name="email"
            ></input>
            <label htmlFor="prs-phone">Phone</label>
            <input
              type={"tel"}
              value={this.state.personal.phone}
              onChange={this.handlePersonal}
              id="prs-phone"
              name="phone"
            ></input>
          </section>
          {/* Here begins the professional section */}
          <section className="exp-section">
            <h3>Professional Experience</h3>
            <label htmlFor="exp-workplace">previous workplace</label>
            <input
              type={"text"}
              value={this.state.professional.workplace}
              onChange={this.handleProfessional}
              id="exp-workplace"
              name="workplace"
            ></input>
            <label htmlFor="exp-position">previous position title</label>
            <input
              type={"text"}
              value={this.state.professional.position}
              id="exp-position"
              onChange={this.handleProfessional}
              name="position"
            ></input>
            <label htmlFor="exp-tasks">main tasks</label>
            <textarea
              rows="10"
              cols="50"
              value={this.state.professional.tasks}
              id="exp-tasks"
              onChange={this.handleProfessional}
              name="tasks"
            ></textarea>
            <label htmlFor="exp-dates">how long did you work there?</label>
            <input
              type={"text"}
              value={this.state.professional.stay}
              id="exp-dates"
              onChange={this.handleProfessional}
              name="stay"
            ></input>
            <button
              type="button"
              className="addSection-btn"
              onClick={this.recordWorkSection}
            >
              + add new
            </button>
          </section>
          <section className="education-section">
            <h3>Formal education</h3>
            <label htmlFor="edu-title">Title of study</label>
            <input
              type={"text"}
              id="edu-title"
              value={this.state.academic.program}
              onChange={this.handleAcademic}
              name="program"
            ></input>
            <label htmlFor="edu-school">School</label>
            <input
              type={"text"}
              id="edu-school"
              value={this.state.academic.school}
              onChange={this.handleAcademic}
              name="school"
            ></input>

            <div className="education-section-dates">
              <label htmlFor="edu-date-from">From</label>
              <input
                type={"month"}
                min={"1920-01"}
                max={this.dateCheck}
                id="edu-date-from"
                value={this.state.academic.startDate}
                onChange={this.handleAcademic}
                name="startDate"
              ></input>
              <label htmlFor="edu-date-to">To</label>
              <input
                type={"month"}
                max={this.maxFutureGrad}
                id="edu-date-to"
                value={this.state.academic.endDate}
                onChange={this.handleAcademic}
                name="endDate"
              ></input>
            </div>
            <button
              type="button"
              className="addSection-btn"
              onClick={this.recordAcademicSection}
            >
              + add new
            </button>
          </section>
        </form>
        <div className="cv-render">
          <RenderPersonal
            fullName={this.state.personal.fullName}
            email={this.state.personal.email}
            phone={this.state.personal.phone}
          />
          <RenderProfessional
            workplace={this.state.professional.workplace}
            position={this.state.professional.position}
            stay={this.state.professional.stay}
            tasks={this.state.professional.tasks}
            sections={professionalArray}
            removeSection={this.removeSectionWorkplace}
            editSection={this.editSection}
          />
          <RenderAcademics
            program={this.state.academic.program}
            school={this.state.academic.school}
            startDate={this.state.academic.startDate}
            endDate={this.state.academic.endDate}
            sections={this.state.academicArray}
            removeSection={this.removeSectionAcademic}
            editSection={this.editSection}
          />
        </div>
      </div>

      /*
    ^^^^^ As you can seee, it wasn't a waste of time making all those stylings, we can just reuse them here!
    Just by putting these components inside of divs with the classes we made for those divs, the stylings will be the same.

    */
    );
  }
}

export default Form;
