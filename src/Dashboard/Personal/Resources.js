import React, { useState } from 'react';
import Nav from './Nav';
import BarChart from '../UiComponents/BarChart';
import PieChart from '../UiComponents/PieChart';
import LineChart from '../UiComponents/LineChart';

function Resources() {
    const [nav2Open, setNav2Open] = useState(false);
    return (
        <div className='flex'>
            <Nav selected="Resource" nav2={nav2Open} />
            <div className='h-screen w-full bg-littleGray overflow-y-scroll'>
                <div className='bg-smartblue py-4 px-5 flex justify-between'>
                    <h1 className='text-2xl font-sora text-white'>Resources Donation</h1>
                    <i className='fas fa-plus text-white text-2xl px-3 hover:bg-white hover:text-smartblue rounded-full'></i>
                    <i className={`fas fa-bars text-2xl text-white lg:hidden ${nav2Open?'hidden':''}`} onClick={() => {
                        setNav2Open(!nav2Open)
                    }}></i>
                    <i className={`fas fa-times text-2xl px-[2.25px] text-white lg:hidden ${nav2Open?'':'hidden'}`} onClick={() => {
                        setNav2Open(!nav2Open)
                    }}></i>
                </div>
                <div className='pt-5 px-5'>
                    <div className='md:grid md:grid-cols-3 md:gap-4 text-slate-900 font-semibold font-sora'>
                        <div className='bg-white p-5 flex items-center space-x-5 drop-shadow-2xl'>
                            <i class="fas fa-utensils text-2xl px-4 py-2 rounded-full text-white bg-purple-700"></i>
                            <div>
                                <h1 className='text-4xl'>42</h1>
                                <h1>Meal's Donated</h1>
                            </div>
                        </div>
                        <div className='bg-white p-5 flex items-center space-x-5 drop-shadow-2xl'>
                            <i class="fas fa-prescription-bottle-alt text-2xl px-4 py-2 rounded-full text-white bg-teal-600"></i>
                            <div>
                                <h1 className='text-4xl'>12</h1>
                                <h1>Medication Provided</h1>
                            </div>
                        </div>
                        <div className='bg-white p-5 flex items-center space-x-5 drop-shadow-2xl'>
                            <i class="fas fa-warehouse text-2xl px-2 py-2 rounded-full text-white bg-yellow-600"></i>
                            <div>
                                <h1 className='text-4xl'>1.3Kg</h1>
                                <h1>Resources Donated</h1>
                            </div>
                        </div>
                    </div>
                    <div className='md:grid md:grid-cols-3 md:gap-4 text-slate-900 font-semibold font-sora mt-14'>
                        <div className='p-5 h-76 bg-white drop-shadow-2xl col-span-2'>
                            <h1 className='text-xl'>Most Donated Food Items</h1>
                            <div className='h-5/6'><BarChart /></div>
                        </div>
                        <div className='p-5 h-76 bg-white drop-shadow-2xl'>
                            <h1 className='text-xl'>Most Donated Food Items</h1>
                            <div className='h-5/6'><PieChart /></div>
                        </div>
                    </div>
                    <div className='md:grid md:grid-cols-4 md:gap-4 text-slate-900 font-semibold font-sora mt-14'>
                        <div className='p-5 h-76 bg-white drop-shadow-2xl col-span-2'>
                            <h1 className='text-xl'>Recently Donated</h1>
                            <div className='h-5/6'><BarChart /></div>
                        </div>
                        <div className='p-5 h-76 bg-white drop-shadow-2xl'>
                            <h1 className='text-xl'>Recently Donated</h1>
                            <div className='h-5/6'><PieChart /></div>
                        </div>
                        <div className='p-5 h-76 bg-white drop-shadow-2xl'>
                            <h1 className='text-xl'>Donated This Month</h1>
                            <div className='h-5/6'><LineChart /></div>
                        </div>
                    </div>
                    <div className='p-5'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resources;
