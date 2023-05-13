import React from "react";

export default function Education(props) {
  return (
    <section className="education-exp">
      <h2>Education</h2>
      <section className="inputs">
        <input
          type="text"
          name="university"
          placeholder="University Attended"
          value={props.university}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={props.degree}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="graduationYr"
          placeholder="Graduation Year"
          value={props.graduationYr}
          onChange={props.handleChange}
        />
      </section>

      <button className="add-education-btn" onClick={props.addEducation}>
        Add
      </button>
    </section>
  );
}
