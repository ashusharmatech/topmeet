import React from 'react'
import { useNavigate } from 'react-router-dom';

const AvailibilityCard = ({ user, availability }) => {


    const navigate = useNavigate();
    const navigateAvailibility = () => {
        navigate("/availbility");
    };

    return (
        <div className="bg-white shadow mt-6 rounded-lg p-6">
            {availability.length >0 ? (
                <>
                    <h1 className="text-gray-600 text-center  font-bold mb-4">Great! You have signed up for a meeting this week.</h1>
                    <h2 className="text-gray-600 text-center  font-semibold mb-4">We'll connect with you with more details about meeting in few days.</h2>
                </>
            ) : (
                <>
                    <h1 className="text-gray-600 text-center  font-bold mb-4">You're not signed up for a meeting this week.</h1>
                    <h2 className="text-gray-600 text-center  font-semibold mb-4">We'll connect with you next week and check your schedule.</h2>
                </>
            )}


            <div className="flex first-letter:px-6 py-4 justify-center content-center">
                <button className="bg-purple-500  hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full " onClick={() => navigateAvailibility()}>
                    Update
                </button>
            </div>

        </div>
    )
}

export default AvailibilityCard