import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AvailibilityChoice from './container/Availibility/AvailibilityChoice';
import Feed from './container/Feed/Feed';
import Landing from './container/Landing/Landing';
import Login from './container/Login/Login';
import PreferencesChoice from './container/PreferencesChoice/PreferencesChoice';
import UserProfile from './container/UserProfile/UserProfile';
import { UserProvider } from './context/UserContext';

const App = () => {

  return (
    <UserProvider>
      <Routes>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/preference" element={<PreferencesChoice />} />
        <Route path="/availbility" element={<AvailibilityChoice />} />
        <Route path="/feed" element={<Feed />} />        
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Landing />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
