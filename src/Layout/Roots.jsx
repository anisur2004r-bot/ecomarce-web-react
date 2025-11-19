import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Componant/SharedComponant/Header/Header';
import Footer from '../Componant/SharedComponant/Footer';

const Roots = () => {
    return (
        <div className='bg-white text-black'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;