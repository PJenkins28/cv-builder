import React, { useState, useEffect } from "react";
import Education from "./components/Education";
import General from "./components/General";
import Work from "./components/Work";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    address: "",
  });
  const [workInfo, setWorkInfo] = useState({
    position: "",
    company: "",
    city: "",
    from: "",
    to: "",
  });

  const [educationInfo, setEducation] = useState({
    university: "",
    degree: "",
    graduationYr: "",
  });

  function handleChange(event, setState) {
    event.stopPropagation();
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function generalInfoChange(event) {
    handleChange(event, setGeneralInfo);
  }
  function workInfoChange(event) {
    handleChange(event, setWorkInfo);
  }
  function educationInfoChange(event) {
    handleChange(event, setEducation);
  }

  const [workExperiences, setWorkExperiences] = useState([]);

  function addWorkExperience() {
    setWorkExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        position: workInfo.position,
        company: workInfo.company,
        city: workInfo.city,
        from: workInfo.from,
        to: workInfo.to,
      },
    ]);
  }
  const [educationExp, setEducationExp] = useState([]);
  function addEducationExp() {
    setEducationExp((prevEducationExp) => [
      ...prevEducationExp,
      {
        university: educationInfo.university,
        degree: educationInfo.degree,
        graduationYr: educationInfo.graduationYr,
      },
    ]);
  }
  const workElements = workExperiences.map((experience, index) => (
    <section className="exp" key={index}>
      <h3>{experience.position}</h3>
      <span>{experience.company}</span>
      <span>{experience.city}</span>
      <span>{`${experience.from}-${experience.to}`}</span>
    </section>
  ));

  const educationElements = educationExp.map((experience, index) => (
    <section className="education" key={index}>
      <h3>{experience.univeristy}</h3>
      <span>{experience.degree}</span>
      <span>{experience.graduationYr}</span>
    </section>
  ));

  return (
    <div className="App">
      <header className="app-header">CV Builder</header>
      <main>
        <section className="form">
          <General
            firstName={generalInfo.firstName}
            lastName={generalInfo.lastName}
            title={generalInfo.title}
            email={generalInfo.email}
            phone={generalInfo.phone}
            address={generalInfo.address}
            handleChange={generalInfoChange}
          />
          <Work
            addExperience={addWorkExperience}
            position={workInfo.position}
            company={workInfo.company}
            city={workInfo.city}
            from={workInfo.from}
            to={workInfo.to}
            handleChange={workInfoChange}
          />
          <Education
            university={educationInfo.university}
            degree={educationInfo.degree}
            graduationYr={educationInfo.graduationYr}
            addEducation={addEducationExp}
            handleChange={educationInfoChange}
          />
        </section>
        <section className="cv">
          <section className="cv-header">
            <div>
              <h1>{`${generalInfo.firstName} ${generalInfo.lastName}`}</h1>
              <h2>{generalInfo.title}</h2>
            </div>
            <div className="cv-contact-info-wrapper">
              <span>{generalInfo.phone}</span>
              <span>{generalInfo.email}</span>
              <span>{generalInfo.address}</span>
            </div>
          </section>
          <section className="main-cv-content">
            <h2>Work Experience</h2>
            <section className="cv-work-exp">{workElements}</section>
            <h2>Education Experience</h2>
            <section className="cv-education">{educationElements}</section>
          </section>
        </section>
      </main>
    </div>
  );
}
