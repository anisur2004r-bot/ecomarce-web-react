import React from 'react';
import Button from '../Button';
import { Link, NavLink } from 'react-router';

const Navber = () => {
    return (
        <div className='border-b border-gray-300 sticky top-0'>
            <div className='flex items-center justify-between container mx-auto py-2'>
                <Button name={"All Category"} icon={"/src/assets/Image/menu (2).png"}></Button>
                <div className='flex gap-8 text-gray-800'>
                    <NavLink className={({ isActive }) => isActive ? `cp` : ``} to={"/"}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? `cp` : ``}  to={"/shopnow"}>Shop Now</NavLink>
                    <NavLink className={({ isActive }) => isActive ? `cp` : ``} to={"/about"}>About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? `cp` : ``} to={"/blog"}>Blog</NavLink>
                    <NavLink className={({ isActive }) => isActive ? `cp` : ``} to={"/contact"}>Contact</NavLink>
                </div>
                <Button name={"Shop Now"} icon={"/src/assets/Image/location (1).png"}></Button>
            </div>
        </div>
    );
};

export default Navber;