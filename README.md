# Okta React + Okta Hosted Login in Microsoft Teams Tab

This code is a modified version of the Okta Hosted Login Sample, found [here](https://github.com/okta/samples-js-react/tree/master/okta-hosted-login)


## Environment Variables

You'll need to set the following variables with your own Okta tenant and Client App ID:

- **Client Id** - The client ID of the SPA application that you created earlier. This can be found on the "General" tab of an application, or the list of applications.  This identifies the application that tokens will be minted for.
- **Issuer** - This is the URL of the authorization server that will perform authentication.  All Developer Accounts have a "default" authorization server.  The issuer is a combination of your Org URL (found in the upper right of the console home page) and `/oauth2/default`. For example, `https://dev-1234.oktapreview.com/oauth2/default`.

```ini
ISSUER=https://yourOktaDomain.com/oauth2/default
CLIENT_ID=123xxxxx123
```

To run this application, you first need to clone this repo and then enter into this directory:

```bash
git clone https://github.com/okta/samples-js-react.git
cd samples-js-react/okta-hosted-login
```

Then install dependencies and start your local instance:

```bash
npm install
npm start
```

Now navigate to http://localhost:8080 in your browser.

**Note** You'll need [ngrok](https://ngrok.com/) to tunnel your http://localhost:8080 to the internet. Once downloaded you can run the command:

```bash
ngrok 8080 http --host-header=localhost
```

You can login with the same account that you created when signing up for your Developer Org, or you can use a known username and password from your Okta Directory.

**Note:** If you are currently using your Developer Console, you already have a Single Sign-On (SSO) session for your Org.  You will be automatically logged into your application as the same user that is using the Developer Console.  You may want to use an incognito tab to test the flow from a blank slate.

## Integrating The Resource Server

If you were able to successfully login in the previous section you can continue with the resource server example.  Please download and run one of these sample applications in another terminal:

* [Node/Express Resource Server Example](https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server)
* [Java/Spring MVC Resource Server Example](https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server)

Once you have the resource server running (it will run on port 8000) you can visit the `/messages` page within the React application to see the authentication flow.  The React application will use its stored access token to authenticate itself with the resource server, you will see this as the `Authorization: Bearer <access_token>` header on the request if you inspect the network traffic in the browser.

[Create React App]: https://github.com/facebook/create-react-app
[Okta React Library]: https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react
[OIDC SPA Setup Instructions]: https://developer.okta.com/docs/guides/sign-into-spa/react/before-you-begin
[PKCE Flow]: https://developer.okta.com/docs/guides/implement-auth-code-pkce
[Okta Sign In Widget]: https://github.com/okta/okta-signin-widget
