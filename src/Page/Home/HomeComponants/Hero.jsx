import React from 'react';
import bg from "../../../assets/Image/10.jpg"

const Hero = () => {
    return (
        <div>
            <div style={{backgroundImage: `url(${bg})`}} className='container mx-auto bg-cover h-[70vh] mt-7 rounded-md'>
                <div className='flex flex-col gap-8 px-24 items-start justify-center h-142'>
                    <h3 className='cp text-xl font-semibold'>70% Off For This Winter</h3>
                    <h1 className='text-5xl font-semibold text-gray-700'>Bigest Sale For Winter <br />Man & Woman</h1>
                    <button className='bcp px-6 py-2 rounded-md text-white'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;