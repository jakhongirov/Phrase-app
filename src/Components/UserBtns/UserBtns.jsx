import React from "react";

import "./UserBtns.scss";

function UserBtnRed() {
  return <div className="btn btn--red">Delete User</div>;
}
function UserBtnBlue() {
  return <div className="btn btn--blue">Manage User</div>;
}

export { UserBtnRed, UserBtnBlue };
