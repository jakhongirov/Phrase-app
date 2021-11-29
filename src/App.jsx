import React from "react";
import "./App.scss";
import UnauthenticatedApp from './UnauthenticatedApp';
import AuthenticatedApp from './AuthenticatedApp';

function App() {
  return (
    <>
      <AuthenticatedApp />
      <UnauthenticatedApp />
    </>
  );
}

export default App;
