import React, { useContext, useEffect, useState } from 'react'
import { IoIosClose, IoIosMenu } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { images } from '../constants'
import { GoogleLogout } from 'react-google-login';
import UserContext from '../context/UserContext';

const Navbar = () => {

  const [userFromLocalStorage, setUserFromLocalStorage] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    setUserFromLocalStorage(localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear());
  }, [])
  

  let Links = [
    { name: "Home", link: "/home" },
    { name: "Blog", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Profile", link: "/profile" }
  ];
  let [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };


  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 '>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <img src={images.logo} alt="logo" className="h-10" />
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          {open ? <IoIosClose /> : <IoIosMenu />}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
          {
            userFromLocalStorage ?
              (<GoogleLogout
                clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                render={(renderProps) => (
                  <button
                    type="button"
                    className=" bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Logout
                  </button>
                )}
                onLogoutSuccess={handleLogout}
                onLogoutError={handleLogout}
                cookiePolicy="single_host_origin"
              />) :
              (<button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500' onClick={() => handleLogin()} >
                Login
              </button>)
          }

        </ul>
      </div>
    </div>
  )
}

export default Navbar