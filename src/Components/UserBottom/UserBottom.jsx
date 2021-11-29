import React from "react";
import "./UserBottom.scss";
import { UserBtnRed, UserBtnBlue } from "./../UserBtns/UserBtns";

function UserBottom() {
  return (
    <div className="user-page_bottom">
      <div className="container">
        <div className="user-page_bottom-sec">
          <div className="user-page_bottom-sec__phrases">
            <div className="comp-phrase">Phrases</div>
            <span className="phrase__number">114</span>
          </div>
          <div className="user-page_bottom-sec__bookmarks">
            <div className="comp-bookmarks">Bookmarks</div>
            <span className="bookmarks__number">114</span>
          </div>
        </div>

        <div className="user-page_bottom-btns">
          <UserBtnRed />
          <UserBtnBlue />
        </div>
      </div>
    </div>
  );
}

export default UserBottom;
