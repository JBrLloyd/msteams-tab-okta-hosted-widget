/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import * as microsoftTeams from "@microsoft/teams-js";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const { authState, authService } = useOktaAuth();

  const loginPopUp = () => {
    microsoftTeams.authentication.authenticate({
      url: window.location.origin + "/login",
      width: 600,
      height: 535,
      successCallback: function () {
        // Update AuthState if receiving a successful callback 
        authService.updateAuthState();
      },
      failureCallback: function (reason) {
        // handleAuthError(reason);
      },
    });
  }

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Header as="h1">PKCE Flow w/ Okta Hosted Login Page</Header>

        {authState.isAuthenticated && (
          <p>{JSON.stringify(authState, null, 2)}</p>
        )}

        {!authState.isAuthenticated && (
          <Button id="test-btn" primary onClick={loginPopUp}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
};
export default Home;
