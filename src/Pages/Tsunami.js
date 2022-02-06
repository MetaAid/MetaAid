import React from 'react';
import App from '../App';

function Tsunami() {
    return (
        <>
            <App current="Prepare" cS="Tsunami" />
            <div className='h-screen relative -top-20 '>
                <img alt="" src={process.env.PUBLIC_URL + '/bgTsunami.jpg'} className='w-full object-cover relative h-full block' />
                <div className='h-full w-full bg-gradient-to-r from-slate-900 absolute top-0 block'></div>
                <div className="absolute top-0 flex flex-col justify-center mx-5 lg:mx-28 h-full space-y-6 font-semibold font-sora ">
                    <h1 className='text-2xl sm:text-3xl md:text-6xl text-smartblue'>Tsunami</h1>
                    <p className='text-sm sm:text-xl md:text-2xl text-white'>
                    </p>
                    <div className='flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 text-center'>
                        <a href='#short-read' className='transition ease-in-out w-48 duration-300 bg-smartblue font-nunito font-semibold text-white md:px-6 md:py-3 rounded-lg hover:bg-orange-600 xsm:px-4 xsm:py-2 px-2 py-1 cursor-pointer'>Short Read</a>
                        <a href='#long-read' className='transition ease-in-out w-48 duration-300 bg-smartblue font-nunito font-semibold text-white md:px-6 md:py-3 rounded-lg hover:bg-orange-600 xsm:px-4 xsm:py-2 px-2 py-1 cursor-pointer'>Long Read</a>
                    </div>
                </div>
            </div>
            <div className='space-y-9'>
                <div className='space-y-10 mt-10 mb-24'>
                    <h1 className='font-sora text-4xl md:text-7xl text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24' id="short-read">Short Read</h1>
                    <p className='text-sm sm:text-xl md:text-2xl text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-nunito'>
                        A tsunami is a sequence of ocean waves that cause water to surge onto land, reaching heights of over 100 feet in some cases. When the ocean floor at a plate boundary suddenly rises or dips, it displaces the water above it, causing rolling waves to form, which eventually produce a tsunami.
                    </p>
                    <ul role="list" className="marker:text-sky-400 list-disc pl-5 text-sm sm:text-xl md:text-2xl space-y-3 text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-semibold">
                        <li><span className='underline decoration-sky-400'>Preparing for a Tsunami:</span> Learn about the tsunami risk in your area if you live near or frequently visit a coastal area. Learn to recognize the warning indications of a potential tsunami.</li>
                        <li><span className='underline decoration-sky-400'>Staying Safe during Tsunami:</span> If you're in a tsunami zone and there's an earthquake, you should first prepare for the earthquake. If you are outside of the tsunami hazard zone and hear a tsunami warning, stay still until officials say otherwise. If you're told to leave, leave immediately.</li>
                        <li><span className='underline decoration-sky-400'>Staying Safe after a Tsunami:</span> For advice on areas to avoid and shelter locations, listen to local advisories and authorities. Floodwaters might include harmful debris, so avoid wading across them.</li>
                    </ul>
                </div>
                <div className='space-y-10 mt-10 pb-16'>
                    <h1 className='font-sora text-4xl md:text-7xl text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24' id='long-read'>Long Read</h1>
                    <p className='text-sm sm:text-xl md:text-2xl text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-nunito'>
                        A tsunami is a sequence of ocean waves that cause water to surge onto land, reaching heights of over 100 feet in some cases. When these water walls crash onshore, they can cause tremendous devastation. Large undersea earthquakes at tectonic plate borders are usually the source of these waves. When the ocean floor at a plate boundary suddenly rises or dips, it displaces the water above it, causing rolling waves to form, which eventually produce a tsunami. Underwater landslides and volcanic explosions can potentially create tsunamis. Tsunami waves in the deep ocean may only be a foot or so high. As they go closer to the beach and into shallower water, however, they slow down and begin to gain energy and height.
                    </p>
                    <ul role="list" className="marker:text-sky-400 list-disc pl-5 text-sm sm:text-xl md:text-2xl space-y-3 text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-semibold">
                        <li>
                            <span className='font-semibold text-smartblue underline decoration-smartblue'>Preparing for a Tsunami:</span> Learn about the tsunami risk in your area if you live near or frequently visit a coastal area. Maps with evacuation zones and routes are available in some at-risk localities. Learn to recognize the warning indications of a potential tsunami, such as an earthquake, a loud roar from the sea, or strange ocean behavior, such as a quick rise or wall of water, or a sudden draining of water revealing the ocean floor. Make an out-of-state contact for your emergency communication strategy.
                        </li>
                        <li>
                            <span className='font-semibold text-smartblue underline decoration-smartblue'>Staying Safe during Tsunami:</span> If you're in a tsunami zone and there's an earthquake, you should first prepare for the earthquake. If there are natural signals or official tsunami warnings, move to a high and far inland location as soon as the shaking stops. If you are outside of the tsunami hazard zone and hear a tsunami warning, stay still until officials say otherwise. If you're told to leave, leave immediately.
                        </li>
                        <li>
                            <span className='font-semibold text-smartblue underline decoration-smartblue'>Staying Safe after a Tsunami:</span> For advice on areas to avoid and shelter locations, listen to local advisories and authorities. Floodwaters might include harmful debris, so avoid wading across them. It's possible that the water is deeper than it appears. Stay away from buildings, roads, and bridges that have been damaged.
                        </li>
                    </ul>
                </div>
                <div className='bg-white p-4 text-center text-xl font-nunito font-semibold text-slate-900'>
                    <h1>&copy; Copyright 2022 MetaAid</h1>
                </div>
            </div>
        </>
    );
}

export default Tsunami;
