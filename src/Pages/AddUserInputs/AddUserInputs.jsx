import React, { useState } from "react";
import Axios from 'axios';
import './AddUserInputs.scss';


function AddUserInputs() {
  const url = ''

  const [data, setData] = useState({
    name:'',
    password: ''
  })

  function submit(evt) {
    evt.preventDefault();
    Axios.post(url, {
      name:data.name,
      password: data.password
    })
    .then(res => {
      console.log(res.data);
    })
  }

  function handle(evt) {
    const newData = {...data}
    newData[evt.target.id] = evt.target.value
    setData(newData)
    console.log(newData);
  }
  return (
    <>
      <form onSubmit={(evt) => submit(evt)} className='AddUser-form'>

        <input onChange={(evt) => handle(evt)} id='name' value={data.name} className='AddUser-form__username' type="text" name='username' placeholder='Username' />

        <input onChange={(evt) => handle(evt)} id='password' value={data.password}  className='AddUser-form__password' type="password" name='password' placeholder='Password' />

        <button type='submit'>sent</button>
      </form>
    </>
  );
}

export default AddUserInputs;