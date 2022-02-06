import React from 'react';
import App from '../App';

function Home() {
    return (
        <>
            <App current="Home" cS="Home" />
            <div className='h-screen relative -top-20 '>
                <img alt="" src={process.env.PUBLIC_URL + '/bgHome.jpg'} className='w-full object-cover relative h-full block' />
                <div className='h-full w-full bg-gradient-to-r from-slate-900 absolute top-0 block'></div>
                <div className="absolute top-0 flex flex-col justify-center mx-5 lg:mx-28 h-full space-y-6 font-semibold font-sora ">
                    <h1 className='text-2xl sm:text-3xl md:text-6xl text-smartblue'>MetaAid</h1>
                    <p className='text-sm sm:text-xl md:text-2xl text-white'>
                        During natural disasters, we provide a unique platform for people to come together and help one other in whatever manner they can by forming a unified front. Individuals and organizations can use this website to come together to make a difference in times of need. Through this ideal platform, you may make a difference by volunteering, donating goods and supplies, or even providing monetary support. This is the perfect platform for everyone to work together for the greater good.
                    </p>
                    <a href='/Login' className='transition ease-in-out text-center w-48 duration-300 bg-smartblue font-nunito font-semibold text-white md:px-6 md:py-3 rounded-lg hover:bg-orange-600 xsm:px-4 xsm:py-2 px-2 py-1'>How To Help?</a>
                </div>
            </div>
            <div className='bg-white py-4'>

                <div className='space-y-10 mt-20 mb-24'>
                    <h1 className='font-sora text-3xl sm:text-4xl md:text-5xl text-slate-900 text-center'>How We Make A Change?</h1>
                    <p className='text-sm sm:text-xl md:text-2xl text-slate-900  mx-5 md:mx-24 font-nunito text-center'>
                        Organizations and individuals can unite to make a change in times of need using this website. If you want to help by volunteering in rescue and aid missions, you can enroll and will be alerted. If you wish to donate goods and supplies, you have the details of the nearest collection point at your fingertips. If you wish to provide monetary assistance, we provide ease of access for donating. This is the perfect platform for individuals and organizations to collaborate for the good of humanity.
                    </p>
                </div>
                <div>
                    <div className='relative'>
                        <img alt="" src={process.env.PUBLIC_URL + '/helpVolunteer.jpg'} className='w-full object-cover relative h-screen md:h-120 block' />
                        <div className='h-full w-full bg-gradient-to-b from-slate-900 md:bg-gradient-to-r md:from-slate-900 absolute top-0 block'></div>
                        <div className="absolute top-0 md:top-8 lg:top-16 space-y-6 mx-5 font-semibold font-sora md:grid md:grid-cols-3 md:gap-4 h-full md:h-auto flex flex-col justify-center">
                            <div className='col-span-2 space-y-5'>
                                <h1 className='text-2xl sm:text-3xl lg:text-4xl text-smartblue'>Organised Voluntering</h1>
                                <p className='text-sm sm:text-lg lg:text-xl text-left text-white font-nunito pb-5'>
                                    Are you interested in volunteering for disaster relief? Find out about emergency response volunteer opportunities to see where you can help right now! You are becoming a proactive member in providing much-needed support to local emergency response agencies during times of need by volunteering as a disaster relief or emergency response volunteer. You can enlist if you want to help by volunteering on-site in rescue and humanitarian missions, and you will be notified if you are close by.
                                </p>
                                <a href='/Login' className='transition text-center ease-in-out duration-300 bg-smartblue font-nunito font-semibold text-white md:px-6 md:py-3 rounded-lg hover:bg-orange-600 xsm:px-4 xsm:py-2 px-2 py-1'>How To Help?</a>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex flex-col justify-center w-48'>
                                    <div className='bg-white p-5 flex flex-col justify-center items-center space-y-2'>
                                        <i className='fas fa-user-friends text-4xl text bg-cyan-600 text-white p-5 rounded-full'></i>
                                        <h1 className='font-sora text-4xl'>21.2K</h1>
                                        <h1 className='font-sora text-xl text-center'>Enrolled Volunteers</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-10 mt-20 mb-24'>
                        <h1 className='font-sora text-3xl sm:text-4xl md:text-5xl text-slate-900 text-center'>How Do We Do It?</h1>
                        <p className='text-sm sm:text-xl md:text-2xl text-slate-900 mx-5 md:mx-24 font-nunito text-center'>
                            We provide a platform for individuals and organizations to provide any kind of assistance which includes volunteering in helping communities to get back on their feet after a natural disaster. Provision of basic necessities such as food, water and clothing, and other supplies to the affected people; volunteers can chip in by providing their expertise in helping rebuild the community as well as monetary donations are some of the features that our platform provides.
                        </p>
                    </div>


                    <div className='relative'>
                        <img alt="" src={process.env.PUBLIC_URL + '/foodVolunteer.jpg'} className='w-full object-cover relative h-screen md:h-120 block' />
                        <div className='h-full w-full bg-gradient-to-t from-slate-900 via-slate-900 md:bg-gradient-to-r md:from-transparent md:to-slate-900 absolute top-0 block'></div>
                        <div className="absolute top-0 md:top-8 lg:top-16 space-y-6 mx-5 font-semibold font-sora md:grid md:grid-cols-3 md:gap-4 h-full md:h-auto flex flex-col justify-center">
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex flex-col justify-center w-48'>
                                    <div className='bg-white p-5 flex flex-col justify-center items-center space-y-2'>
                                        <i className='fas fa-utensils text-4xl text bg-orange-600 text-white py-5 px-6 rounded-full'></i>
                                        <h1 className='font-sora text-4xl'>2T</h1>
                                        <h1 className='font-sora text-xl text-center'>Resouce Donated</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2 space-y-5'>
                                <h1 className='text-2xl sm:text-3xl lg:text-4xl text-smartblue'>Managed Resource Collection</h1>
                                <p className='text-sm sm:text-lg lg:text-xl text-left text-white font-nunito pb-5'>
                                    Natural Disasters can cause a lot of damage to communities. It is critical to support the afflicted community by managing resource collection in such an event. You can help the community by donating food, water, clothing, and other essential items required depending on the situation. You have the contact information for the nearest collection point at your fingertips if you wish to contribute goods and resources.
                                </p>
                                <a href='/Login' className='transition text-center ease-in-out duration-300 bg-smartblue font-nunito font-semibold text-white md:px-6 md:py-3 rounded-lg hover:bg-orange-600 xsm:px-4 xsm:py-2 px-2 py-1 w-full md:w-48'>How To Help?</a>
                            </div>

                        </div>
                    </div>                    

                    <div className='relative my-20'>
                        <img alt="" src={process.env.PUBLIC_URL + '/bgFunding.jpg'} className='w-full object-cover relative h-screen md:h-120 block' />
                        <div className='h-full w-full bg-gradient-to-b from-slate-900 md:bg-gradient-to-r md:from-slate-900 absolute top-0 block'></div>
                        <div className="absolute top-0 md:top-8 lg:top-16 space-y-6 mx-5 font-semibold font-sora md:grid md:grid-cols-3 md:gap-4 h-full md:h-auto flex flex-col justify-center">
                            <div className='col-span-2 space-y-5'>
                                <h1 className='text-2xl sm:text-3xl lg:text-4xl text-smartblue'>Internation Fund Raising</h1>
                                <p className='text-sm sm:text-lg lg:text-xl text-left text-white font-nunito pb-5'>
                                    People who survive natural disasters are faced with the task of rebuilding after suffering a significant loss.  Natural disaster crowdfunding has developed as an effective technique for raising funds for disaster relief. International fund raising has changed the way individuals donate, making it easier for contributors to connect with worthwhile causes. If you wish to donate, we provide ease of access for donation.
                                </p>
                                <a href="/Login" className='transition text-center ease-in-out duration-300 bg-smartblue font-nunito font-semibold text-white md:px-6 md:py-3 rounded-lg hover:bg-orange-600 xsm:px-4 xsm:py-2 px-2 py-1'>How To Help?</a>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex flex-col justify-center w-48'>
                                    <div className='bg-white p-5 flex flex-col justify-center items-center space-y-2'>
                                        <i className='fas fa-money-check-alt text-4xl text bg-purple-600 text-white py-5 px-5 rounded-full'></i>
                                        <h1 className='font-sora text-4xl'>$1,500</h1>
                                        <h1 className='font-sora text-xl text-center'>Funds Raised</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white p-4 text-center text-xl font-nunito font-semibold text-slate-900'>
                <h1>&copy; Copyright 2022 MetaAid</h1>
            </div>
        </>
    );
}

export default Home;
