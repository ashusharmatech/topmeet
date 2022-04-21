import React, { useContext } from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillLinkedin } from 'react-icons/ai';
import UserContext from '../../context/UserContext';
import { images } from '../../constants';

const Login = () => {

    const { currentUser, saveUser } = useContext(UserContext);

    const navigate = useNavigate();
    const responseGoogle = (response) => {
        localStorage.setItem('user', JSON.stringify(response.profileObj));
        const { name, googleId, imageUrl, email, givenName, familyName } = response.profileObj;
        const doc = {
            _id: googleId,
            _type: 'user',
            userName: name,
            email: email,
            givenName: givenName,
            familyName: familyName,
            image: imageUrl,
        };
        saveUser(name, email, familyName, givenName, googleId).then(() => {
            navigate('/home', { replace: true });
        });
    };
    return (
        <div className="flex items-center min-h-screen bg-gray-50">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img className="object-cover w-full h-full" src="https://source.unsplash.com/user/erondu/1600x900" alt="img" />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <div className="flex justify-center">

                                <img src={images.logo} width="130px" />

                            </div>

                            <hr className="my-8" />

                            <GoogleLogin
                                clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                                render={(renderProps) => (
                                    <button
                                        type="button"
                                        className="block w-full px-4 py-2 mt-4  flex justify-center items-center p-3 border rounded-lg cursor-pointer outline-none"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                    >
                                        <FcGoogle className="mr-4" /> Sign in with Google
                                    </button>
                                )}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy="single_host_origin"
                            />

                            <hr className="my-8" />

                            <GoogleLogin
                                clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                                render={(renderProps) => (
                                    <button
                                        type="button"
                                        className="block w-full px-4 py-2 mt-4  flex justify-center items-center p-3 border rounded-lg cursor-pointer outline-none"
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                    >
                                        <AiFillLinkedin className="mr-4" /> Sign in with Linkedin
                                    </button>
                                )}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy="single_host_origin"
                            />

                            <hr className="my-8" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login