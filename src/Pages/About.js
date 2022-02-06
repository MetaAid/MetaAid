import React, { useState } from 'react';
import App from '../App';

function About() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  return (
    <>
      <App/>
      <div className='p-2 pb-24 text-white'>

        <div className='my-32'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-sora mb-10 text-center text-slate-900 dark:text-white'>Our Team</h1>

          <div className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>

            <div className='bg-gradient-to-r from-blue-600 to-orange-600 h-104 w-76 rounded-lg relative mx-auto md:ml-auto md:mr-0'>
              <div className='bg-white dark:bg-slate-900 text-slate-900 dark:text-white h-100 w-75 rounded-lg absolute top-1 left-1 flex flex-col justify-between divide-y divide-slate-900'>
                <div>
                  <div className='flex justify-center'>
                    <img src={process.env.PUBLIC_URL + '/avatar_ajay.jpg'} className='rounded-full w-24 object-contain my-6' />
                  </div>
                  <div className='p-1 h-38'>
                    <h1 className='font-sora text-2xl font-semibold text-center'>Ajay Pal Singh</h1>
                    <h1 className='font-sora text-md font-semibold text-center'>Software Development Engineer</h1>
                    <p className='text-center'>Love To Code , Always on the look for new technologies. Enjoy Nature.</p>
                  </div>
                </div>
                <p className='text-center pb-7 pt-4'><i className="fas fa-quote-left mx-2"></i>Practice Like You Have Never Won,<br></br>
                  Perform Like You Have Never Lost<i className="fas fa-quote-right mx-2"></i></p>
              </div>
            </div>

            <div className='bg-gradient-to-r from-red-500 to-cyan-400 h-104 w-76 rounded-lg relative mx-auto md:mr-auto md:ml-0'>
              <div className='bg-white dark:bg-slate-900 text-slate-900 dark:text-white h-100 w-75 rounded-lg absolute top-1 left-1 flex flex-col justify-between divide-y divide-slate-900'>
                <div>
                  <div className='flex justify-center'>
                    <img src={process.env.PUBLIC_URL + '/avatar_ajay.jpg'} className='rounded-full w-24 object-contain my-6' />
                  </div>
                  <div className='p-1 h-38'>
                    <h1 className='font-sora text-2xl font-semibold text-center'>Siddhant Pradhan</h1>
                    <h1 className='font-sora text-md font-semibold text-center'>Cheif Designer</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sagittis justo, eget sodales leo. Ut justo tortor, egestas vitae sollicitudin eget, consequat eget nulla</p>
                  </div>
                </div>
                <p className='text-center pb-7 pt-4'><i className="fas fa-quote-left mx-2"></i>Lorem ipsum dolor sit amet,,<br></br>
                  consectetur adipiscing elit<i className="fas fa-quote-right mx-2"></i></p>
              </div>
            </div> 



            <div className='bg-gradient-to-r from-sky-500 to-yellow-400 h-104 w-76 rounded-lg relative mx-auto md:ml-auto md:mr-0'>
              <div className='bg-white dark:bg-slate-900 text-slate-900 dark:text-white h-100 w-75 rounded-lg absolute top-1 left-1 flex flex-col justify-between divide-y divide-slate-900'>
                <div>
                  <div className='flex justify-center'>
                    <img src={process.env.PUBLIC_URL + '/avatar_ajay.jpg'} className='rounded-full w-24 object-contain my-6' />
                  </div>
                  <div className='p-1 h-38'>
                    <h1 className='font-sora text-2xl font-semibold text-center'>Lowell Monis</h1>
                    <h1 className='font-sora text-md font-semibold text-center'>Graphic Designer</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sagittis justo, eget sodales leo. Ut justo tortor, egestas vitae sollicitudin eget, consequat eget nulla</p>
                  </div>
                </div>
                <p className='text-center pb-7 pt-4'><i className="fas fa-quote-left mx-2"></i>Lorem ipsum dolor sit amet,,<br></br>
                  consectetur adipiscing elit<i className="fas fa-quote-right mx-2"></i></p>
              </div>
            </div>

            <div className='bg-gradient-to-r from-violet-700 to-pink-500 h-104 w-76 rounded-lg relative mx-auto md:mr-auto md:ml-0'>
              <div className='bg-white dark:bg-slate-900 text-slate-900 dark:text-white h-100 w-75 rounded-lg absolute top-1 left-1 flex flex-col justify-between divide-y divide-slate-900'>
                <div>
                  <div className='flex justify-center'>
                    <img src={process.env.PUBLIC_URL + '/avatar_ajay.jpg'} className='rounded-full w-24 object-contain my-6' />
                  </div>
                  <div className='p-1 h-38'>
                    <h1 className='font-sora text-2xl font-semibold text-center'>Apoorva Sharma</h1>
                    <h1 className='font-sora text-md font-semibold text-center'>Designer</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sagittis justo, eget sodales leo. Ut justo tortor, egestas vitae sollicitudin eget, consequat eget nulla</p>
                  </div>
                </div>
                <p className='text-center pb-7 pt-4'><i className="fas fa-quote-left mx-2"></i>Lorem ipsum dolor sit amet,,<br></br>
                  consectetur adipiscing elit<i className="fas fa-quote-right mx-2"></i></p>
              </div>
            </div>
          </div>
        </div>


        <div className='my-32'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-sora mb-10 text-slate-900 dark:text-white text-center'>Technologies We Use</h1>
          <div className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            <img src={process.env.PUBLIC_URL + '/tailwindcss.png'} className='object-contain w-60 mx-auto md:ml-auto md:mr-0' />
            <img src={process.env.PUBLIC_URL + '/express.png'} className='object-contain w-60 mx-auto md:mr-auto md:ml-0' />
            <img src={process.env.PUBLIC_URL + '/react.png'} className='object-contain w-60 mx-auto md:ml-auto md:mr-0' />
            <img src={process.env.PUBLIC_URL + '/mongodb.png'} className='object-contain w-60 mx-auto md:mr-auto md:ml-0' />
          </div>
        </div>

        <h1 className='text-4xl sm:text-5xl md:text-6xl font-sora mb-10 text-slate-900 dark:text-white text-center'>Contact Us</h1>
        <div className='flex flex-col items-center'>
          <div className='relative'>
            <input id="email" className="px-5 py-3 pt-7 w-72 sm:w-96  appearance-none focus:outline-none rounded-lg text-slate-900 dark:text-white dark:bg-slate-900 border-2 border-blue-500 peer" onChange={(event) => {
              setEmail(event.target.value.trim())
            }} />
            <label htmlFor="email" className={`absolute top-5 left-3 text-slate-900 dark:text-white text-lg font-nunito font-semibold 
          peer-focus-within:transform peer-focus-within:-translate-y-3 peer-focus-within:scale-75 peer-focus-within:-translate-x-2 transition ease-in-out duration-300 ${email.length > 0 ? 'transform -translate-y-3 scale-75 -translate-x-2' : ''}`}>Email</label>
          </div>

          <div className='relative mt-5'>
            <input id="phoneNo" className="px-5 py-3 pt-7 w-72 sm:w-96 appearance-none focus:outline-none rounded-lg text-slate-900 dark:text-white dark:bg-slate-900 border-2 border-blue-500 peer" onChange={(event) => {
              setPhone(event.target.value.trim())
            }} />
            <label htmlFor="phoneNo" className={`absolute top-5 left-3 text-slate-900 dark:text-white text-lg font-nunito font-semibold 
          peer-focus-within:transform peer-focus-within:-translate-y-3 peer-focus-within:scale-75 peer-focus-within:-translate-x-4 transition ease-in-out duration-300 ${phone.length > 0 ? 'transform -translate-y-3 scale-75 -translate-x-4' : ''}`}>Phone Number</label>
          </div>

          <div className='relative mt-5'>
            <textarea id="message" className="px-5 py-3 pt-7 w-72 h-72 text-slate-900 dark:text-white sm:w-96 sm:h-48 appearance-none focus:outline-none rounded-lg dark:bg-slate-900 border-2 border-blue-500 peer resize-none" onChange={(event) => {
              setMessage(event.target.value.trim())
            }} maxLength={'230'}></textarea>
            <label htmlFor="message" className={`absolute top-5 left-3 text-slate-900 dark:text-white text-lg font-nunito font-semibold 
          peer-focus-within:transform peer-focus-within:-translate-y-3 peer-focus-within:scale-75 peer-focus-within:-translate-x-2 transition ease-in-out duration-300 ${message.length > 0 ? 'transform -translate-y-3 scale-75 -translate-x-2' : ''}`}>Message</label>
          </div>
          <button className='bg-smartblue font-bold font-nunito text-xl mt-5 px-4 py-2 rounded-xl hover:bg-indigo-600'>Submit</button>
        </div>
      </div>
    </>
  );
}

export default About;
