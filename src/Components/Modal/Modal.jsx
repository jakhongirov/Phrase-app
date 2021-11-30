import React from "react";
import "./Modal.scss";

function Modal({ show, onClose }) {
  if (!show) {
    return null;
  }
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Are you sure delete this user?</h4>
        </div>

        <div className="modal-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem
        </div>

        <div className="modal-footer">
          <button className="modal-btn modal-btn--cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-btn modal-btn--delete">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
