import React from 'react';
import './UsersPage.scss';
import arrowLeftBtn from '../../Assets/Image/arrow-left-back.svg';
import profilUser from '../../Assets/Image/Profile.svg';

function UserPage() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(process.env.REACT_APP_API_LOCOLHOST + '/users')
      .then(res => res.json())
      .then(data => setData(...data));
  }, [])
  
  return (
    <>
      <div className="user-page">
        <div className="container">
          <div className='user-page__inner'>
            <div className='users-page__content'>
              <button className='user-page__inner-button'>
                <img className='user-page__inner-img' src={arrowLeftBtn} alt="Users arrow left button" width='24' height='24' />
              </button>
              <h2 className='user-page__inner-heading'>Users</h2>
              <span className='user-page__inner-span'> 224 </span>
            </div>

            <div className='users-page__hero'>
              <input className='users-page__hero-input' type="text" placeholder='Search' />
            </div>

            <div className='user-page__main'>

              <ul className='user-page__main-list'>
                {data.length > 0 && data.map(row => (
                  <li className='user-page__main-item'>
                    <button className='user-page__main-button'>
                      <img className='user-page__main-img' src={profilUser} alt='Profil user name img' width='17' height='23' />
                    </button>

                    <div className='user-page__main-inner'>
                      <h3 className='user-page__main-heading'> John Doe </h3>
                      <span className='user-page__main-span'> 15*****25 </span>
                    </div>
                  </li>
                ))}
              </ul>

              <button className='add-user'>Add User</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;