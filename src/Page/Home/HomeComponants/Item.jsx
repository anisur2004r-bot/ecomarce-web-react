import React from 'react';
import SectionHeading from '../../../Componant/SharedComponant/SectionHeading';
import UseData from '../../../Hooks/UseData';

const Item = () => {
    const { products } = UseData()
    return (
        <div>
            <div>
                <div className='flex container mx-auto'>
                    <SectionHeading title={"Trending"} colorTitle={"Items"}></SectionHeading>
                </div>
                <div className='flex items-center justify-between container mx-auto py-4'>
                    {
                        products
                            .sort((a, b) => b.rating - a.rating)
                            .slice(0, 4)
                            .map(p =>
                                <div className='flex items-center gap-4 border border-gray-400 w-93 py-2'>
                                    <img className='w-30' src={p.image} alt="" />
                                    <div className='flex flex-col gap-2'>
                                        <h4 className='font-semibold'>{p.name}</h4>
                                        <p className='ts'>{p.sku}</p>
                                        <div className='flex items-center gap-2'>
                                            <p>${p.price}</p>
                                            <p className='line-through ts'>${p.oldPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
            <div>
                <div className='flex container mx-auto'>
                    <SectionHeading title={"Top"} colorTitle={"Rated"}></SectionHeading>
                </div>
                <div className='flex items-center justify-between container mx-auto py-4'>
                    {
                        products
                            .sort((a, b) => b.rating - a.rating)
                            .slice(4, 8)
                            .map(p =>
                                <div className='flex items-center gap-4 border border-gray-400 w-93 py-2'>
                                    <img className='w-30' src={p.image} alt="" />
                                    <div className='flex flex-col gap-2'>
                                        <h4 className='font-semibold'>{p.name}</h4>
                                        <p className='ts'>{p.sku}</p>
                                        <div className='flex items-center gap-2'>
                                            <p>${p.price}</p>
                                            <p className='line-through ts'>${p.oldPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
            <div>
                <div className='flex container mx-auto'>
                    <SectionHeading title={"Top"} colorTitle={"Selling"}></SectionHeading>
                </div>
                <div className='flex items-center justify-between container mx-auto py-4'>
                    {
                        products
                            .sort((a, b) => b.rating - a.rating)
                            .slice(6, 10)
                            .map(p =>
                                <div className='flex items-center gap-4 border border-gray-400 w-93 py-2'>
                                    <img className='w-30' src={p.image} alt="" />
                                    <div className='flex flex-col gap-2'>
                                        <h4 className='font-semibold'>{p.name}</h4>
                                        <p className='ts'>{p.sku}</p>
                                        <div className='flex items-center gap-2'>
                                            <p>${p.price}</p>
                                            <p className='line-through ts'>${p.oldPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default Item;