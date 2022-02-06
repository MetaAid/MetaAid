import React,{useState} from 'react';
import Nav from './Nav';
import PieChart from '../UiComponents/PieChart';

function Funding() {
    const [nav2Open, setNav2Open] = useState(false);
    return (
        <div className='flex'>
            <Nav selected="Funding" nav2={nav2Open} />
            <div className='h-screen w-full bg-littleGray overflow-y-scroll'>
                <div className='bg-smartblue py-4 px-5 flex justify-between'>
                    <h1 className='text-2xl font-sora text-white'>Funding</h1>
                    <i className='fas fa-paper-plane text-white text-2xl px-3 hover:bg-white hover:text-smartblue rounded-full'></i>
                    <i className={`fas fa-bars text-2xl text-white lg:hidden ${nav2Open?'hidden':''}`} onClick={() => {
                        setNav2Open(!nav2Open)
                    }}></i>
                    <i className={`fas fa-times text-2xl px-[2.25px] text-white lg:hidden ${nav2Open?'':'hidden'}`} onClick={() => {
                        setNav2Open(!nav2Open)
                    }}></i>
                </div>
                <div className='pt-5 px-5'>
                    <div className='md:grid md:grid-cols-2 md:gap-4 text-slate-900 font-semibold font-sora'>
                        <div className='bg-white p-5 flex items-center space-x-5 drop-shadow-2xl'>
                            <i class="fas fa-dollar-sign text-2xl px-4 py-2 rounded-full text-white bg-pink-700"></i>
                            <div>
                                <h1 className='text-4xl'>1.2K</h1>
                                <h1>Funds Donated</h1>
                            </div>
                        </div>
                        <div className='bg-white p-5 flex items-center space-x-5 drop-shadow-2xl'>
                            <i class="fas fa-user-friends text-2xl px-4 py-3 rounded-full text-white bg-sky-600"></i>
                            <div>
                                <h1 className='text-4xl'>14</h1>
                                <h1>Funded Communities</h1>
                            </div>
                        </div>
                    </div>
                    <div className='md:grid md:grid-cols-3 md:gap-4 text-slate-900 font-semibold font-sora mt-14'>
                        <div className='p-5 h-76 bg-white drop-shadow-2xl col-span-2 pb-5'>
                            <h1 className='text-xl'>Recently Funded Communities</h1>
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
                            <h1 className='text-xl'>Funded Communites</h1>
                            <div className='h-5/6'><PieChart /></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Funding;
