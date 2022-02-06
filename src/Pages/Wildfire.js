import React from 'react';
import App from '../App';

function Wildfire() {
    return (
        <>
            <App current="Prepare" cS="Wildfire" />
            <div className='h-screen relative -top-20 '>
                <img alt="" src={process.env.PUBLIC_URL + '/bgWildFires.jpg'} className='w-full object-cover relative h-full block' />
                <div className='h-full w-full bg-gradient-to-r from-slate-900 absolute top-0 block'></div>
                <div className="absolute top-0 flex flex-col justify-center mx-5 lg:mx-28 h-full space-y-6 font-semibold font-sora ">
                    <h1 className='text-2xl sm:text-3xl md:text-6xl text-smartblue'>Wild Fire</h1>
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
                        A wildfire is an accidental fire that breaks out in a natural setting. These dangerous fires spread swiftly and can wreak havoc. They also result in a decrease in air quality, as well as the loss of property, crops, resources, animals, and people. Wildfires also have an impact on weather and climate. Air pollution as a result can cause a variety of health problems
                    </p>
                    <ul role="list" className="marker:text-sky-400 list-disc pl-5 text-sm sm:text-xl md:text-2xl space-y-3 text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-semibold">
                        <li><span className='font-semibold underline decoration-smartblue'>Preparing for a Wildfires:</span> Make sure that everyone in your household is aware of what to do in the event of a sudden evacuation. Stock up on food, drink, and medicine ahead of time. Create and maintain a defensible space of 100 feet around your home. Plan to stay connected since the most vital information during a wildfire will come from your local government. </li>
                        <li><span className='font-semibold underline decoration-smartblue'>Staying Safe during a Wildfires:</span> It is critical for everyone to reduce their exposure to smoke when wildfires provide smoky conditions. It might make it difficult to breathe and cause coughing or wheezing. Install a portable air cleaner or a filter to keep the air in a room clean. If officials instruct you to evacuate, do so right away. </li>
                        <li><span className='font-semibold underline decoration-smartblue'>Staying Safe After a Wildfires:</span> Return home only when the authorities indicate it's safe to do so. Take actions to decrease your smoking exposure. Smoke can linger in the air for days after a wildfire has been extinguished. If you need assistance, try to reach out to as many individuals as possible.</li>
                    </ul>
                </div>
                <div className='space-y-10 mt-10 pb-16'>
                    <h1 className='font-sora text-4xl md:text-7xl text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24' id="long-read">Long Read</h1>
                    <p className='text-sm sm:text-xl md:text-2xl text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-nunito'>
                        A wildfire is an accidental fire that breaks out in a natural setting such as a forest, grassland, or prairie. Wildfires can occur at any time or in any location, and they are frequently caused by human activity or natural phenomena such as lightning. These dangerous fires spread swiftly and can wreak havoc on people as well as wildfires and natural regions. The cause of the majority of the wildfires documented is unknown. Extremely dry conditions, such as drought, and high winds enhance the risk of wildfires. Transportation, communications, power and gas services, and water supply can all be disrupted by wildfires. They also result in a decrease in air quality, as well as the loss of property, crops, resources, animals, and people. By releasing significant amounts of carbon dioxide, carbon monoxide, and fine particulate matter into the atmosphere, wildfires also have an impact on weather and climate. Air pollution as a result can cause a variety of health problems, including respiratory and cardiovascular disorders. Wildfires also have a substantial impact on mental health and psychological well-being.
                    </p>
                    <ul role="list" className="marker:text-sky-400 list-disc pl-5 text-sm sm:text-xl md:text-2xl space-y-3 text-slate-900 mx-5 sm:mx-10 md:mx-16 lg:mx-24 font-semibold">
                        <li>
                            <span className='font-semibold text-smartblue underline decoration-smartblue'>Preparing for a Wildfires:</span> Ascertain that everyone in your household is aware of and understands what to do in the event of a sudden evacuation. Because stores and pharmacies may be closed, stock up on food, drink, and medicine ahead of time. Make a list of everything you'll need. Create and maintain a defensible space of 100 feet around your home. Use fire-resistant or noncombustible materials on the roof and outside structure of your home to help contain fire rather than fuel it, and design and landscape your home with wildfire safety in mind. Plan to Stay Connected since the most vital information during a wildfire will come from your local government. Authorities will notify you when it is safe for you to depart.
                        </li>
                        <li>
                            <span className='font-semibold text-smartblue underline decoration-smartblue'>Staying Safe during a Wildfires:</span> It is critical for everyone to reduce their exposure to smoke when wildfires provide smoky conditions. Smoke from wildfires irritates the eyes, nose, throat, and lungs. It might make it difficult to breathe and cause coughing or wheezing. Smoke from wildfires should be avoided by children, pregnant women, and anyone with asthma, chronic obstructive pulmonary disease, or heart disease. Install a portable air cleaner or a filter to keep the air in a room clean, even if the rest of the building and the outside air are smoky. To collect tiny particles from smoking, use high-efficiency filters in your central air conditioning system. For information and directions, pay attention to emergency warnings and notifications. If officials instruct you to evacuate, do so right away.
                        </li>
                        <li>
                            <span className='font-semibold text-smartblue underline decoration-smartblue'>Staying Safe After a Wildfires:</span> Return home only when the authorities indicate it's safe to do so. Take actions to decrease your smoking exposure. Smoke can linger in the air for days after a wildfire has been extinguished. When cleaning up, wear a mask to protect yourself from ash. Protect your skin by wearing gloves, long-sleeved shirts, long pants, and shoes and socks. Protect your eyes by wearing goggles. Limit your exposure by wearing a respirator and breathing moist debris to avoid inhaling dust particles. If you need assistance, try to reach out to as many individuals as possible.
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

export default Wildfire;
