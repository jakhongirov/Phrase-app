import React from "react";
import "./User.scss";
import UserHeader from "../../Components/UserHeader/UserHeader";
import UserBottom from "../../Components/UserBottom/UserBottom";

function UserPage() {
  return (
    <div className="user-page">
      <UserHeader />
      <UserBottom />
    </div>
  );
}

export default UserPage;
