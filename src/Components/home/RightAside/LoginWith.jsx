import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const LoginWith = () => {
 const {loginWithGoogle,setUser} = use(AuthContext)

 const handleLogin = (e) =>{
    e.preventDefault()
    loginWithGoogle()
    .then((result) => {
        setUser(result.user)
        alert('Successfully logged in')
    }).catch((err) => {
        
    });
 }

    return (
        <div>
            <h1 className='font-bold'>Login With</h1>
            <div className='flex flex-col gap-2 mt-5'>
                <Link onClick={handleLogin} className='btn btn-outline btn-secondary'> <FcGoogle /> Login With Google </Link>
                <button className='btn btn-outline btn-primary'> <FaGithub /> Login With Github </button>
            </div>
        </div>
    );
};

export default LoginWith;