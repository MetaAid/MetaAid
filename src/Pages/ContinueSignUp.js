import React,{useState} from 'react';

function ContinueSignUp() {
    const [country, setCountry] = useState('India');
    const [city, setCity] = useState('');
    const [accType, setAccType] = useState('Personal');

    function RenderSelectCity() {
        if (country === "India") {
            return (
                <select name="city" id="city" className='text-slate-900 mx-4 px-3 text-lg rounded-md outline-none' onChange={(e) => {
                    setCity(e.target.value)
                }}>
                    <option value="Delhi">Delhi</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Kolkata">Kolkata</option>
                </select>
            )
        } else if (country === "United States") {
            return (
                <select name="city" id="city" className='text-slate-900 mx-4 px-3 text-lg rounded-md outline-none' onChange={(e) => {
                    setCity(e.target.value)
                }} >
                    <option value="Austin">Austin</option>
                    <option value="United States">San Francisco</option>
                    <option value="New York">New York</option>
                    <option value="Seattle">Seattle</option>
                </select>
            )
        } else if (country === "Germany") {
            return (
                <select name="city" id="city" className= 'text-slate-900 mx-4 px-3 text-lg rounded-md outline-none' onChange={(e) => {
                    setCity(e.target.value)
                }}>
                    <option value="Berlin">Berlin</option>
                    <option value="Munich">Munich</option>
                    <option value="Hamburg">Hamburg</option>
                    <option value="Frankfurt">Frankfurt</option>
                </select>
            )
        } else {
            return (
                <select name="city" id="city" className='text-slate-900 mx-4 px-3 text-lg rounded-md outline-none' onChange={(e) => {
                    setCity(e.target.value)
                }}>
                    <option value="London">London</option>
                    <option value="Manchester">Manchester</option>
                    <option value="Birmingham">Birmingham</option>
                    <option value="Liverpool">Liverpool</option>
                </select>
            )
        }
    }

    return (
        <>
            <div className='h-screen flex flex-col justify-center m-5 space-y-2'>
                <h1 className='font-sora font-bold text-5xl text-smartblue'>Continue Sign Up</h1>
                <div className='text-2xl space-y-5'>
                    <div className='font-nunito font-semibold  flex space-x-3'>
                        <h1>Username:</h1>
                        <h1>User1</h1>
                    </div>
                    <div className='font-nunito font-semibold flex space-x-3'>
                        <h1>Email:</h1>
                        <h1>user1@example.com</h1>
                    </div>
                    <div className='relative font-semibold font-nunito'>
                        <label for="accType">Choose Account Type:</label>
                        <select name="accType" id="accType" className='text-slate-900 mx-4 px-3 rounded-md outline-none' onChange={(e) => {
                            setAccType(e.target.value)
                        }}>
                            <option value="Personal">Personal</option>
                            <option value="Community">Community</option>
                        </select>
                    </div>

                    <div className='relative font-semibold font-nunito'>
                        <label for="country">Choose Country:</label>
                        <select name="country" id="country" className='text-slate-900 mx-4 px-3 rounded-md outline-none' onChange={(e) => {
                            setCountry(e.target.value)
                        }}>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="Germany">Germany</option>
                            <option value="UK">United Kingdom</option>
                        </select>
                    </div>

                    <div className='relative font-semibold font-nunito'>
                        <label for="city">Choose City:</label>
                        <RenderSelectCity />
                    </div>

                    <div className='relative font-semibold font-nunito space-x-5'>
                        <label for="profile">Choose A Profile Picture:</label>
                        <input type="file" id="profile" name="profile" accept="image/png, image/jpeg" className='text-lg file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:text-slate-900
                                    hover:file:bg-sky-600'></input>
                    </div>
                </div>
                <a href='/Personal/Dashboard' className='px-4 py-2 bg-smartblue text-center text-white hover:bg-sky-500 w-48 rounded-lg'>Finish Sign Up</a>
            </div>
        </>
    );
}

export default ContinueSignUp;
