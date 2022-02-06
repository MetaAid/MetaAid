import React from 'react';
import App from '../App';

function Lightning() {
    return (
        <>
            <App current="Prepare" cS="Lightning" />
            <div className='h-screen relative -top-20 '>
                <img alt="" src={process.env.PUBLIC_URL + '/bgLightning.jpg'} className='w-full object-cover relative h-full block' />
                <div className='h-full w-full bg-gradient-to-r from-slate-900 absolute top-0 block'></div>
                <div className="absolute top-0 flex flex-col justify-center mx-5 lg:mx-28 h-full space-y-6 font-semibold font-sora ">
                    <h1 className='text-2xl sm:text-3xl md:text-6xl text-smartblue'>Lightning</h1>
                    <p className='text-sm sm:text-xl md:text-2xl text-white'>
                    </p>
                    <div className='flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 text-center'>
                        <a href='#short-read' className='transition ease-in-out w-48 duration-300 bg-smartblue font-nunito font-semibold text-white md:px-6 md:py-3 rounded-lg hover:bg-orange-600 xsm:px-4 xsm:py-2 px-2 py-1 cursor-pointer'>Short Read</a>
                        <a href='#long-read' className='transition ease-in-out w-48 duration-300 bg-smartblue font-nunito font-semibold text-white md:px-6 md:py-3 rounded-lg hover:bg-orange-600 xsm:px-4 xsm:py-2 px-2 py-1 cursor-pointer'>Long Read</a>
                    </div>
                </div>
            </div>
            <div className='space-y-9'>
                <div className='space-y-10 mt-10 mb-24' id="short-read">
                    <h1 className='font-sora text-4xl md:text-7xl text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24'>Short Read</h1>
                    <p className='text-sm sm:text-xl md:text-2xl text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-nunito'>
                        Lightning is a giant spark of electricity in the atmosphere between clouds, the air, or the ground. Lightning can occur between opposite charges within the thunderstorm cloud or between opposite charges in the cloud and on the ground. Lightning is one of the oldest observed natural phenomena on earth.
                    </p>
                    <ul role="list" className="marker:text-sky-400 list-disc pl-5 text-sm sm:text-xl md:text-2xl space-y-3 text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-semibold">
                        <li><span className='font-semibold underline decoration-smartblue'>Risks of Lightning Strikes:</span> Although lightning strikes are uncommon, they do occur, and the danger of serious injury or death is high.</li>
                        <li><span className='font-semibold underline decoration-smartblue'>Safety Precautions Outdoors:</span> Locate a secure, enclosed location. Homes, businesses, retail malls, and hard-top vehicles with the windows rolled up serve as safe havens. If you hear thunder before 30 minutes, go inside. After the last thunderclap, put all activity on hold for at least 30 minutes. If you're caught out in the open, move immediately to find a safe place to hide. </li>
                        <li><span className='font-semibold underline decoration-smartblue'>Safety Precautions Indoors:</span> Stay away from water during a thunderstorm. During a thunderstorm, do not bathe, shower, wash dishes, or encounter water in any way. Avoid utilizing any form of electrical equipment. Stay away from concrete floors and walls. Any metal wires or bars in concrete walls or flooring might conduct lightning.</li>
                    </ul>
                </div>
                <div className='space-y-10 mt-10 pb-16'>
                    <h1 className='font-sora text-4xl md:text-7xl text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24' id='long-read'>Long Read</h1>
                    <p className='text-sm sm:text-xl md:text-2xl text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-nunito'>
                        Lightning is a giant spark of electricity in the atmosphere between clouds, the air, or the ground. In the early stages of development, air acts as an insulator between the positive and negative charges in the cloud and between the cloud and the ground. When the opposite charges build up enough, this insulating capacity of the air breaks down and there is a rapid discharge of electricity that we know as lightning. The flash of lightning temporarily equalizes the charged regions in the atmosphere until the opposite charges build up again. Lightning can occur between opposite charges within the thunderstorm cloud (intra-cloud lightning) or between opposite charges in the cloud and on the ground (cloud-to-ground lightning). Lightning is one of the oldest observed natural phenomena on earth. It can be seen in volcanic eruptions, extremely intense forest fires, surface nuclear detonations, heavy snowstorms, in large hurricanes, and obviously, thunderstorms.
                    </p>
                    <ul role="list" className="marker:text-sky-400 list-disc pl-5 text-sm sm:text-xl md:text-2xl space-y-3 text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-semibold">
                        <li>
                            <span className='font-semibold text-smartblue underline decoration-smartblue'>Risks of Lightning Strikes:</span> Although the chances of being hit by lightning are fewer than one in a million in any given year, certain conditions can put you at increased danger. People who work outside or participate in outdoor recreational activities are the most likely to be struck by lightning. Your chance of being struck by lightning can also be influenced by regional and seasonal variances. Although lightning strikes are uncommon, they do occur, and the danger of serious injury or death is high.
                        </li>
                        <li>
                            <span className='font-semibold text-smartblue underline decoration-smartblue'>Safety Precautions Outdoors:</span> Keep in mind that when thunderclaps, you should go inside. Locate a secure, enclosed location. Homes, businesses, retail malls, and hard-top vehicles with the windows rolled up serve as safe havens. Remember the 30-30 rule. Begin counting to 30 whenever you see lightning. If you hear thunder before 30 minutes, go inside. After the last thunderclap, put all activity on hold for at least 30 minutes. If you're caught out in the open, move immediately to find a safe place to hide. The most important thing you can do is get out of harm's way. Crouching or getting low to the ground can lessen your risk of being struck, but it does not make you safe
                        </li>
                        <li>
                            <span className='font-semibold text-smartblue underline decoration-smartblue'>Safety Precautions Indoors:</span> Being indoors does not guarantee that you will be safe from lightning. In fact, roughly a third of lightning-related injuries happen inside. Stay away from water during a thunderstorm. During a thunderstorm, do not bathe, shower, wash dishes, or encounter water in any way. Lightning can move through pipes. Avoid utilizing any form of electrical equipment. Electrical systems, as well as radio and television reception systems, can be struck by lightning. Stay away from concrete floors and walls. During a thunderstorm, avoid lying on concrete floors. Any metal wires or bars in concrete walls or flooring might conduct lightning.
                        </li>
                    </ul>
                </div>
                <div className='bg-white p-4 text-center text-xl font-nunito font-semibold text-slate-900'>
                    <h1>&copy; Copyright 2022 MetaAid</h1>
                </div>
            </div>
        </>
    )
}

export default Lightning;
