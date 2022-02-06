import React, { useState } from 'react';
import App from '../App';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <App cS="Login" />
            <div className='h-screen relative -mt-20 overflow-y-scroll'>
                <img alt="" src={process.env.PUBLIC_URL + '/bgHome.jpg'} className='w-full object-cover relative h-full block' />
                <div className='h-full w-full bg-gradient-to-r from-slate-900 absolute top-0 block'></div>
                <div className='absolute top-0 w-full h-screen flex flex-col justify-center items-center'>
                    <h1 className='font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-white text-center'>Login</h1>
                    <div className='mt-8 text-white flex flex-col items-center space-y-3'>
                        <div className='relative'>
                            <input id="email" className="px-5 py-3 pt-7 w-72 sm:w-120 appearance-none focus:outline-none rounded-lg text-white border-2 border-blue-500 peer bg-transparent" onChange={(event) => {
                                setEmail(event.target.value.trim())
                            }} />
                            <label htmlFor="email" className={`absolute text-white top-5 left-3 text-lg font-nunito font-semibold 
          peer-focus-within:transform peer-focus-within:-translate-y-3 peer-focus-within:scale-75 peer-focus-within:-translate-x-2 transition ease-in-out duration-300 ${email.length > 0 ? 'transform -translate-y-3 scale-75 -translate-x-2' : ''}`}>Email</label>
                        </div>
                        <div className='relative'>
                            <input id="password" className="px-5 py-3 pt-7 w-72 sm:w-120 appearance-none focus:outline-none rounded-lg text-white border-2 border-blue-500 bg-transparent peer" type='password' onChange={(event) => {
                                setPassword(event.target.value.trim())
                            }} />
                            <label htmlFor="password" className={`absolute text-white top-5 left-3 text-lg font-nunito font-semibold 
          peer-focus-within:transform peer-focus-within:-translate-y-3 peer-focus-within:scale-75 peer-focus-within:-translate-x-3 transition ease-in-out duration-300 ${password.length > 0 ? 'transform -translate-y-3 scale-75 -translate-x-3' : ''}`}>Password</label>
                        </div>
                        <a href='/Personal/Dashboard' className='bg-smartblue py-2 px-4 rounded-lg text-xl text-white font-nunito font-semibold hover:bg-indigo-600'>Login</a>
                        <a className='text-white font-nunito font-semibold text-xl hover:text-smartblue cursor-pointer'>Need Help Logging In?</a>
                        <h1 className='font-nunito font-semibold text-xl text-white'>New User ? <a href='/SignUp' className='text-white font-nunito font-semibold text-xl hover:text-smartblue cursor-pointer underline decoration-sky-500'>Sign Up Here</a></h1>
                        <div>
                            <h1 className='text-center font-sora text-lg md:text-2xl'>&copy; Copyright 2022 MetaAid</h1>
                        </div>
                    </div>
                </div>
            </div>           
        </>
    );
}

export default Login;
