import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/home/NewsCard';

const CategoryNews = () => {
    const { id } = useParams()
    const newsData = useLoaderData()
    const parseId = parseInt(id)
    const [news, setNews] = useState([])
   
    // console.log(id,);
    useEffect(() => {
       
          
            if (parseId === 0) {
                setNews(newsData)
                return;
            } else if (parseId === 1) {
                const isToday = newsData.filter(news => news.others.is_today_pick == true)
                setNews(isToday)
                return
            } else {
                const filteredData = newsData.filter(news => news.category_id == parseId)
                console.log(filteredData);
                setNews(filteredData)
            }
        
       
    }, [newsData, parseId])

    return (
        <div>
            <h1> {news.length} news Found   </h1>
            <div>
                {
                    news.map((newNews) => <NewsCard  newNews={newNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;