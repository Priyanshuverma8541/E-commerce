import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google"; // ✅ Import this

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="24774429550-ek3vndp9c9j9k5lpn08impjqb8lpo3jd.apps.googleusercontent.com">
    <StrictMode>
      <App />
    </StrictMode>
  </GoogleOAuthProvider>
);


