import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import RadioGroup from '../../component/RadioGroup'
import { accountStatusRadioButtons, frequencyRadioButtons, whatsappNotificationRadioData } from '../../constants/Options'
import UserContext from '../../context/UserContext';
import { find, concat, reject } from 'lodash';


const Settings = ({ user }) => {

  const navigate = useNavigate();

  const { fetchProfileByUserId, profile } = useContext(UserContext);
  const [statusStyle, setStatusStyle] = useState("bg-red-500 py-1 px-2 rounded text-white text-sm");
  const [whatsappNotificationStyle, setWhatsappNotificationStyle] = useState("bg-red-500 py-1 px-2 rounded text-white text-sm");
  const [matchFrequencyStyle, setMatchFrequencyStyle] = useState("bg-green-500 py-1 px-2 rounded text-white text-sm");

  const [userStatus, setUserStatus] = useState({});
  const [matchFrequency, setMatchFrequency] = useState({});
  const [whatsappNotification, setWhatsappNotification] = useState({});


  useEffect(() => {
    if (user) {
      fetchProfileByUserId(user?.id);

    }
  }, [user]);


  useEffect(() => {
    if (profile?.userStatus === 'ACTIVE') {
      setStatusStyle("bg-green-500 py-1 px-2 rounded text-white text-sm");
    }
    else {
      setStatusStyle("bg-red-500 py-1 px-2 rounded text-white text-sm");
    }
    if (profile?.whatsappNotification === 'ON') {
      setWhatsappNotificationStyle("bg-green-500 py-1 px-2 rounded text-white text-sm");
    }
    else {
      setWhatsappNotificationStyle("bg-red-500 py-1 px-2 rounded text-white text-sm");
    }
    setUserStatus(find(accountStatusRadioButtons, { 'value': profile?.userStatus }));
    setMatchFrequency(find(frequencyRadioButtons, { 'value': profile?.matchRequestFrequency }));
    setWhatsappNotification(find(whatsappNotificationRadioData, { 'value': profile?.whatsappNotification }));

  }, [profile]);

  const navigateIntro = () => {
    navigate("/intro");
  };


  return (
    <div className="bg-white shadow mt-6 rounded-lg p-6">
      <ul
        className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
        <li className="flex items-center py-3">
          <span>Account Status</span>
          <span className="ml-auto">
            <span className={statusStyle}>{userStatus?.title}</span></span>
        </li>
        <li className="flex items-center py-3">
          <span>Match Frequency</span>
          <span className="ml-auto">
            <span className={matchFrequencyStyle}>{matchFrequency?.title}</span></span>
        </li>
        <li className="flex items-center py-3">
          <span>Account Status</span>
          <span className="ml-auto">
            <span className={whatsappNotificationStyle}>{whatsappNotification?.title}</span></span>
        </li>
      </ul>
      <div className="flex first-letter:px-6 py-4 justify-left content-left">
        <button className="bg-purple-500  hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full " onClick={() => navigateIntro()}>
          Update
        </button>
      </div>
    </div>
  )
}

export default Settings