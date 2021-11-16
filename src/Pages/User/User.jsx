import React from "react";

function UserPage() {
  return (
    <div className="userPage">
      <div className="container">
        <div className="userPage__top">
          <h4 className="userPage__title">User</h4>
          <img src="https://picsum.photos/id/1/200/300" alt="" />
          <h4 className="userPage__title">David Jones</h4>
          <p className="userPage__number">11******12</p>
        </div>

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
      </div>
    </div>
  );
}

export default UserPage;
