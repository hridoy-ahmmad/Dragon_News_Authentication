import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-6 bg-base-200 p-4 lg:mt-7'>
            <p className='bg-secondary text-base-100 px-6 py-3 font-medium'>Latest</p>
            
                <Marquee className='flex gap-6 py-4' pauseOnHover={true} speed={80}>
                    <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, beatae quam repellat alias temporibus molestias voluptatibus</p>
                    <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, beatae quam repellat alias temporibus molestias voluptatibus</p>
                </Marquee>

            
        </div>
    );
};

export default LatestNews;