import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";

function App(props) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <nav className="px-5 py-2 text-white bg-transparent  font-nunito z-10 relative font-bold hidden md:block">
        <div className="flex justify-between mx-auto max-w-7xl">
          <div>
            <img src={process.env.PUBLIC_URL + '/logoLatestNew.png'} alt="Logo" className="object-contain w-40" />
          </div>
          <div className="flex items-center space-x-5 text-lg">
            <Link to="/" className={`${props.current === "Home" ? "rounded-full bg-smartblue px-4 py-2" : "hover:text-smartblue cursor-pointer"}`}>Home</Link>
            <div className="group p-4">
              <label htmlFor="hndPrep" className={`px-4 py-2 ${props.current === "Prepare" ? "rounded-full bg-smartblue" : "hover:text-smartblue cursor-pointer group-hover:text-smartblue"} p-2`}>Prepare</label>
              <div className="transition ease-in-out mt-3 group-hover:max-h-120 hover:max-h-120 max-h-0 overflow-y-hidden duration-200 absolute bg-slate-900 w-48 group-hover:p-2 hover:p-2 rounded-lg space-y-2 flex flex-col">
                <Link to="/Prepare/Earthquake" className="hover:text-smartblue cursor-pointer">Earthquake</Link>
                <Link to="/Prepare/Tsunami" className="hover:text-smartblue cursor-pointer">Tsunami</Link>
                <Link to="/Prepare/Wildfire" className="hover:text-smartblue cursor-pointer">Wildfire</Link>
                <Link to="/Prepare/Floods" className="hover:text-smartblue cursor-pointer">Floods</Link>
                <Link to="/Prepare/Lightning" className="hover:text-smartblue cursor-pointer">Lightning</Link>                
              </div>
            </div>

          </div>
          <div className="flex items-center space-x-4 text-lg">
            <Link to="/Login" className='px-4 py-2 rounded-md bg-smartblue hover:bg-indigo-600'>Login</Link>
            <Link to="/SignUp" className='hover:text-blue-600'>Sign Up</Link>
          </div>
        </div>
      </nav>
      <nav className='px-5 py-2 text-white font-nunito z-10 relative font-bold block md:hidden'>
        <div className='flex items-center'>
          <i className={`fas fa-bars text-3xl ml-auto`} onClick={() => {
            setMenuOpen(true)
          }}></i>
        </div>
      </nav>
      <div className={`${menuOpen ? '' : '-translate-x-full'} md:hidden transition ease-in-out duration-300 fixed top-0 bg-slate-900 z-10 sm:w-1/2 w-full h-screen`}>
        <div className="flex flex-col mt-2 text-lg text-white space-y-10">
          <div className="flex items-center justify-center mx-5">
            <img src={process.env.PUBLIC_URL + '/logoLatestNew.png'} alt="Logo" className="object-contain w-48" />
            <i className={`fas fa-times text-3xl ml-auto `} onClick={() => {
              setMenuOpen(false)
            }}></i>
          </div>
          <div className="mx-5 flex flex-col divide-y-2 divide-white space-y-5">
            <Link to="/" className={`font-semibold mx-4 w-full ${props.cS === "Home" ? 'text-smartblue' : ''}`}>Home</Link>
            <div>
              <h1 className="font-sora font-semibold px-4 py-1">Prepare</h1>
              <div className="mx-6 my-2 space-y-3 flex flex-col">
                <Link to="/Prepare/Earthquake" className={`hover:text-blue-600 ${props.cS === "Earthquake" ? 'text-smartblue' : ''}`}>Earthquake</Link>
                <Link to="/Prepare/Tsunami" className={`hover:text-blue-600 ${props.cS === "Tsunami" ? 'text-smartblue' : ''}`}>Tsunami</Link>
                <Link to="/Prepare/Lightning" className={`hover:text-blue-600 ${props.cS === "Lightning" ? 'text-smartblue' : ''}`}>Lightning</Link>
                <Link to="/Prepare/Wildfire" className={`hover:text-blue-600 ${props.cS === "Wilfire" ? 'text-smartblue' : ''}`}>Wildfire</Link>
                <Link to="/Prepare/Floods" className={`hover:text-blue-600 ${props.cS === "Floods" ? 'text-smartblue' : ''}`}>Floods</Link>
                
              </div>
            </div>
            <div>
              <h1 className="font-sora font-semibold px-4 py-1">Access</h1>
              <div className="mx-6 my-2 space-y-3 flex flex-col">
                <Link to="/Login" className={`hover:text-blue-600 ${props.cS === "Login" ? 'text-smartblue' : ''}`}>Login</Link>
                <Link to="/SignUp" className={`hover:text-blue-600 ${props.cS === "SignUp" ? 'text-smartblue' : ''}`}>SignUp</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
