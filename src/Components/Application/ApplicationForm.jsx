import React, { useState } from "react";
import "./ApplicationForm.css";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    age: "",
    experience: "",
    previousCompany: "",
    workUnderPressure: 0,
    overtime: "",
    nightShift: "",
    permanentContract: "",
    idCardFront: null,
    idCardBack: null,
    personalPhoto: null,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Application Submitted Successfully!");
  };

  return (
    <div className="application-form">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name: <span className="required">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label>
          Email Address: <span className="required">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>
          Phone Number: <span className="required">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>
          Current Address: <span className="required">*</span>
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>
          Gender: <span className="required">*</span>
        </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label>
          Age: <span className="required">*</span>
        </label>
        <select
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        >
          <option value="">Select Age Range</option>
          <option value="16-25">16 - 25</option>
          <option value="26-35">26 - 35</option>
          <option value="36-50">36 - 50</option>
          <option value="51-60">51 - 60</option>
        </select>

        <label>
          Have you worked in this field before?{" "}
          <span className="required">*</span>
        </label>
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {formData.experience === "Yes" && (
          <>
            <label>
              Where did you work before? <span className="required">*</span>
            </label>
            <input
              type="text"
              name="previousCompany"
              value={formData.previousCompany}
              onChange={handleChange}
              required
            />
          </>
        )}

        <label>
          Rate your ability to work under pressure:{" "}
          <span className="required">*</span>
        </label>
        <div className="stars-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${
                formData.workUnderPressure >= star ? "selected" : ""
              }`}
              onClick={() =>
                setFormData({ ...formData, workUnderPressure: star })
              }
            >
              ★
            </span>
          ))}
        </div>

        <label>
          Can you work overtime if needed? <span className="required">*</span>
        </label>
        <select
          name="overtime"
          value={formData.overtime}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>
          Can you work night shifts? <span className="required">*</span>
        </label>
        <select
          name="nightShift"
          value={formData.nightShift}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>
          Would you be interested in a permanent contract?{" "}
          <span className="required">*</span>
        </label>
        <select
          name="permanentContract"
          value={formData.permanentContract}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>
          Upload national ID (Front): <span className="required">*</span>
        </label>
        <input
          type="file"
          name="idCardFront"
          accept=".jpg,.png,.pdf"
          onChange={handleChange}
          required
        />

        <label>
          Upload national ID (Back): <span className="required">*</span>
        </label>
        <input
          type="file"
          name="idCardBack"
          accept=".jpg,.png,.pdf"
          onChange={handleChange}
          required
        />

        <label>
          Upload Personal Photo: <span className="required">*</span>
        </label>
        <input
          type="file"
          name="personalPhoto"
          accept=".jpg,.png"
          onChange={handleChange}
          required
        />

        {/* Terms and Conditions Checkbox */}
        <label className="checkbox-container">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          I accept the terms and conditions
        </label>

        <button
          type="submit"
          className={!formData.termsAccepted ? "disabled-button" : ""}
          disabled={!formData.termsAccepted}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};
export default ApplicationForm;
