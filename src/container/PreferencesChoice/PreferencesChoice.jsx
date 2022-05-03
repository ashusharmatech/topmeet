import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import UserContext from '../../context/UserContext';
import Subcard from '../UserProfile/Subcard';
import { find, concat, reject } from 'lodash';

const PreferencesChoice = () => {
  const navigate = useNavigate();
  const { currentUser, fetchUserByGoogleId, allRoles, allObjectives, allIndustries, updatePreference, getPreference, preference } = useContext(UserContext);

  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedObjectives, setSelectedObjectives] = useState([]);  
  useEffect(() => {
    const _user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()
    if (_user === undefined || _user === null || _user.googleId === undefined || _user.googleId === null) {
      navigate("/login");
    }
    else {
      fetchUserByGoogleId(_user?.googleId);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      getPreference(currentUser?.id);
    }
  }, [currentUser]);
  

  useEffect(() => {
    setSelectedIndustries(preference?.industries);
    setSelectedRoles(preference?.roles);
    setSelectedObjectives(preference?.objectives)
  }, [preference]);

  const update = (value, selected, setSelectedElements) => {
    let isSelected = find(selected, { id: value.id });
    if (isSelected) {
      setSelectedElements(reject(selected, { id: value.id }));
    }
    else {
      setSelectedElements(concat(selected, [value]));
    }
  };


  const updatePreferenceData = () => {
    updatePreference(currentUser.id, selectedRoles.map(e => e.id), selectedIndustries.map(e => e.id), selectedObjectives.map(e => e.id));
    navigate("/profile");
  };


  const back = () => {
    navigate("/profile");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex flex-col items-center justify-between py-10'>
        <div className="max-w-full flex items-center h-full flex-wrap mx-auto my-2 ">
          <div className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-75 mx-6 lg:mx-2">
            {currentUser &&
              <div className="p-4 md:p-12 text-center lg:text-left">
                <h1 className="text-3xl font-bold pt-8 lg:pt-0">I would like to meet</h1>
                <div className="mx-auto pt-3 border-b-2 border-green-500 opacity-25"></div>
                <div className="pt-12 pb-8">
                  {selectedRoles && <Subcard title="Roles" elements={allRoles} selectedElements={selectedRoles} update={update} setSelectedElements={setSelectedRoles}></Subcard>}
                  {selectedIndustries && <Subcard title="Industries" elements={allIndustries} selectedElements={selectedIndustries} update={update} setSelectedElements={setSelectedIndustries}></Subcard>}
                  {selectedObjectives && <Subcard title="Objectives" elements={allObjectives} selectedElements={selectedObjectives} update={update} setSelectedElements={setSelectedObjectives}></Subcard>}

                </div>
                <div className="flex items-center justify-between py-10">
                  <button className="bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full" onClick={() => updatePreferenceData()} >
                    Change Preference
                  </button>               
                  <button className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded-full" onClick={() => back()} >
                    Back
                  </button>
                </div>
              </div>
            }

          </div>
          <div className="w-full lg:w-5/12 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-2">
          </div>
        </div>
      </div>
    </div>

  );
};

export default PreferencesChoice;
