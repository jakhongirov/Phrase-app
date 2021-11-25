import React from "react";
import "./UserHeader.scss";
function UserHeader() {
  return (
    <div className="userPage__top">
      <h4 className="userPage__title">User</h4>
      <img
        className="userPage__img"
        src="https://picsum.photos/id/1/200/300"
        alt=""
      />
      <h4 className="userPage__title">David Jones</h4>
      <p className="userPage__number">11******12</p>
    </div>
  );
}

export default UserHeader;
