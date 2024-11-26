import React, { useState } from "react";
import ButtonSubmit from "../../../Component/Button";
import BoxInput from "../../../Component/InputBox";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    contact: "", 
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, contact, password } = formData;

    if (!username || !contact || !password) {
      setError("All fields are required!");
      return;
    }
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const isPhoneNumber = /^[0-9]{10,15}$/.test(contact);
    if (!isEmail && !isPhoneNumber) {
      setError("Please enter a valid Email or Phone Number!");
      return;
    }

    console.log("Registered successfully:", formData);
    setError("");
    alert("Registration Successful");
  };

  return (
    <div className="max-w-md">
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <BoxInput
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <BoxInput
          type="text"
          name="contact"
          placeholder="Email or Phone Number"
          value={formData.contact}
          onChange={handleChange}
        />
        <BoxInput
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">
          <ButtonSubmit>Register</ButtonSubmit>
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
