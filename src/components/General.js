import React from "react";

export default function General(props) {
  return (
    <section className="general-info">
      <h2>Personal Information</h2>
      <section className="inputs">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.firstName}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={props.lastName}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Professional Title"
          value={props.title}
          onChange={props.handleChange}
        />
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <section className="inputs">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={props.address}
            onChange={props.handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={props.phone}
            onChange={props.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={props.email}
            onChange={props.handleChange}
          />
        </section>
      </section>
    </section>
  );
}
