import React from 'react';

const Button = ({icon,name}) => {
    return (
        <div className='flex items-center gap-4 bcp w-60 cursor-pointer justify-center py-4 rounded-md text-white'>
            <img className='w-5 ' src={icon} alt="" />
            <p>{name} <select name="" id=""></select></p>
        </div>
    );
};

export default Button;