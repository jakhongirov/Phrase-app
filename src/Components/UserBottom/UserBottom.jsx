import React from "react";
import "./UserBottom.scss";

function UserBottom() {
  return (
    <div className="userPage__bottom">
      <div className="userPage__phrases">
        <div className="comp-phrase">Phrases</div>
        <span className="phrase__number">114</span>
      </div>
      <div className="userPage__bookmarks">
        <div className="comp-bookmarks">Bookmarks</div>
        <span className="bookmarks__number">114</span>
      </div>
    </div>
  );
}

export default UserBottom;
