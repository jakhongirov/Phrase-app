import React from "react";
import "./UserHeader.scss";
import imgUser from "../../Assets/Image/user-img.png";
function UserHeader() {
  return (
    <div className="user-page_top">
      <div className="container">
        <h4 className="user-page_top__title">User</h4>
        <div className="user-page_top__img-box">
          <div className="user-page_top__img-box__in">
            <img
              className="user-page_top__img"
              src={imgUser}
              alt=""
              width="70"
              height="70"
            />
          </div>
        </div>
        <h4 className="user-page_top__name">David Jones</h4>
        <p className="user-page_top__number">11******12</p>
      </div>{" "}
    </div>
  );
}

export default UserHeader;
