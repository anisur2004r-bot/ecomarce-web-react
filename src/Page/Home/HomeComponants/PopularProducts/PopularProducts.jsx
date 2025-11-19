import React, { useState } from 'react';
import SectionHeading from '../../../../Componant/SharedComponant/SectionHeading';
import UseData from '../../../../Hooks/UseData';
import ProductCard from '../../../../Componant/SharedComponant/ProductCard';
import Button from '../../../../Componant/SharedComponant/Button';
import { Link } from 'react-router';

const PopularProducts = () => {
    const { category, products } = UseData()
    const [categoryId, setCategoryId] = useState()
    const handleCategoryId = (id) => {
        setCategoryId(id)
    }
    const filterCategory = categoryId ? products.filter(p => p.categoryid == categoryId) : products
    return (
        <div>
            <div className='flex items-center justify-between container mx-auto py-4'>
                <SectionHeading title={"Day Of The"} colorTitle={"Deal"} description={"Don't wat The time never be just right"}></SectionHeading>
                <div className='flex gap-10 font-semibold text-gray-700'>
                    {
                        category.map(category =>
                            <div>
                                <p className='cursor-pointer' onClick={() => handleCategoryId(category?.id)}>{category?.name}</p>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className='grid grid-cols-5 container mx-auto gap-6'>
                {
                    filterCategory
                        .sort((a, b) => b.rating - a.rating)
                        .slice(0, 10)
                        .map(product => <ProductCard product={product}></ProductCard>)
                }
            </div>
            <div className='flex items-center justify-center py-3'>
                <Link to={"/shopnow"}><Button name={"All Products"} icon={"/src/assets/Image/menu (2).png"}></Button></Link>
            </div>
        </div>
    );
};

export default PopularProducts;