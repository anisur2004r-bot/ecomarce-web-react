import React from 'react';
import cover from "../../../assets/Image/3.jpg"

const LatestExclusive = () => {
    return (
        <div>
            <div className='container mx-auto bg-cover h-[70vh] mt-7 rounded-md' style={{ backgroundImage: `url(${cover})` }}>
                <div className='flex flex-col gap-4 items-end justify-center text-right h-142 px-24'>
                    <p className='text-2xl font-semibold text-gray-700'>30% off sale</p>
                    <h2 className='text-5xl font-semibold text-gray-800'>Latest Exclusive <br /> Summer Collection</h2>
                    <button className='bcp px-5 py-2 text-white rounded-md cursor-pointer'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default LatestExclusive;