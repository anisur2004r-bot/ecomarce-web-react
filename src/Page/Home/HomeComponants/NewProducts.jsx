import React from 'react';
import SectionHeading from '../../../Componant/SharedComponant/SectionHeading';
import UseData from '../../../Hooks/UseData';
import ProductCard from '../../../Componant/SharedComponant/ProductCard';

const NewProducts = () => {
    const { products } = UseData()
    return (
        <div className='container mx-auto py-10'>
            <div>
                <SectionHeading title={"Day Of The"} colorTitle={"Deal"} description={"Don't waill. The time will never be just right."}></SectionHeading>
            </div>
            <div>
                <div className='grid grid-cols-5 gap-5 mt-8'>
                    {
                        products.slice(-5).map(p => <ProductCard product={p}></ProductCard> )
                    }
                </div>
            </div>
        </div>
    );
};

export default NewProducts;