import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';



const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, []); // [] মানে একবারই fetch হবে



    // const categories = use(categoryPromise())

    return (
        <div className=' '>
            <h1 className='font-semibold text-primary text-[20px]'>All Categores ({categories.length}) </h1>
            <div className='grid grid-cols-1 gap-2 mt-4 justify-start'>
                {
                    categories.map(category => <NavLink
                        className={'btn bg-base-100 border-0 font-semibold text-accent  hover:bg-base-200'} key={category.id} to={`/category/${category.id}`}>

                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;