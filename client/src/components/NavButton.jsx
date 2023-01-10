import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const SignUpButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      startIcon={<img alt="sign up" src="/pic/sign-up-personal.svg" />}
      variant="outlined"
      color="primary"
      fontFamily="button"
      onClick={() => navigate("/register")}
      sx={{
        color: "#616161",
        borderColor: "primary",
        width: "129px",
        height: "40px",
        margin: "10px",
        borderRadius: "16px",
      }}
    >
      Sign Up
    </Button>
  );
};

export const LogInButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      startIcon={<img alt="sign up" src="/pic/log-in-personal.svg" />}
      variant="outlined"
      color="primary"
      fontFamily="button"
      onClick={() => navigate("/login")}
      sx={{
        color: "#616161",
        borderColor: "primary",
        width: "129px",
        height: "40px",
        margin: "10px",
        borderRadius: "16px",
      }}
    >
      Login
    </Button>
  );
};
