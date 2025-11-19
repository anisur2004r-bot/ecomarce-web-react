import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { PiPhoneCallBold } from 'react-icons/pi';

const TopHeader = () => {
    return (
        <div className='bg-[#F6F6F9] ts'>
            <div className='flex items-center justify-between container mx-auto py-3'>
                <div className='flex gap-6'>
                    <div className='flex items-center gap-1'>
                        <PiPhoneCallBold />
                        <p>+8801914106079</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaWhatsapp />
                        <p>+8801914106079</p>
                    </div>
                </div>
                <div>
                    <p>would's Fastest Online Shopping Destination</p>
                </div>
                <ul className='flex gap-4'>
                    <li>Help?</li>
                    <li>Track Order?</li>
                    <li>English<select name="" id=""></select></li>
                    <li>Dollar<select name="" id=""></select></li>
                </ul>
            </div>
        </div>
    );
};

export default TopHeader;