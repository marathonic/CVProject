import React, { useState } from "react";
import RenderPersonal from "./RenderPersonal";
import RenderProfessional from "./RenderProfessional";
import RenderAcademics from "./RenderAcademics'";
import { getDate, getMaxFutureGrad } from "./getDate";
import uniqid from "uniqid";
import "../style.css";

function Form() {
  const dateCheck = getDate();
  const maxDate = getMaxFutureGrad();

  const [professionalArray, setProfessionalArray] = useState([]);
  const [academicArray, setAcademicArray] = useState([]);

  const [personal, setPersonal] = useState({
    fullName: "Name",
    email: "example@host.domain",
    phone: "0123456789",
  });
  const [professional, setProfessional] = useState({
    workplace: "Workplace",
    position: "Position",
    stay: "Time",
    tasks: "-",
    sectionNumber: uniqid(),
  });
  const [academic, setAcademic] = useState({
    school: "School",
    program: "Programme",
    startDate: "",
    endDate: "",
    sectionNumber: uniqid(),
  });

  const handlePersonal = (e) => {
    const { name, value } = e.target;
    setPersonal({
      ...personal,
      [name]: value,
    });
  };

  const handleProfessional = (e) => {
    const { name, value } = e.target;
    setProfessional({
      ...professional,
      [name]: value,
    });
  };

  const handleAcademic = (e) => {
    const { name, value } = e.target;
    setAcademic({
      ...academic,
      [name]: value,
    });
  };

  const recordWorkSection = (e) => {
    const newSection = [].concat(professional);

    setProfessionalArray(professionalArray.concat(newSection));

    setProfessional({
      workplace: "",
      position: "",
      stay: "",
      tasks: "",
      sectionNumber: uniqid(),
    });
  };
  //Observation: For both of these functions, we should be able to
  //just loop over all key pairs, set the values to "", and
  // then, give the sectionNumber key a value of uniqid(),
  // so that only 1 function is needed.

  const recordAcademicSection = (e) => {
    const newSection = [].concat(academic);

    setAcademicArray(academicArray.concat(newSection));

    setAcademic({
      school: "",
      program: "",
      startDate: "",
      endDate: "",
      sectionNumber: uniqid(),
    });
  };

  const removeSectionWorkplace = (e) => {
    setProfessionalArray(
      professionalArray.filter(
        (section) => section.sectionNumber !== e.target.id
      )
    );
  };

  const removeSectionAcademic = (e) => {
    setAcademicArray(
      academicArray.filter(function (section) {
        return section.sectionNumber !== e.target.id;
      })
    );
  };

  function editSection(e) {
    let { name, id } = e.target;
    let buttonID = id;
    buttonID = buttonID.substring(5);
    let sectionType = name.substring(5); //'professional' || 'academic'

    if (sectionType === "professional") {
      setProfessional({
        ...professionalArray.find((sec) => sec.sectionNumber === buttonID),
        sectionNumber: uniqid(),
      });

      setProfessionalArray(
        professionalArray.filter(
          (section) => section.sectionNumber !== buttonID
        )
      );
    } else if (sectionType === "academic") {
      setAcademic({
        ...academicArray.find((sec) => sec.sectionNumber === buttonID),
        sectionNumber: uniqid(),
      });

      setAcademicArray(
        academicArray.filter((section) => section.sectionNumber !== buttonID)
      );
    }
  }

  /*

  Observation: It should be possible to combine both functions into one. Try something like:
   recordSection = (e) => {
    const {name} = e.target; // <-- 'academic' || 'professional'
    const currentType = name;
    const sectionArr = `{currentype}Array`; // <-- sectionArr === 'academicArray' || sectionArr === 'professionalArray'
    set{sectionArr}({
      ...sectionArr, currentType
    })
  }
   
   
  */

  return (
    <div className="app-container">
      <form className="editing-container">
        <section className="details-section">
          <label htmlFor="prs-fullName">Name</label>
          <input
            type={"text"}
            value={personal.fullName}
            onChange={handlePersonal}
            id="prs-fullName"
            name="fullName"
          ></input>
          <label htmlFor="prs-email">Email</label>
          <input
            type={"email"}
            value={personal.email}
            onChange={handlePersonal}
            id="prs-email"
            name="email"
          ></input>
          <label htmlFor="prs-phone">Phone</label>
          <input
            type={"tel"}
            value={personal.phone}
            onChange={handlePersonal}
            id="prs-phone"
            name="phone"
          ></input>
        </section>
        <section className="exp-section">
          <h3>Professional Experience</h3>
          <label htmlFor="exp-workplace">previous workplace</label>
          <input
            type={"text"}
            value={professional.workplace}
            onChange={handleProfessional}
            id="exp-workplace"
            name="workplace"
          ></input>
          <label htmlFor="exp-position">previous position title</label>
          <input
            type={"text"}
            value={professional.position}
            id="exp-position"
            onChange={handleProfessional}
            name="position"
          ></input>
          <label htmlFor="exp-tasks">main tasks</label>
          <textarea
            rows="10"
            cols="50"
            value={professional.tasks}
            id="exp-tasks"
            onChange={handleProfessional}
            name="tasks"
          ></textarea>
          <label htmlFor="exp-dates">how long did you work there?</label>
          <input
            type={"text"}
            value={professional.stay}
            id="exp-dates"
            onChange={handleProfessional}
            name="stay"
          ></input>
          <button
            type="button"
            className="addSection-btn"
            onClick={recordWorkSection}
          >
            + add new
          </button>
        </section>
        <section className="education-section">
          <h3>Formal education</h3>
          <label htmlFor="edu-title">Name of programme</label>
          <input
            type={"text"}
            id="edu-title"
            value={academic.program}
            onChange={handleAcademic}
            name="program"
          ></input>
          <label htmlFor="edu-school">School</label>
          <input
            type={"text"}
            id="edu-school"
            value={academic.school}
            onChange={handleAcademic}
            name="school"
          ></input>

          <div className="education-section-dates">
            <label htmlFor="edu-date-from">From</label>
            <input
              type={"month"}
              min={"1920-01"}
              max={dateCheck}
              id="edu-date-from"
              value={academic.startDate}
              onChange={handleAcademic}
              name="startDate"
            ></input>
            <label htmlFor="edu-date-to">To</label>
            <input
              type={"month"}
              max={maxDate}
              id="edu-date-to"
              value={academic.endDate}
              onChange={handleAcademic}
              name="endDate"
            ></input>
          </div>
          <button
            type="button"
            className="addSection-btn"
            onClick={recordAcademicSection}
          >
            + add new
          </button>
        </section>
      </form>
      <div className="cv-render">
        <RenderPersonal
          fullName={personal.fullName}
          email={personal.email}
          phone={personal.phone}
        />
        <RenderProfessional
          workplace={professional.workplace}
          position={professional.position}
          stay={professional.stay}
          tasks={professional.tasks}
          sections={professionalArray}
          removeSection={removeSectionWorkplace}
          editSection={editSection}
        />
        <RenderAcademics
          program={academic.program}
          school={academic.school}
          startDate={academic.startDate}
          endDate={academic.endDate}
          sections={academicArray}
          removeSection={removeSectionAcademic}
          editSection={editSection}
        />
      </div>
    </div>
  );
}

export default Form;
