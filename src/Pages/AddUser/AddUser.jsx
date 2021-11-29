import React from "react";
import './AddUser.scss';

function AddUser() {
  return (
    <>
      <div className='AddUser'>
        <div className="container">
          <div className='AddUser-inner'>
            <h1 className='AddUser-heading'> Add User </h1>
            <form className='AddUser-form' action="https://echo.htmlacademy.ru" method="POST">
            
              <input className='AddUser-form__username' type="text" name='username' placeholder='Username' />

              <input className='AddUser-form__password' type="password" name='password' placeholder='Password' />
            </form>

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