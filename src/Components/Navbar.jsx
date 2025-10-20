import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import navImg from '../assets/user.png'
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = use(AuthContext)
    // console.log(user);
    const handleSignOut = () => {
        logOut()
        .then(() => {
            alert('If you sure to log out, click okay')
        }).catch((err) => {
            alert(err)
        });
    }

    return (
        <div className='flex  justify-between py-6 items-center'>
            <div> <p>user: {user && user.email} </p>  </div>
            <div className="nav flex gap-5 text-accent-content">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='flex gap-2 '>
                <img src={navImg} alt="" />
                {
                    user ? <Link onClick={handleSignOut}  className='rounded-0 text-base-100 bg-primary px-6 btn'>Log Out</Link> : <Link to={'/auth/login'} className='rounded-0 text-base-100 bg-primary px-6 btn'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;