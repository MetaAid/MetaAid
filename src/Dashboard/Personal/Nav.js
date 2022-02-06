import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Nav(props) {
    const [navOpen, setNavOpen] = useState(false);    
    
    return (
        <>
            <div className={`h-screen bg-white drop-shadow-2xl transform transition-all duration-100 ease-in-out ${navOpen ? 'min-w-[20rem]' : 'min-w-[7rem]'} hidden lg:block`}>
                <div className='flex flex-col space-y-7 items-center divide-y-2 divide-smartblue'>
                    <div className={`absolute -right-2 top-1 rounded-lg bg-slate-900 p-1 text-white transform transition duration-300 ease-in-out ${navOpen ? 'rotate-180' : ''}`} onClick={() => {
                        setNavOpen(!navOpen)
                    }}>
                        <i className='fas fa-angle-right text-3xl'></i>
                    </div>
                    <div className='border-none flex flex-col items-center'>
                        <img src={`https://media.istockphoto.com/photos/the-man-smoking-on-the-night-street-background-picture-id1060211590?k=20&m=1060211590&s=170667a&w=0&h=YtwrzgEI-3U2fB6-bj2LeDdk_KsaDAfFyatr-S1Bu8A=`} className={`w-20 h-20 rounded-full object-cover transition duration-300 ease-in-out ${navOpen ? 'scale-125' : ''}`} />
                        <div className='text-center mt-3'>
                            <h1 className={`text-lg font-bold font-nunito ${navOpen ? '' : 'hidden'}`}>User 1</h1>
                            <h1 className={`text-lg font-bold font-nunito ${navOpen ? '' : 'hidden'}`}>user1@example.com</h1>
                        </div>
                    </div>
                    <div className='flex flex-col text-2xl py-5 space-y-6'>
                        <Link to="/Personal/Dashboard">
                            <div className={`text-smartblue border-2 border-smartblue hover:bg-smartblue hover:text-white rounded-full flex justify-center items-center relative space-x-3 ${navOpen ? 'py-2 px-4' : 'p-4'}`}>
                                <i className="fas fa-chart-pie max-w-full"></i>
                                <h1 className={`pb-1 ${navOpen ? '' : 'hidden'}`}>Overview</h1>
                            </div>
                        </Link>
                        <Link to="/Personal/Volunteer">
                            <div className={`text-smartblue border-2 border-smartblue hover:bg-smartblue hover:text-white rounded-full flex justify-center items-center relative space-x-3 ${navOpen ? 'py-2 px-4' : 'p-4'}`}>
                                <i className="fas fa-user-friends max-w-full "></i>
                                <h1 className={`pb-1 ${navOpen ? '' : 'hidden'} whitespace-nowrap`}>Service Volunteer</h1>
                            </div>
                        </Link>
                        <Link to="/Personal/Resource">
                            <div className={`text-smartblue border-2 border-smartblue hover:bg-smartblue hover:text-white rounded-full flex justify-center items-center relative space-x-3 ${navOpen ? 'py-2 px-4' : 'p-4'}`}>
                                <i className="fas fa-utensils max-w-full "></i>
                                <h1 className={`pb-1 ${navOpen ? '' : 'hidden'} whitespace-nowrap`}>Donate Resources</h1>
                            </div>
                        </Link>
                        <Link to="/Personal/Funding">
                            <div className={`text-smartblue border-2 border-smartblue hover:bg-smartblue hover:text-white rounded-full flex justify-center items-center relative space-x-3 ${navOpen ? 'py-2 px-4' : 'p-4'}`}>
                                <i className="fas fa-dollar-sign max-w-full"></i>
                                <h1 className={`pb-1 ${navOpen ? '' : 'hidden'}`}>Funding</h1>
                            </div>
                        </Link>
                    </div>
                    <div className='flex flex-col text-2xl py-5 space-y-6'>
                        <Link to="/Personal/Dashboard">
                            <div className={`text-smartblue border-2 border-smartblue hover:bg-smartblue hover:text-white rounded-full flex justify-center items-center relative space-x-3 ${navOpen ? 'py-2 px-4' : 'p-4'}`}>
                                <i className="fas fa-cog max-w-full"></i>
                                <h1 className={`pb-1 ${navOpen ? '' : 'hidden'}`}>Settings</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`absolute z-10 lg:hidden transform transition duration-300 ease-in-out ${props.nav2?'':'-translate-x-full'}`}>
                <div className={`h-screen bg-white drop-shadow-2xl transform transition-all duration-100 ease-in-out min-w-[20rem]`}>
                    <div className='flex flex-col space-y-7 items-center divide-y-2 divide-smartblue'>
                        <div className='border-none flex flex-col items-center mt-5'>
                            <img src={`https://media.istockphoto.com/photos/the-man-smoking-on-the-night-street-background-picture-id1060211590?k=20&m=1060211590&s=170667a&w=0&h=YtwrzgEI-3U2fB6-bj2LeDdk_KsaDAfFyatr-S1Bu8A=`} className={`w-20 h-20 rounded-full object-cover transition duration-300 ease-in-out scale-125}`} />
                            <div className='text-center mt-3'>
                                <h1 className={`text-lg font-bold font-nunito`}>Ajay Pal Singh</h1>
                                <h1 className={`text-lg font-bold font-nunito`}>ajayps04@outlook.com</h1>
                            </div>
                        </div>
                        <div className='flex flex-col text-2xl py-5 space-y-6'>
                            <Link to="/Personal/Dashboard">
                                <div className={`text-smartblue border-2 border-smartblue hover:bg-smartblue hover:text-white rounded-full flex justify-center items-center relative space-x-3 py-2 px-4`}>
                                    <i className="fas fa-chart-pie max-w-full"></i>
                                    <h1 className={`pb-1`}>Overview</h1>
                                </div>
                            </Link>
                            <Link to="/Personal/Volunteer">
                                <div className={`text-smartblue border-2 border-smartblue hover:bg-smartblue hover:text-white rounded-full flex justify-center items-center relative space-x-3 py-2 px-4`}>
                                    <i className="fas fa-user-friends max-w-full "></i>
                                    <h1 className={`pb-1  whitespace-nowrap`}>Service Volunteer</h1>
                                </div>
                            </Link>
                            <Link to="/Personal/Resource">
                                <div className={`text-smartblue border-2 border-smartblue hover:bg-smartblue hover:text-white rounded-full flex justify-center items-center relative space-x-3 py-2 px-4`}>
                                    <i className="fas fa-utensils max-w-full "></i>
                                    <h1 className={`pb-1 whitespace-nowrap`}>Donate Resources</h1>
                                </div>
                            </Link>
                            <Link to="/Personal/Funding">
                                <div className={`text-smartblue border-2 border-smartblue hover:bg-smartblue hover:text-white rounded-full flex justify-center items-center relative space-x-3 py-2 px-4`}>
                                    <i className="fas fa-dollar-sign max-w-full"></i>
                                    <h1 className={`pb-1 `}>Funding</h1>
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-col text-2xl py-5 space-y-6'>
                            <Link to="/Personal/Dashboard">
                                <div className={`text-smartblue border-2 border-smartblue hover:bg-smartblue hover:text-white rounded-full flex justify-center items-center relative space-x-3 py-2 px-4`}>
                                    <i className="fas fa-cog max-w-full"></i>
                                    <h1 className={`pb-1`}>Settings</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Nav;
