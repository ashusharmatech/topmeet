import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const PreferenceCard = ({ user }) => {

    const { currentUser, getPreference, preference } = useContext(UserContext);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [selectedIndustries, setSelectedIndustries] = useState([]);


    useEffect(() => {
        getPreference(currentUser?.id);

    }, []);

    useEffect(() => {
        setSelectedIndustries(preference?.industries);
        setSelectedRoles(preference?.roles);
    }, [preference]);

    const navigate = useNavigate();
    const navigateProfile = () => {
        navigate('/preference');
    };

    return (

        <div className="rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">I would like to meet</div>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold mb-2">Roles: </div>
                {selectedRoles && selectedRoles.map((e) => 
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-900 bg-blue-200 uppercase last:mr-1 mr-3" key={e.id}>
                        {e.name}
                    </span>
                )}
            </div>
            
            <div className="px-6 py-4">
                <div className="font-bold mb-2">Industries: </div>
                {selectedIndustries && selectedIndustries.map((e) => 
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  text-blue-900 bg-blue-200 uppercase last:mr-0 mr-1" key={e.id}>
                        {e.name}
                    </span>
                )}
            </div>
            <div className="px-6 py-4">
                <button className="bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full" onClick={() => navigateProfile()}>
                    Change
                </button>
            </div>
        </div>
    )
}

export default PreferenceCard