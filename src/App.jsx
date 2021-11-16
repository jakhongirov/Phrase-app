import React from "react";
import "./App.scss";
import Unauthenticated from "./UnauthenticatedApp";

// Pages
import UserPage from "./Pages/User/User";

function App() {
  return (
    <>
      <UserPage />
      <Unauthenticated />
    </>
  );
}

export default App;
