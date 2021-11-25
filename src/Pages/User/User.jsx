import React from "react";
import UserHeader from "../../Components/UserHeader/UserHeader";
import UserBottom from "../../Components/UserBottom/UserBottom";

function UserPage() {
  return (
    <div className="userPage">
      <div className="container">
        <UserHeader />
        <UserBottom />
      </div>
    </div>
  );
}

export default UserPage;
