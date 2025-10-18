import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header';
import LatestNews from '../../Components/LatestNews';
import Navbar from '../../Components/Navbar';
import LeftAside from '../../Components/home/LeftAside';
import RightAside from '../../Components/home/RightAside/RightAside';
import Home from '../../Pages/Home';

const HomeLayout = () => {
    return (
        <div className='max-w-[1140px] mx-auto'>
            <header className=''>
                <Header></Header>
            </header>
            <section className=''>
                <LatestNews></LatestNews>
            </section>
            <Navbar></Navbar>
            <main className='grid grid-cols-12 gap-5'>
                <aside className='left-side-bar col-span-3 sticky top-0 self-start  bg-white '>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3 sticky top-0 z-50 self-start bg-white '>
                    <RightAside></RightAside>
                </aside>


            </main>
        </div>
    );
};

export default HomeLayout;