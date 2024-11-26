import React, { useState } from "react";
import RegisterForm from "./Component/Register";
import LoginForm from "./Component/Login";
import Background from "../../Component/Background";
import Box from "../../Component/Box";
import Title from "../../Component/Title";

const RegisterAndLogin = () => {
  const [showRegister, setShowRegister] = useState(true);

  return (
    <Background >
        <div class="  ">
          <Title className=" text-center mb-4">Welcome to NAMPLOV</Title>
        </div>
        <Box>
          {showRegister ? <RegisterForm /> : <LoginForm />}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setShowRegister((prevState) => !prevState)} 
              className="px-4 py-2 text-black "
            >
              {showRegister ? "Have an account already? Login" : "Don't have an account? Register"}
            </button>
          </div>
        </Box>
    </Background>
  );
};

export default RegisterAndLogin;
