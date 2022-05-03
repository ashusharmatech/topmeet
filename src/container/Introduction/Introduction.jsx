import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import UserContext from '../../context/UserContext';


const Introduction = () => {

    const navigate = useNavigate();
    const { currentUser, fetchUserByGoogleId, fetchProfileByUserId, profile, saveProfile, updateProfile } = useContext(UserContext);

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
            fetchProfileByUserId(currentUser?.id);
        }
    }, [currentUser]);

    useEffect(() => {
        setState(profile);
    }, [profile])

    const [state, setState] = useState({});
    const handleChange = e => {
        console.log("Hn");
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const back = () => {
        navigate("/profile");
    };

    const update = e => {
        if (state.id === undefined || state.id === null || state.id === '') {
            saveProfile(state);
        }
        else {
            updateProfile(state);
        }
        navigate("/profile");
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='py-20'>
                <h1 className="flex flex-col text-3xl font-bold pt-8 lg:pt-0 items-center justify-center">Your profile</h1>
                <div className="md:grid md:grid-cols-5 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">

                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-3">
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-2 sm:col-span-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            value={currentUser?.name}
                                            disabled
                                        />
                                    </div>

                                    <div className="col-span-2 sm:col-span-3">
                                        <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
                                            Designation
                                        </label>
                                        <input
                                            type="text"
                                            name="designation"
                                            autoComplete="designation"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            value={state.designation} onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email-address"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            value={state.email} onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            id="location"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            value={state.location} onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                            Mobile
                                        </label>
                                        <input
                                            type="text"
                                            name="mobile"
                                            id="mobile"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            value={state.mobile} onChange={handleChange}
                                        />
                                    </div>

                                </div>

                                <div>
                                    <label htmlFor="intro" className="block text-sm font-medium text-gray-700">
                                        About
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="intro"
                                            name="intro"
                                            rows={3}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            placeholder='I am ..'
                                            value={state.intro} onChange={handleChange}
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Brief description for your profile. {JSON.stringify(currentUser)}
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                                    <div className="mt-1 flex items-center">
                                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </span>
                                        <button
                                            type="button"
                                            className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={update}
                                        >
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50  sm:px-6 gap-2">
                                <button
                                    type="submit"
                                    className="inline-flex text-left justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={update}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:col-span-1">
                <div className="px-4 sm:px-0">

                </div>
            </div>
        </div>
    );
};

export default Introduction