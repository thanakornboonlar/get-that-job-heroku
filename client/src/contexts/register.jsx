import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisContext = React.createContext();

function RegisProvider(props) {
  const [isProfessionalExist, setProfessionalExist] = useState("");
  const [isRecruiterExist, setRecruiterExist] = useState("");
  const navigate = useNavigate();

  const isProfessionalEmailExist = async (email) => {
    const result = await axios.get(`/login_professional/users/exists/${email}`);
    const data = result.data.isEmailExist;

    setProfessionalExist(data);
  };

  const isRecruiterEmailExist = async (email) => {
    const result = await axios.get(`/login_recruiter/users/exists/${email}`);

    setRecruiterExist(result.data.isEmailExist);
  };

  const registerProfessional = async (formData) => {
    await axios.post("/login_professional/register", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const registerRecruiter = async (formData) => {
    console.log("woe");
    await axios.post("/login_recruiter/register", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <RegisContext.Provider
      value={{
        isProfessionalExist,
        isProfessionalEmailExist,
        isRecruiterEmailExist,
        isRecruiterExist,
        registerProfessional,
        registerRecruiter,
      }}
    >
      {props.children}
    </RegisContext.Provider>
  );
}

const useRegis = () => React.useContext(RegisContext);

export { RegisProvider, useRegis };
