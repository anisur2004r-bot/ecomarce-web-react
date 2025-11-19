import React from 'react';
import { CiSearch } from 'react-icons/ci';

const MidHeader = () => {
    return (
        <div className='border-b border-gray-300'>
            <div className='flex items-center justify-between container mx-auto py-4'>
                <div>
                    <h2 className='text-4xl font-semibold'>ANI<span className='cp'>SUR</span></h2>
                </div>
                <div className='flex items-center gap-100 border px-5 py-4 rounded-md border-gray-300'>
                    <input className='outline-none' type="text" placeholder='Search Products...' />
                    <CiSearch />
                </div>
                <div className='flex  items-center gap-5'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src="/src/assets/Image/people.png" alt="" />
                        <div>
                            <p className='ts'>Accout</p>
                            <p>Login</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src="/src/assets/Image/heart.png" alt="" />
                        <div>
                            <p className='ts'>Wishlist</p>
                            <p>3-Item</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src="/src/assets/Image/market.png" alt="" />
                        <div>
                            <p className='ts'>Cart</p>
                            <p>3-Item</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidHeader;