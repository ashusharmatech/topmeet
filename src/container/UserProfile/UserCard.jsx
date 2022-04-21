import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/UserContext';
import InputBox from './InputBox';
import TextareaBox from './TextareaBox';

const UserCard = ({ user }) => {

    const { profile, fetchProfileByUserId, saveProfile, updateProfile } = useContext(UserContext);


    const [state, setState] = useState({});
    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        fetchProfileByUserId(user?.id);
    }, [])

    useEffect(() => {
        setState(profile);
    }, [profile])



    const update = e => {
        if (state.id === undefined || state.id === null || state.id === '') {
            saveProfile(state);
        }
        else {
            updateProfile(state);
        }
    }

    return (
                <div className="px-6 py-4">
                    <h1 className="text-xl font-bold text-center pt-8">{user?.name}</h1>
                    <div className="mx-auto pt-3 border-b-2 border-blue-500 opacity-50"></div>
                    <div className="pt-2 pb-2">
                        <InputBox label="Designation" name="designation" value={state.designation} changeHandler={handleChange} />
                        <InputBox label="Company" name="company" value={state.company} changeHandler={handleChange} />
                        <InputBox label="Location" name="location" value={state.location} changeHandler={handleChange} />
                        <InputBox label="Email" name="email" value={state.email} changeHandler={handleChange} />
                        <InputBox label="Mobile" name="mobile" value={state.mobile} changeHandler={handleChange} />
                        <TextareaBox label="Intro" name="intro" value={state.intro} changeHandler={handleChange}></TextareaBox>
                    </div>
                    <div className="pt-12 pb-8">
                        <button className="bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full" onClick={update}>
                            Update
                        </button>
                    </div>

                </div>

           
    )
}

export default UserCard