import React from 'react';

const Support = () => {
    const features = [ 
        {
            title: "Free Shipping",
            description: "Free shipping on all US order or order above $200",
            image: "https://i.ibb.co.com/6VBS3Lx/delivery-truck.png"
        },
        {
            title: "24x7 Support",
            description: "Contact us 24 hours a day, 7 days a week",
            image: "https://i.ibb.co.com/6Jg1W4Rz/maintenance.png"
        },
        {
            title: "30 Days Return",
            description: "Simply return it within 30 days for an exchange",
            image: "https://i.ibb.co.com/93kr0tpn/stopwatch.png"
        },
        {
            title: "Payment Secure",
            description: "Contact us 24 hours a day, 7 days a week",
            image: "https://i.ibb.co.com/5W9GktFB/hand.png"
        }
    ];

    return (
        <div>
            <div className='flex items-center justify-between container mx-auto py-10'>
                {
                    features.map(item => (
                        <div className='border border-gray-300 py-3'>
                            <div className='flex flex-col items-center justify-center gap-4'>
                                <img className='w-18' src={item.image} alt="" />
                                <p className='text-xl font-semibold text-gray-800'>{item.title}</p>
                                <p className='text-center w-80 text-gray-600'>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Support;