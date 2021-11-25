import React from "react";
import "./App.scss";
import UnauthenticatedApp from "./UnauthenticatedApp";

// Pages
import UserPage from "./Pages/User/User";

function App() {
  return (
    <>
      <UserPage />

      <UnauthenticatedApp />
    </>
  );
}

export default App;
