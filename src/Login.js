import { useOktaAuth } from "@okta/okta-react";
import React from "react";
import * as microsoftTeams from "@microsoft/teams-js";

const Login = () => {
  const { authState, authService } = useOktaAuth();

  const login = () => {
    authService.login();
    authService.updateAuthState();
  }

  const notifySuccessCallback = () => {
    microsoftTeams.authentication.notifySuccess();
  };

  return (
    <>
      {!authState.isAuthenticated && login()}
      {authState.isAuthenticated && notifySuccessCallback()}
    </>
  );
};

export default Login;
