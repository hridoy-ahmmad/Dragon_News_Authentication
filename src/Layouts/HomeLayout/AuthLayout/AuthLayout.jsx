import React from 'react';
import Navbar from '../../../Components/Navbar';
import Header from '../../../Components/Header';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (

        <div className='bg-base-200 min-h-screen'>
            <div className='max-w-[1140px] mx-auto '>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;