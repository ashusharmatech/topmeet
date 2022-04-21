import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './container/Landing/Landing';
import Login from './container/Login/Login';
import PreferencesChoice from './container/PreferencesChoice/PreferencesChoice';
import UserProfile from './container/UserProfile/UserProfile';
import { UserProvider } from './context/UserContext';

const App = () => {

  useEffect(() => {

  }, []);

  return (
    <UserProvider>
      <Routes>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/preference" element={<PreferencesChoice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Landing />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
