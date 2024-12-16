import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
      domain="dev-gy3pk5a13xxiw883.us.auth0.com"
      clientId="1tTw8pOCx7s4Zs4E3tuFULkKUvsPjAJn"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>,
  );

reportWebVitals();
