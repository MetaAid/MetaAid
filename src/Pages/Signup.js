import React, { useState } from 'react';
import App from '../App';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');    

    return (
        <>
            <App cS="SignUp" />
            <div className='h-screen relative -mt-20'>
                <img alt="" src={process.env.PUBLIC_URL + '/bgHome.jpg'} className='w-full object-cover relative h-full block' />
                <div className='h-full w-full bg-gradient-to-r from-slate-900 absolute top-0 block'></div>
                <div className='absolute top-0 w-full h-screen pt-24'>
                    <div className='h-full w-screen overflow-y-scroll flex flex-col justify-center items-center'>
                        <h1 className='font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white text-center mt-5'>SignUp</h1>
                        <div className='mt-8 text-white flex flex-col items-center space-y-3'>
                            <div className='w-72 sm:120 flex items-center justify-center space-x-4'>

                                <div className='relative'>
                                    <input id="firstName" className="px-5 py-3 pt-7 w-34 sm:w-58 appearance-none focus:outline-none rounded-lg text-white bg-transparent border-2 border-blue-500 peer" value={firstName} onChange={(event) => {
                                        setFirstName(event.target.value.trim())
                                    }} />
                                    <label htmlFor="firstName" className={`absolute top-5 left-3 text-lg font-nunito font-semibold 
                        peer-focus-within:transform peer-focus-within:-translate-y-3 peer-focus-within:scale-75 peer-focus-within:-translate-x-3 transition ease-in-out duration-300 ${firstName.length > 0 ? 'transform -translate-y-3 scale-75 -translate-x-3' : ''}`}>First Name</label>
                                </div>

                                <div className='relative'>
                                    <input id="lastName" className="px-5 py-3 pt-7  w-34 sm:w-58 appearance-none focus:outline-none rounded-lg text-white bg-transparent border-2 border-blue-500 peer" value={lastName} onChange={(event) => {
                                        setLastName(event.target.value.trim())
                                    }} />
                                    <label htmlFor="lastName" className={`absolute top-5 left-3 text-lg font-nunito font-semibold 
                        peer-focus-within:transform peer-focus-within:-translate-y-3 peer-focus-within:scale-75 peer-focus-within:-translate-x-3 transition ease-in-out duration-300 ${lastName.length > 0 ? 'transform -translate-y-3 scale-75 -translate-x-3' : ''}`}>Last Name</label>
                                </div>

                            </div>

                            <div className='relative'>
                                <input id="email" className="px-5 py-3 pt-7 w-72 sm:w-120 appearance-none focus:outline-none rounded-lg text-white border-2 border-blue-500 peer bg-transparent" value={email} onChange={(event) => {
                                    setEmail(event.target.value.trim())
                                }} />
                                <label htmlFor="email" className={`absolute text-white top-5 left-3 text-lg font-nunito font-semibold 
          peer-focus-within:transform peer-focus-within:-translate-y-3 peer-focus-within:scale-75 peer-focus-within:-translate-x-2 transition ease-in-out duration-300 ${email.length > 0 ? 'transform -translate-y-3 scale-75 -translate-x-2' : ''}`}>Email</label>
                            </div>

                            <div className='relative'>
                                <input id="password" className="px-5 py-3 pt-7 w-72 sm:w-120 appearance-none focus:outline-none rounded-lg text-white border-2 border-blue-500 bg-transparent peer" value={password} type='password' onChange={(event) => {
                                    setPassword(event.target.value.trim())
                                }} />
                                <label htmlFor="password" className={`absolute text-white top-5 left-3 text-lg font-nunito font-semibold 
          peer-focus-within:transform peer-focus-within:-translate-y-3 peer-focus-within:scale-75 peer-focus-within:-translate-x-3 transition ease-in-out duration-300 ${password.length > 0 ? 'transform -translate-y-3 scale-75 -translate-x-3' : ''}`}>Password</label>
                            </div>                            

                            <a href='/SignUp/Next' className='bg-smartblue py-2 px-4 rounded-lg text-xl text-white font-nunito font-semibold hover:bg-indigo-600'>Sign Up</a>
                            <h1 className='font-nunito font-semibold text-xl text-white'>Existing User ? <a href='/Login' className='text-white font-nunito font-semibold text-xl hover:text-smartblue cursor-pointer underline decoration-sky-500'>Login Here</a></h1>
                            <div>
                                <h1 className='text-center font-sora text-lg md:text-2xl'>&copy; Copyright 2022 MetaAid</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
}

export default Signup;
