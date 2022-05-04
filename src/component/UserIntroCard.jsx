import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const UserIntroCard = ({ user }) => {
    const navigate = useNavigate();

    const { fetchProfileByUserId, profile } = useContext(UserContext);


    useEffect(() => {
        if (user) {
            fetchProfileByUserId(user?.id);
        }
    }, [user]);


    const navigateIntro = () => {
        navigate("/intro");
    };


    return (
        <div className="bg-white shadow rounded-lg p-10">
            <div className="flex flex-col gap-1 text-center items-center">
                <img className="h-32 w-32 bg-white p-2 rounded-full shadow mb-4" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" alt=""></img>
                <p className="font-semibold">{user.name}</p>
                <div className="flex justify-center items-center text leading-normal text-gray-400">
                    {profile?.designation} at {profile?.company}
                </div>
                <div className="flex justify-center items-center text-xl leading-normal text-blue-700 ">
                    <div>{profile?.intro}</div>
                </div>
            </div>
            <div className="flex first-letter:px-6 py-4 justify-center content-center">
                <button className="bg-purple-500  hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full "  onClick={() => navigateIntro()}>
                    Update
                </button>
            </div>
        </div>

    )
}

export default UserIntroCard