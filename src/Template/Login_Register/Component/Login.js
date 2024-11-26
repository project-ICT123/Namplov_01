import React, { useState } from "react";
import ButtonSubmit from "../../../Component/Button"
import BoxInput from "../../../Component/InputBox";


const LoginForm = () => {
  const [formData, setFormData] = useState({
    identifier: "", 
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { identifier, password } = formData;

    if (!identifier || !password) {
      setError("All fields are required!");
      return;
    }

    console.log("Logged in successfully:", formData);
    setError("");
    alert("Login Successful");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary text-center mb-4">
        Login
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <BoxInput
          type="text"
          name="identifier"
          placeholder="Email or Phone Number"
          value={formData.identifier}
          onChange={handleChange}
        />
        <BoxInput
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="flex justify-between items-center mb-4">
          <button
            href="#"
            className="text-primary hover:underline text-sm font-medium"
          >
            Forgot Password ?
          </button>
        </div>
        <button
          type="submit"
        >
          <ButtonSubmit>
            Login
          </ButtonSubmit>
          
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
