import React from 'react';
import App from '../App';


function Floods() {
    return (
        <>
            <App current="Prepare" cS="Floods" />
            <div className='h-screen relative -top-20 '>
                <img alt="" src={process.env.PUBLIC_URL + '/bgFlood.jpg'} className='w-full object-cover relative h-full block' />
                <div className='h-full w-full bg-gradient-to-r from-slate-900 absolute top-0 block'></div>
                <div className="absolute top-0 flex flex-col justify-center mx-5 lg:mx-28 h-full space-y-6 font-semibold font-sora ">
                    <h1 className='text-2xl sm:text-3xl md:text-6xl text-smartblue'>Floods</h1>
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
                    <h1 className='font-sora text-4xl md:text-7xl text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 '>Short Read</h1>
                    <p className='text-sm sm:text-xl md:text-2xl text-slate-900  mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-nunito'>
                        Floods can occur when strong rains fall, ocean waves crash on the shore etc. Floods can happen in a matter of minutes or over a lengthy period of time. Flooding can have a drastic impact on communities and public infrastructure. Flash floods are the most dangerous type of flood. Floods are a common natural disaster worldwide.
                    </p>
                    <ul role="list" className="marker:text-sky-400 list-disc pl-5 text-sm sm:text-xl md:text-2xl space-y-3 text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-semibold">
                        <li><span className='font-semibold underline decoration-smartblue'>Preparing for a Flood:</span> Even if you've never seen flooding near your home, you could be at risk. Make a flood plan. A waterproof plastic container or a heavy-duty water-resistant bag should be used to store an emergency kit. Purchasing a flood insurance can help a lot.</li>
                        <li><span className='font-semibold underline decoration-smartblue'>Staying Safe During a Flood:</span> If a flood threatens your home or property, you should move to a safer location. If you're trapped in a building, get to the uppermost floor. To avoid being trapped by rising floodwater, do not ascend into a closed attic. </li>
                        <li><span className='font-semibold underline decoration-smartblue'>Staying Safe After a Flood:</span> Households and communities can be severely harmed and disrupted by floods. Essential services may be unavailable. There are a variety of support services available including emergency aid, lodging, food, and water. It's very normal to have psychological and emotional distress during an emergency situation.</li>
                    </ul>
                </div>
                <div className='space-y-10 mt-10 pb-16' id='long-read'>
                    <h1 className='font-sora text-4xl md:text-7xl text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 '>Long Read</h1>
                    <p className='text-sm sm:text-xl md:text-2xl text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-nunito'>
                        Flooding is the result of a brief overflow of water onto typically dry ground. Floods can occur when strong rains fall, ocean waves crash on the shore, snow melts quickly, or dams or levees fail. In many parts of the world, floods are a common natural disaster. Floods can happen in a matter of minutes or over a lengthy period of time, lasting days, weeks, or even months. Floods may wreak havoc on communities, causing death and damage to personal property as well as important public health infrastructure. Because flash floods combine the destructive power of a flood with extraordinary speed, they are the most dangerous type of flood. When severe rainfall exceeds the ground's ability to absorb it, flash floods occur. They can happen within minutes of the causative rainfall, limiting the time available to warn and protect the public.
                    </p>
                    <ul role="list" className="marker:text-sky-400 list-disc pl-5 text-sm sm:text-xl md:text-2xl space-y-3 text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-semibold">
                        <li>
                            <span className='font-semibold text-smartblue underline decoration-smartblue'>Preparing for a Flood: </span>It doesn’t have to be raining in your area for a flood to affect you. Even if you've never seen flooding near your home, you could be at risk. Make a flood plan and ensure that everyone in your household is aware of what to do in the event of floods. A waterproof plastic container or a heavy-duty water-resistant bag should be used to store an emergency kit. After a flood, you may be without power, water, and other necessary services for several days. Purchasing or renewing a flood insurance coverage can go a long way toward covering the costs of the damage.
                        </li>
                        <li>
                            <span className='font-semibold text-smartblue underline decoration-smartblue'>Staying Safe During a Flood:</span> Floodwaters are extremely dangerous and can put your property and neighborhood in jeopardy. While floodwater can take time to reach you, flash flooding hits swiftly and can catch you off guard. If a flood threatens your home or property, you should move to a safer location as soon as possible. It is extremely perilous to leave at the last minute because your planned route may be obstructed by fast flowing water. If you're trapped in a building, get to the uppermost floor. Only go up on the roof if it's absolutely essential, and once there, call for aid. To avoid being trapped by rising floodwater, do not ascend into a closed attic.
                        </li>
                        <li>
                            <span className='font-semibold text-smartblue underline decoration-smartblue'>Staying Safe After a Flood:</span> Households and communities can be severely harmed and disrupted by floods. Recovery can be challenging, and you may find it emotionally and mentally draining. Electricity, water, gas, and other utilities may be unavailable. There may also be road closures and communication outages. There are a variety of support services available if your home has been damaged, including emergency aid, lodging, food, and water. It's very normal to have psychological and emotional distress during an emergency situation.
                        </li>
                    </ul>
                </div>
                <div className='bg-white p-4 text-center text-xl font-nunito font-semibold text-slate-900 '>
                    <h1>&copy; Copyright 2022 MetaAid</h1>
                </div>
            </div>
        </>
    );
}

export default Floods;
