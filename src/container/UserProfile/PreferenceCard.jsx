import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import Tag from './Tag';

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
                    <Tag label={e.name} key={e.id}></Tag>
                )}
            </div>
            
            <div className="px-6 py-4">
                <div className="font-bold mb-2">Industries: </div>
                {selectedIndustries && selectedIndustries.map((e) => 
                    <Tag label={e.name} key={e.id}></Tag>
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