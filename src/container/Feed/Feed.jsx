import React, { useEffect, useState } from 'react'
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { IoIosClose, IoIosMenu } from 'react-icons/io';
import { images } from '../../constants'

const Feed = () => {

  
  const [userFromLocalStorage, setUserFromLocalStorage] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    setUserFromLocalStorage(localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear());
  }, [])
  

  let Links = [
    { name: "Home", link: "/home" },
    { name: "Blog", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Feed", link: "/feed" },
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
    <div className="app bg-gray-100">
      <nav className="bg-white w-full flex relative shadow justify-between items-center px-8 h-20">
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
      </nav>
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 mx-12 w-2xl container px-2 mx-auto">
      <aside className="">
      <div className="bg-white shadow rounded-lg p-10">
            <div className="flex flex-col gap-1 text-center items-center">
                <img className="h-32 w-32 bg-white p-2 rounded-full shadow mb-4" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" alt=""></img>
                <p className="font-semibold">John Doe</p>
                <div className="text-sm leading-normal text-gray-400 flex justify-center items-center">
                <svg viewBox="0 0 24 24" className="mr-1" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Los Angeles, California
                </div>
            </div>
            <div className="flex justify-center items-center gap-2 my-3">
                <div className="font-semibold text-center mx-4">
                    <p className="text-black">102</p>
                    <span className="text-gray-400">Posts</span>
                </div>
                <div className="font-semibold text-center mx-4">
                    <p className="text-black">102</p>
                    <span className="text-gray-400">Followers</span>
                </div>
                <div className="font-semibold text-center mx-4">
                    <p className="text-black">102</p>
                    <span className="text-gray-400">Folowing</span>
                </div>
            </div>
        </div>
      </aside>
      </main>
    </div>
  )
}

export default Feed