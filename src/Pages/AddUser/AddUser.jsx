import React from "react";
import './AddUser.scss';
import AddUserInputs from '../AddUserInputs/AddUserInputs'

function AddUser() {
  return (
    <>
      <div className='AddUser'>
        <div className="container">
          <div className='AddUser-inner'>
            <h1 className='AddUser-heading'> Add User </h1>

            <AddUserInputs />
            
            <footer className='footer'>
              <button className='footer-button' type='submit'> Add User </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;