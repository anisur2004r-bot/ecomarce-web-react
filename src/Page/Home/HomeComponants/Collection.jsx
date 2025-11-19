import React from 'react';
import img1 from "../../../assets/Image/12.jpg"
import img2 from "../../../assets/Image/13.jpg"
import img3 from "../../../assets/Image/14.jpg"

const Collection = () => {
    return (
        <div>
            <div className='flex items-center justify-between container mx-auto py-4'>
                <div className=' overflow-hidden'>
                    <div className='w-120 h-70 bg-cover hover:scale-105 duration-200' style={{ backgroundImage: `url(${img1})` }}>
                    <p className='bg-white w-17 px-1 text-gray-500'>70% Off</p>
                    <div className='flex flex-col items-end justify-center text-end h-64 gap-3 px-7'>
                        <h2 className='text-4xl font-semibold text-white'>Women's <br /> Collection</h2>
                        <button className='bcp px-5 py-2 text-white rounded-md cursor-pointer'>Shop Now</button>
                    </div>
                </div>
                </div>
                <div className=' overflow-hidden'>
                    <div className='w-120 h-70 bg-cover hover:scale-105 duration-200' style={{ backgroundImage: `url(${img2})` }}>
                        <p className='bg-white w-17 px-1 text-gray-500'>60% Off</p>
                        <div className=' flex flex-col items-end justify-center text-end h-64 gap-3 px-7'>
                            <h2 className='text-4xl font-semibold text-white'>Kid's <br /> Collection</h2>
                            <button className='bcp px-5 py-2 text-white rounded-md cursor-pointer'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className=' overflow-hidden'>
                    <div className='w-120 h-70 bg-cover hover:scale-105 duration-200' style={{ backgroundImage: `url(${img3})` }}>
                        <p className='bg-white w-17 px-1 text-gray-500'>50% Off</p>
                        <div className='flex flex-col items-end justify-center text-end h-64 gap-3 px-7'>
                            <h2 className='text-4xl font-semibold text-white'>Men's <br /> Collection</h2>
                            <button className='bcp px-5 py-2 text-white rounded-md cursor-pointer'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;