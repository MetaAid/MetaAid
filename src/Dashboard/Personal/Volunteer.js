import React, { useState } from 'react';
import Nav from './Nav';
import PieChart from '../UiComponents/PieChart';

function Volunteer() {
    const [nav2Open, setNav2Open] = useState(false);
    return (
        <>
            <div className='flex'>
                <Nav selected="Volunteer" nav2={nav2Open} />
                <div className='h-screen w-full bg-littleGray overflow-y-scroll'>
                    <div className='bg-smartblue py-4 px-5 flex justify-between'>
                        <h1 className='text-2xl font-sora text-white'>Volunteering Service</h1>
                        <i className={`fas fa-bars text-2xl lg:hidden text-white ${nav2Open ? 'hidden' : ''}`} onClick={() => {
                            setNav2Open(!nav2Open)
                        }}></i>
                        <i className={`fas fa-times text-2xl px-[2.25px] lg:hidden  text-white ${nav2Open ? '' : 'hidden'}`} onClick={() => {
                            setNav2Open(!nav2Open)
                        }}></i>
                    </div>
                    <div className='pt-5 px-5'>
                        <div className='md:grid md:grid-cols-3 md:gap-4 text-slate-900 font-semibold font-sora'>
                            <div className='bg-white p-5 flex items-center space-x-5 drop-shadow-2xl'>
                                <i class="fas fa-wrench text-2xl px-3 py-2 rounded-full text-white bg-green-600"></i>
                                <div>
                                    <h1 className='text-4xl'>42</h1>
                                    <h1>Services Completed</h1>
                                </div>
                            </div>
                            <div className='bg-white p-5 flex items-center space-x-5 drop-shadow-2xl'>
                                <i class="fas fa-wrench text-2xl px-3 py-2 rounded-full text-white bg-cyan-600"></i>
                                <div>
                                    <h1 className='text-4xl'>12</h1>
                                    <h1>Services In Progress</h1>
                                </div>
                            </div>
                            <div className='bg-white p-5 flex items-center space-x-5 drop-shadow-2xl'>
                                <i class="fas fa-clock text-2xl px-3 py-2 rounded-full text-white bg-orange-600"></i>
                                <div>
                                    <h1 className='text-4xl'>1H 30M</h1>
                                    <h1>Time Served</h1>
                                </div>
                            </div>
                        </div>
                        <div className='md:grid md:grid-cols-3 md:gap-4 text-slate-900 font-semibold font-sora mt-14'>
                            <div className='p-5 h-76 bg-white drop-shadow-2xl col-span-2'>
                                <h1 className='text-xl'>Services Available</h1>
                                <div className='overflow-y-scroll max-h-64 rounded-lg'>
                                    <table class="table-auto w-full mt-3 font-nunito text-left  px-5 rounded-lg">
                                        <thead>
                                            <tr className='bg-smartblue text-white'>
                                                <th className='py-3 px-2'>Community Name</th>
                                                <th className='py-3 px-2'>Location</th>
                                                <th className='py-3 px-2'>Role</th>
                                                <th className='py-3 px-2'>Date</th>
                                                <th className='py-3 px-2'>SignUp</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='py-3 px-2'>Texas Housing Community</td>
                                                <td className='py-3 px-2'>Texas</td>
                                                <td className='py-3 px-2'>Mechanical E</td>
                                                <td className='py-3 px-2'>1/1/2022</td>
                                                <td className='py-3 px-2'><button className='py-1 px-4 bg-emerald-600 text-white rounded-2xl hover:bg-green-600'>SignUp</button></td>
                                            </tr>
                                            <tr>
                                                <td className='py-3 px-2'>Houston Local</td>
                                                <td className='py-3 px-2'>Houston</td>
                                                <td className='py-3 px-2'>Electrical E</td>
                                                <td className='py-3 px-2'>7/11/2021</td>
                                                <td className='py-3 px-2'><button className='py-1 px-4 bg-emerald-600 text-white rounded-2xl hover:bg-green-600'>SignUp</button></td>
                                            </tr>
                                            <tr>
                                                <td className='py-3 px-2'>Washington Farmers Community</td>
                                                <td className='py-3 px-2'>Washington</td>
                                                <td className='py-3 px-2'>Civl E</td>
                                                <td className='py-3 px-2'>6/10/2021</td>
                                                <td className='py-3 px-2'><button className='py-1 px-4 bg-emerald-600 text-white rounded-2xl hover:bg-green-600'>SignUp</button></td>
                                            </tr>
                                            <tr>
                                                <td className='py-3 px-2'>Texas Housing Community</td>
                                                <td className='py-3 px-2'>Texas</td>
                                                <td className='py-3 px-2'>Electrical E</td>
                                                <td className='py-3 px-2'>1/12/2022</td>
                                                <td className='py-3 px-2'><button className='py-1 px-4 bg-emerald-600 text-white rounded-2xl hover:bg-green-600'>SignUp</button></td>
                                            </tr>
                                            <tr>
                                                <td className='py-3 px-2'>Texas Housing Community</td>
                                                <td className='py-3 px-2'>Texas</td>
                                                <td className='py-3 px-2'>Civil E</td>
                                                <td className='py-3 px-2'>1/12/2022</td>
                                                <td className='py-3 px-2'><button className='py-1 px-4 bg-emerald-600 text-white rounded-2xl hover:bg-green-600'>SignUp</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='p-5 h-76 bg-white drop-shadow-2xl'>
                                <h1 className='text-xl'>Services Location (Pie)</h1>
                                <div className='h-5/6'><PieChart /></div>
                            </div>
                        </div>
                        <div className='md:grid md:grid-cols-3 md:gap-4 text-slate-900 font-semibold font-sora mt-14'>
                            <div className='p-5 h-76 bg-white drop-shadow-2xl col-span-2'>
                                <h1 className='text-xl'>Services Completed</h1>
                                <div className='overflow-y-scroll max-h-64 rounded-lg'>
                                    <table class="table-auto w-full mt-3 font-nunito text-left  px-5 rounded-lg">
                                        <thead>
                                            <tr className='bg-smartblue text-white'>
                                                <th className='py-3 px-2'>Community Name</th>
                                                <th className='py-3 px-2'>Location</th>
                                                <th className='py-3 px-2'>Role</th>
                                                <th className='py-3 px-2'>Date</th>
                                                <th className='py-3 px-2'>SignUp</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='py-3 px-2'>Texas Housing Community</td>
                                                <td className='py-3 px-2'>Texas</td>
                                                <td className='py-3 px-2'>Mechanical E</td>
                                                <td className='py-3 px-2'>1/1/2022</td>
                                                <td className='py-3 px-2'><button className='py-1 px-4 bg-emerald-600 text-white rounded-2xl hover:bg-green-600'>SignUp</button></td>
                                            </tr>
                                            <tr>
                                                <td className='py-3 px-2'>Houston Local</td>
                                                <td className='py-3 px-2'>Houston</td>
                                                <td className='py-3 px-2'>Electrical E</td>
                                                <td className='py-3 px-2'>7/11/2021</td>
                                                <td className='py-3 px-2'><button className='py-1 px-4 bg-emerald-600 text-white rounded-2xl hover:bg-green-600'>SignUp</button></td>
                                            </tr>
                                            <tr>
                                                <td className='py-3 px-2'>Washington Farmers Community</td>
                                                <td className='py-3 px-2'>Washington</td>
                                                <td className='py-3 px-2'>Civl E</td>
                                                <td className='py-3 px-2'>6/10/2021</td>
                                                <td className='py-3 px-2'><button className='py-1 px-4 bg-emerald-600 text-white rounded-2xl hover:bg-green-600'>SignUp</button></td>
                                            </tr>
                                            <tr>
                                                <td className='py-3 px-2'>Texas Housing Community</td>
                                                <td className='py-3 px-2'>Texas</td>
                                                <td className='py-3 px-2'>Electrical E</td>
                                                <td className='py-3 px-2'>1/12/2022</td>
                                                <td className='py-3 px-2'><button className='py-1 px-4 bg-emerald-600 text-white rounded-2xl hover:bg-green-600'>SignUp</button></td>
                                            </tr>
                                            <tr>
                                                <td className='py-3 px-2'>Texas Housing Community</td>
                                                <td className='py-3 px-2'>Texas</td>
                                                <td className='py-3 px-2'>Civil E</td>
                                                <td className='py-3 px-2'>1/12/2022</td>
                                                <td className='py-3 px-2'><button className='py-1 px-4 bg-emerald-600 text-white rounded-2xl hover:bg-green-600'>SignUp</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='p-5 h-76 bg-white drop-shadow-2xl'>
                                <h1 className='text-xl'>Services Location (Pie)</h1>
                                <div className='h-5/6'><PieChart /></div>
                            </div>
                        </div>
                        <div className='p-5'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Volunteer;
