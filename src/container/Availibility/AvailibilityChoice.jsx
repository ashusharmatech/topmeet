import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import UserContext from '../../context/UserContext';
import Subcard from '../UserProfile/Subcard';
import { find, concat, reject } from 'lodash';
import TimeSubCard from './TimeSubCard';
import filter from 'lodash/filter';

const AvailibilityChoice = () => {
    const navigate = useNavigate();
    const { currentUser, fetchUserByGoogleId, getAvailability, availability, setAvailability, allowedSlots, updateAvailability, getPreference, preference } = useContext(UserContext);
    const [selectedSlots, setSelectedSlots] = useState([]);

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
            getAvailability(currentUser?.id);
        }
    }, [currentUser]);

    useEffect(() => {
        console.log("Availability is " + JSON.stringify(availability));
        setSelectedSlots(availability);
    }, [availability]);


    const update = (slot, date, selected, setSelectedElements) => {
        let isSelected = find(selected, { slot: { id: slot?.id } });
        if (isSelected) {
            setSelectedElements(reject(selected, { slot: { id: slot?.id } }));
        }
        else {
            setSelectedElements(concat(selected, [{ date, slot }]));
        }
    };


    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }


    const updateSlotData = () => {
        var payload = [];
        const dates = selectedSlots.map(e => e.date);
        var uniqueDates = dates.filter(unique);

        uniqueDates.forEach((e) => {
            var list = filter(selectedSlots,{ date: e });
            list = list.map(({slot:{id}}) => ({id})); 
            payload.push({date:e, slotList: list})
        })

        updateAvailability(currentUser.id, payload);
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
                                <h1 className="text-3xl font-bold pt-8 lg:pt-0">How should we setup a match for you this week?</h1>
                                <div className="mx-auto pt-3 border-b-2 border-green-500 opacity-25"></div>
                                <div className="flex items-center justify-center py-10">
                                    {selectedSlots && allowedSlots.map((slotsOfDay) =>
                                        <TimeSubCard key={slotsOfDay?.day} slotsOfDay={slotsOfDay} selectedElements={selectedSlots} update={update} setSelectedElements={setSelectedSlots}></TimeSubCard>
                                    )}
                                </div>
                                <div className="flex items-center justify-between py-10">
                                    <button className="bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full" onClick={() => updateSlotData()} >
                                        Submit Timeslot
                                    </button>
                                    <button className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded-full" onClick={() => back()} >
                                        Back
                                    </button>
                                </div>

                                <div className="flex items-center justify-center py-10 m-2">
                                    <h1 className="text-xl font-bold pt-8 lg:pt-0">Too busy this time? </h1>
                                    <button className="underline font-bold text-blue-900 hover:text-orange-500 py-2 px-4 rounded-full" onClick={() => updateSlotData()} >
                                        Skip this Week
                                    </button>
                                </div>
                                <div className="w-full lg:w-5/12 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-2">
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailibilityChoice