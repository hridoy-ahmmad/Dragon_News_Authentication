import React from 'react';
import { NavLink } from 'react-router';
import navImg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex  justify-between py-6 items-center'>
            <div></div>
            <div className="nav flex gap-5 text-accent-content">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='flex gap-2 '>
                <img src={navImg} alt="" />
                <button className=' rounded-0 text-base-100 bg-primary px-6'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;