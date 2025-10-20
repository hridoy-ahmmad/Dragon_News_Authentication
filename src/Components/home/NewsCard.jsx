import React, { use } from 'react';
import { CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar, FaRegBookmark } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import LoadingPage from '../../Pages/LoadingPage';

const NewsCard = ({ newNews }) => {
    const { title, author, image_url, details, rating, total_view, id } = newNews;
    const {loading} = use(AuthContext)

    if(loading){
        return <LoadingPage></LoadingPage>
    }

    return (
        <div className="card  card-compact bg-white shadow-lg rounded-lg border border-gray-200 relative">
            {/* Top-right icons */}
            <div className=''>


                <div className="card-body bg-base-200 p-4 flex relative ">
                    {/* Author Info */}
                    <div className="flex items-center  gap-3 ">
                        <img
                            src={author.img}
                            alt={author.name}
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p className="text-sm font-semibold">{author.name}</p>
                            <p className="text-xs text-gray-500">
                                {new Date(author.published_date).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                    <div className=" flex gap-2 text-gray-500 absolute right-3 top-6">
                        <FaRegBookmark size={18} className="hover:text-blue-500 transition" />
                        <CiShare2 size={24} className="hover:text-blue-500 transition" />

                    </div>
                </div>

                {/* Title */}
                <h2 className="card-title text-lg p-4 font-bold">{title}</h2>

                {/* Image */}
                <figure className=''>
                    <img
                        src={image_url}
                        alt={title}
                        className="w-full h-56 object-cover p-4 rounded-5xl "
                    />
                </figure>

                {/* Details */}
                <div className=''>
                    <p
                        className={'text-gray-700 text-sm mt-1 px-4 line-clamp-3 leading-7 h-full'}
                    >
                        {details}
                    </p>

                </div>

                {/* Read More / Read Less Button */}
                {
                    <div className=" text-left text-secondary font-semibold    text-sm  bg-transparent m-5 inline-block">
                        <Link to={`/newsDetails/${id}`}  >
                            Read More
                        </Link>
                    </div>

                }

                <hr className="my-3 mx-4 border-gray-200" />


                {/* Tags */}
                {/* <div className="flex flex-wrap gap-2 mt-2 p-4">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="badge badge-outline badge-sm text-gray-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div> */}

                {/* Rating and Views */}
                <div className="flex items-center justify-between p-4 mt-4">
                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span className="text-sm font-medium">{rating.number}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                        <FaEye />
                        <span className="text-sm">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
