import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router';

const NewsDetailCard = ({ news }) => {
    const { title, thumbnail_url, details } = news


    const nevigate = useNavigate()
    const handleBack = () => {
        nevigate(-1)
    }

    return (

        <div>
            <h2 className='font-bold py-2 text-primary'>Dragon News</h2>
            <div className=" bg-white rounded-lg shadow-md p-4 border border-gray-200">
                {/* Thumbnail */}
                <img
                    src={thumbnail_url}
                    alt="News Thumbnail"
                    className="w-full  object-cover rounded-md mb-4"
                />

                {/* Title */}
                <h2 className="text-xl font-bold leading-snug mb-2">
                    {
                        title
                    }
                </h2>

                {/* Date & Tag */}

                {/* Description */}
                <p className="text-primary text-sm leading-7 mb-4">
                    {
                        details
                    }
                </p>

                {/* Button */}
                <button onClick={handleBack} className="flex items-center gap-2 text-white bg-rose-600 px-4 py-2 rounded-md font-semibold hover:bg-rose-700 transition">
                    <BsArrowLeft size={18} />
                    All news in this category
                </button>
            </div>
        </div>
    );
};

export default NewsDetailCard;