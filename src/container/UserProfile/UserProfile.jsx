import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import UserContext from '../../context/UserContext';
import PreferenceCard from './PreferenceCard';
import UserCard from './UserCard';

const UserProfile = () => {
  const navigate = useNavigate();
  const { currentUser, fetchUserByGoogleId } = useContext(UserContext);

  useEffect(() => {
    const _user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()
    if (_user === undefined || _user === null || _user.googleId === undefined || _user.googleId === null) {
      navigate("/login");
    }
    fetchUserByGoogleId(_user?.googleId);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex flex-row py-20'>
        <div className="lg:basic-1/2 md:basic-1/4 w-full rounded-lg shadow-2xl bg-white mx-6">
          {currentUser && <UserCard user={currentUser}></UserCard>}
        </div>
        <div className="lg:basis-1/4 hover:basic-1 rounded-lg ">
          {currentUser && <PreferenceCard user={currentUser}></PreferenceCard>}
        </div>
        <div className="lg:basis-1/4 sm:basic-1">
          <></>
        </div>
      </div>
    </div>

  );
};

export default UserProfile;
