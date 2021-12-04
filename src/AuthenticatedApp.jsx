import React from 'react';
import HomePage from './Pages/Home/Home';
import UserPage from './Pages/User/User';
import Bookmarks from './Pages/Bookmarks/Bookmarks';
import Profile from '../src/Pages/Profile/Profile.jsx';
import Statistics from './Pages/Statistics/Statistics';
import Users from './Pages/Users/Users';
import AddUser from './Pages/AddUser/AddUser';
import PostPage from './Pages/Post/Post';
import { Routes, Route } from 'react-router-dom';

function AuthenticatedApp() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/user/:id' element={<UserPage />} />
				<Route path='/users' element={<Users />} />
				<Route path='/bookmarks' element={<Bookmarks />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/statistics/*' element={<Statistics />} />
				<Route path='/user/add' element={<AddUser />} />
				<Route path='/post' element={<PostPage />} />
			</Routes>
		</>
	);
}

export default AuthenticatedApp;
