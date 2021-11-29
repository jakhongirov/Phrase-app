import React from 'react';
import AddUser from './Pages/AddUser/AddUser';
import UsersPage from './Pages/UsersPage/UsersPage';
import Statistics from './Pages/Statistics/Statistics';

function AuthenticatedApp() {
  return (
    <>
      <UsersPage />
      <AddUser />
      <Statistics />
    </>
  );
}

export default AuthenticatedApp;