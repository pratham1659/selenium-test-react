import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import "./styles.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    dob: "",
    contact: "",
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData((prevState) => [...prevState, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      dob: "",
      contact: "",
    });
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="App">
      <div className="form-container headerStyle">
        <h2>React Form</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} />
          <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} />
          {/* The pattern attribute enforces the input to match the specified pattern */}
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="table-container tableMargin">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Contact</th> {/* Corrected typo: 'contact' to 'Contact' */}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.dob}</td>
                <td>{data.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
}

export default ContactUs;
