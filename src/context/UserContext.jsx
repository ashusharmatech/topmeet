import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const navigate = useNavigate();

    const [isLoading, setLoading] = useState(true)
    const [users, setUsers] = useState();
    const [currentUser, setCurrentUser] = useState();
    const [profile, setProfile] = useState({})
    const [allRoles, setAllRoles] = useState([]);
    const [allIndustries, setAllIndustries] = useState([]);
    const [preference, setPreference] = useState({});

    useEffect(() => {
        fetchAllRoles();
        fetchAllIndustries();
    }, [])

    const fetchUser = async () => {
        const _user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
        if (_user === undefined || _user === null || _user.googleId === undefined || _user.googleId === null) {
            navigate("/login");
        }
        fetchUserByGoogleId(_user.googleId);
    }

    const fetchUserByGoogleId = async (googleid) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8080/api/users/google/' + googleid)
            .then((res) => res.json())
            .then((data) => {
                setCurrentUser(data)
                setLoading(false)
            })
            .catch((error) => {
                navigate("/login")
            })
    }

    const fetchProfileByUserId = async (userid) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8080/api/profileInfos/user/' + userid)
            .then((res) => res.json())
            .then((data) => {
                setProfile(data)
                setLoading(false)
            })
            .catch((error) => {
                console.log("profile not found");
            })
    }

    const fetchAllRoles = async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8080/api/role', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setAllRoles(data)
                setLoading(false)
            })
    }

    const fetchAllIndustries = async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8080/api/industry', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setAllIndustries(data)
                setLoading(false)
            })
    }

    const fetchAllUser = async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8080/api/user', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
                setLoading(false)
            })
    }


    const updateProfile = async (request) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        };
        fetch('http://localhost:8080/api/profileInfos/' + request.id, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setProfile(data);
                setLoading(false);
            })
    }

    const saveProfile = async (request) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        };
        fetch('http://localhost:8080/api/profileInfos', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setProfile(data);
                setLoading(false);
            })
    }


    const saveUser = async (name, email, famailyname, givenname, googleid) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, famailyname, givenname, googleid })
        };
        fetch('http://localhost:8080/api/users', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setCurrentUser(data);
                setLoading(false);
            })
    }

    const updatePreference = async (userid, roles, industries) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roles, industries })
        };
        fetch('http://localhost:8080/api/preference/user/' + userid, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setPreference(data);
                setLoading(false);
            })
    }

    const getPreference = async (userid) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:8080/api/preference/user/' + userid, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setPreference(data);
                setLoading(false);
            })
    }



    return <UserContext.Provider value={{
        isLoading,
        setLoading,
        saveUser,
        fetchUser,
        currentUser,
        profile,
        fetchUserByGoogleId,
        fetchProfileByUserId,
        saveProfile,
        updateProfile,
        allRoles,
        allIndustries,
        updatePreference,
        getPreference,
        preference
    }}>
        {children}
    </UserContext.Provider>
}

export default UserContext