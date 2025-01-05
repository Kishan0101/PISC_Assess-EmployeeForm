import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email already exists
    try {
      const emailCheckResponse = await fetch("http://localhost:5000/api/employees/check-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      const emailCheckResult = await emailCheckResponse.json();

      if (emailCheckResult.exists) {
        setError("This email is already registered. Please use a different email.");
        return;
      }

      // If email doesn't exist, proceed with submission
      const response = await fetch("http://localhost:5000/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Employee data saved successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", address: "" });
      } else {
        alert("Failed to save employee data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving data.");
    }
  };

  return (
    <div className="form-container">
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
