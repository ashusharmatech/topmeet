import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import UserIntroCard from '../../component/UserIntroCard';
import ObjectiveCard from '../../component/ObjectiveCard';

import UserContext from '../../context/UserContext';
import PreferenceCard from './PreferenceCard';

import UserCard from './UserCard';
import { find, concat, reject } from 'lodash';
import AvailibilityCard from '../Availibility/AvailibilityCard';



const UserProfile = () => {
  const navigate = useNavigate();

  const { currentUser, fetchUserByGoogleId, preference, getPreference, getAvailability, availability} = useContext(UserContext);

  useEffect(() => {
    if (currentUser) {
        getAvailability(currentUser?.id);
    }
}, [currentUser]);


  useEffect(() => {
    const _user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()
    if (_user === undefined || _user === null || _user.googleId === undefined || _user.googleId === null) {
      navigate("/login");
    }
    fetchUserByGoogleId(_user?.googleId);
  }, []);


  useEffect(() => {
    if (currentUser) {
      getPreference(currentUser?.id);
    }
  }, [currentUser]);


  useEffect(() => {

  }, [preference]);

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex place-content-center bg-indigo-500  py-20'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 mx-12 w-2xl container px-2 mx-auto">
          <div className="rounded-lg shadow-2xl bg-white ">
            {currentUser && <UserCard user={currentUser}></UserCard>}
          </div>
          <div>
            {currentUser && <PreferenceCard user={currentUser}></PreferenceCard>}
          </div>
        </div>
      </div>
      <div className='flex place-content-center bg-cyan-600 p-5'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 mx-12 w-2xl container px-2 mx-auto">
          <aside>
            {currentUser && <UserIntroCard user={currentUser}></UserIntroCard>}        
            {availability && <AvailibilityCard user={currentUser} availability={availability}></AvailibilityCard>}        
          </aside>
        </div>
      </div>
    </div>

  );
};

export default UserProfile;
