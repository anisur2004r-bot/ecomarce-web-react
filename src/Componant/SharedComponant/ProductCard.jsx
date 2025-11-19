import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
    return (
        <div>
            <div className='flex flex-col gap-3  border border-gray-200 rounded-md shadow-md overflow-hidden'>
                <Link to={`/shopnow/${product.id}`}>
                    <img className='w-80 rounded-md hover:scale-110 duration-200 ' src={product.image} alt="" />
                    <div className='flex flex-col gap-2 h-40 px-4 mt-3 '>

                        <p className='ts'>{product.stock}</p>
                        <h3 className='text-xl font-semibold text-gray-600 cursor-pointer'>{product.name}</h3>
                        <div className='flex gap-1 text-yellow-500'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                        <div className='flex gap-4 '>
                            <p className='text-xl font-bold text-gray-700'>${product.price}</p>
                            <p className='line-through text-gray-500'>${product.oldPrice}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;