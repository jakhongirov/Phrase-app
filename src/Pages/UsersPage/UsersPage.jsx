import React from 'react';
import './UsersPage.scss';
import arrowLeftBtn from '../../Assets/Image/arrow-left-back.svg';
import profilUser from '../../Assets/Image/Profile.svg';


function UserPage() {

  // const navigate = useNavigate()

  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJKb2huIERvZSIsInVzZXJuYW1lIjoiam9obiIsImlzX2FkbWluIjp0cnVlLCJpc19kZWxldGVkIjpmYWxzZSwiY3JlYXRlZF9hdCI6IjIwMjEtMTEtMDFUMTQ6NDU6MzAuNjYwWiIsImlhdCI6MTYzODAyNDI2OX0.X7yaQUfpaNAPNYoEB5bDvyTZW-hR7g8JKEK_KnKhOF4");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(process.env.REACT_APP_API_URL 	+ '/users/search?q=o&page=1&limit=10', requestOptions)
      .then(response => response.json())
      .then(result => setUser(result.data))
      .catch(error => console.log('error', error));
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
                {user.length > 0 && user.map(row => (
                  <li key={row.id} className='user-page__main-item'>
                    <button className='user-page__main-button'>
                      <img className='user-page__main-img' src={profilUser} alt='Profil user name img' width='17' height='23' />

                      <div className='user-page__main-inner'>
                        <h3 className='user-page__main-heading'> {row.fullname} </h3>
                        <span className='user-page__main-span'> 15*****25 </span>
                      </div>
                    </button>
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