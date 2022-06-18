import React, { Component } from "react";
import RenderPersonal from "./RenderPersonal";
import RenderProfessional from "./RenderProfessional";
import RenderAcademics from "./RenderAcademics'";
import { getDate, getMaxFutureGrad } from "./getDate";

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
        sectionNumber: 0,
      },

      academicArray: [],

      academic: {
        school: "School",
        program: "Superfluid Dynamics",
        startDate: "",
        endDate: "",
        sectionNumber: 0,
      },
    };
    this.removeSectionWorkplace = this.removeSectionWorkplace.bind(this);
    this.removeSectionAcademic = this.removeSectionAcademic.bind(this);
    this.editSection = this.editSection.bind(this);
    // this.removeWorkSection = this.removeWorkSection.bind(this);
  }
  dateCheck = getDate();
  maxDate = getMaxFutureGrad();

  handleName = (e) => {
    this.setState({
      personal: {
        fullName: e.target.value,
        email: this.state.personal.email,
        phone: this.state.personal.phone,
      },
    });
  };

  handleEmail = (e) => {
    this.setState({
      personal: {
        fullName: this.state.personal.fullName,
        email: e.target.value,
        phone: this.state.personal.phone,
      },
    });
  };

  handlePhone = (e) => {
    this.setState({
      personal: {
        fullName: this.state.personal.fullName,
        email: this.state.personal.email,
        phone: e.target.value,
      },
    });
  };

  handleWorkplace = (e) => {
    this.setState({
      professional: {
        workplace: e.target.value,
        position: this.state.professional.position,
        stay: this.state.professional.stay,
        tasks: this.state.professional.tasks,
        sectionNumber: this.state.professional.sectionNumber,
      },
    });
  };

  handlePosition = (e) => {
    this.setState({
      professional: {
        workplace: this.state.professional.workplace,
        position: e.target.value,
        stay: this.state.professional.stay,
        tasks: this.state.professional.tasks,
        sectionNumber: this.state.professional.sectionNumber,
      },
    });
  };

  handleTasks = (e) => {
    this.setState({
      professional: {
        workplace: this.state.professional.workplace,
        position: this.state.professional.position,
        stay: this.state.professional.stay,
        tasks: e.target.value,
        sectionNumber: this.state.professional.sectionNumber,
      },
    });
  };

  handleStay = (e) => {
    this.setState({
      professional: {
        stay: e.target.value,
        workplace: this.state.professional.workplace,
        position: this.state.professional.position,
        tasks: this.state.professional.tasks,
        sectionNumber: this.state.professional.sectionNumber,
      },
    });
  };

  handleSchool = (e) => {
    this.setState({
      academic: {
        school: e.target.value,
        program: this.state.academic.program,
        startDate: this.state.academic.startDate,
        endDate: this.state.academic.startDate,
        sectionNumber: this.state.academic.sectionNumber,
      },
    });
  };

  handleStudyProgram = (e) => {
    this.setState({
      academic: {
        school: this.state.academic.school,
        program: e.target.value,
        startDate: this.state.academic.startDate,
        endDate: this.state.academic.endDate,
        sectionNumber: this.state.academic.sectionNumber,
      },
    });
  };

  handleStudyStartDate = (e) => {
    this.setState({
      academic: {
        school: this.state.academic.school,
        program: this.state.academic.program,
        startDate: e.target.value,
        endDate: this.state.academic.endDate,
        sectionNumber: this.state.academic.sectionNumber,
      },
    });
  };

  handleStudyEndDate = (e) => {
    this.setState({
      academic: {
        school: this.state.academic.school,
        program: this.state.academic.program,
        startDate: this.state.academic.startDate,
        endDate: e.target.value,
        sectionNumber: this.state.academic.sectionNumber,
      },
    });
  };

  recordWorkSection = (e) => {
    this.setState({
      professionalArray: this.state.professionalArray.concat(
        this.state.professional
      ), // <---- we need to push the whole section

      professional: {
        workplace: "",
        position: "",
        stay: "",
        tasks: "",
        sectionNumber: this.state.professional.sectionNumber + 1,
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

  // removeWorkSection = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     professionalArray: this.state.professionalArray.filter(function (
  //       section
  //     ) {
  //       return section.sectionNumber === this.state.professional.sectionNumber;
  //     }),
  //   });
  // };

  removeSectionWorkplace(e) {
    this.setState({
      professionalArray: this.state.professionalArray.filter(function (
        section
      ) {
        return Number(section.sectionNumber) !== Number(e.target.id);
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
    let buttonID = e.target.id;
    buttonID = buttonID.substring(5);
    console.log("button id is " + buttonID);

    this.setState({
      professional: {
        workplace: this.professionalArray[buttonID].workplace,
        position: this.professionalArray[buttonID].position,
        tasks: this.professionalArray[buttonID].tasks,
        stay: this.professionalArray[buttonID].stay,
      },
    });
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
              onChange={this.handleName}
              id="prs-fullName"
            ></input>
            <label htmlFor="prs-email">Email</label>
            <input
              type={"email"}
              value={this.state.personal.email}
              onChange={this.handleEmail}
              id="prs-email"
            ></input>
            <label htmlFor="prs-phone">Phone</label>
            <input
              type={"tel"}
              value={this.state.personal.phone}
              onChange={this.handlePhone}
              id="prs-phone"
            ></input>
          </section>
          {/* Here begins the professional section */}
          <section className="exp-section">
            <h3>Professional Experience</h3>
            <label htmlFor="exp-workplace">previous workplace</label>
            <input
              type={"text"}
              value={this.state.professional.workplace}
              onChange={this.handleWorkplace}
              id="exp-workplace"
            ></input>
            <label htmlFor="exp-position">previous position title</label>
            <input
              type={"text"}
              value={this.state.professional.position}
              id="exp-position"
              onChange={this.handlePosition}
            ></input>
            <label htmlFor="exp-tasks">main tasks</label>
            <textarea
              rows="10"
              cols="50"
              value={this.state.professional.tasks}
              id="exp-tasks"
              onChange={this.handleTasks}
            ></textarea>
            <label htmlFor="exp-dates">how long did you work there?</label>
            <input
              type={"text"}
              value={this.state.professional.stay}
              id="exp-dates"
              onChange={this.handleStay}
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
              onChange={this.handleStudyProgram}
            ></input>
            <label htmlFor="edu-school">School</label>
            <input
              type={"text"}
              id="edu-school"
              value={this.state.academic.school}
              onChange={this.handleSchool}
            ></input>

            <div className="education-section-dates">
              <label htmlFor="edu-date-from">From</label>
              <input
                type={"month"}
                min={"1920-01"}
                max={this.dateCheck}
                id="edu-date-from"
                value={this.state.academic.startDate}
                onChange={this.handleStudyStartDate}
              ></input>
              <label htmlFor="edu-date-to">To</label>
              <input
                type={"month"}
                max={this.maxFutureGrad}
                id="edu-date-to"
                value={this.state.academic.endDate}
                onChange={this.handleStudyEndDate}
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

      // Is this where we place our right panel?
      //   We could have a container div here for all the components inside the right panel
      //    And then, to each of those components we pass the props
      //   It may look like this:

      /*

    <div className='container'> 
        <div className='details-section> 
            <h3>Personal details</h3>
            <RenderPersonal 
            personsName= {fullName}
                emailAddress={email}
                phoneNumber={phone} 
        </div>
    </div>

    ^^^^^ As you can seee, it wasn't a waste of time making all those stylings, we can just reuse them here!
    Just by putting these components inside of divs with the classes we made for those divs, the stylings will be the same.

    */
    );
  }
}

export default Form;
