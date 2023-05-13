import React from "react";

export default function Work(props) {
  return (
    <section className="work-exp">
      <h2>Work Experience</h2>
      <section className="inputs">
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={props.position}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={props.company}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={props.city}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="from"
          placeholder="Start Date"
          value={props.from}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="to"
          placeholder="End Date"
          value={props.to}
          onChange={props.handleChange}
        />
      </section>

      <button className="add-work-exp" onClick={props.addExperience}>
        Add Work Experience
      </button>
    </section>
  );
}
