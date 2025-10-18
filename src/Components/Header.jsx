import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';


const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
           <img width={'350px'} src={logo} alt="" />
           <p className='text-accent-content'>Journalism Without Fear or Favour</p>
           <p className=' text-accent-content flex gap-1 font-semibold'>
             <span className='font-semibold'>
                {format(new Date(), 'EEEE, ')}
            </span> 
            <p className='f'>
                {format(new Date(),' MMMM dd, yyyy')} </p>
            </p>
            
        </div>
    );
};

export default Header;