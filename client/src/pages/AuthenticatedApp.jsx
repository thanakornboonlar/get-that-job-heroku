import AuthenticatedProfessional from "./AuthenticatedProfessional";
import AuthenticatedRecruiter from "./AuthenticatedRecruiter";
import jwtDecode from "jwt-decode";
import jwtInterceptor from "../utils/jwtInterceptor";

function AuthenticationApp() {
  const token = localStorage.getItem("token");
  jwtInterceptor();
  const userDataFromToken = jwtDecode(token);

  return userDataFromToken.userType === "professional" ? (
    <AuthenticatedProfessional />
  ) : (
    <AuthenticatedRecruiter />
  );
}

export default AuthenticationApp;
