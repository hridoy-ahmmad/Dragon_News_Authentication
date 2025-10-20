import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import RightAside from '../Components/home/RightAside/RightAside';
import NewsDetailCard from './NewsDetailCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const newsDatum = useLoaderData()
    const { id } = useParams()
    const [news, setNews] = useState({})
    console.log(id, newsDatum, news);

    useEffect(() => {
        const newsDatainfo = newsDatum.find(newsData => newsData.id == id);
        setNews(newsDatainfo)
    }, [id, newsDatum])

    return (
        <div className='max-w-[1140px] mx-auto'>
            <header>
                <Header></Header>
            </header>
            <nav className=''>
                <Navbar></Navbar>
            </nav>
            <main className='grid grid-cols-12 gap-5'>
                <section className=' col-span-9'>
                    <NewsDetailCard news={news} ></NewsDetailCard>
                </section>
                <aside className=' col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;