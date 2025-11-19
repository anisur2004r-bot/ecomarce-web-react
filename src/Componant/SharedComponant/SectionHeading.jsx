import React from 'react';

const SectionHeading = ({title,colorTitle,description}) => {
    return (
        <div>
            <div>
                <h1 className='text-3xl font-semibold text-gray-700 '>{title} <span className='cp'>{colorTitle}</span> </h1>
                <p className='ts'>{description}</p>
            </div>
        </div>
    );
};

export default SectionHeading;