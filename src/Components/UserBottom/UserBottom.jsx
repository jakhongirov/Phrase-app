import React from "react";
import "./UserBottom.scss";
import { UserBtnRed, UserBtnBlue } from "./../UserBtns/UserBtns";

import MenuItem from "../MenuItem/MenuItem";
import PhrasesIcon from "../Lib/PhrasesIcon";
import BookmarksIcon from "../Lib/BookmarksIcon";

function UserBottom({user}) {
  return (
    <div className="user-page_bottom">
      <div className="container">
        <div className="user-page_bottom-sec">
          <div className="user-page_bottom-sec__phrases">
            <MenuItem icon={<PhrasesIcon />} text="Phrases" path="/phrases" />
            <span className="phrase__number">114</span>
          </div>
          <div className="user-page_bottom-sec__bookmarks">
            <MenuItem
              icon={<BookmarksIcon />}
              text="Bookmarks"
              path="/bookmarks"
            />
            <span className="bookmarks__number">114</span>
          </div>
        </div>

        <div className="user-page_bottom-btns">
          <UserBtnRed user={user} />
          <UserBtnBlue />
        </div>
      </div>
    </div>
  );
}

export default UserBottom;
