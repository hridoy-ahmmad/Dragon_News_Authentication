import React, { use, useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { logIn } = use(AuthContext)



    const handleLogin = (e) => {
        e.preventDefault()
        // console.log('abcderfg');
        const email = e.target.email.value
        const password = e.target.password.value

        logIn(email, password)
            .then((result) => {
                const user = result.user
                console.log(user);
            }).catch((err) => {

            });

    }

    return (
        <div className='flex justify-center min-h-screen items-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h1 className='text-2xl pt-5 text-center font-semibold'>Login to your account</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset ">
                        <label className="label font-bold">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="input border-0 bg-base-200"
                            placeholder="Email" />
                        <label className="label font-bold">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input border-0 bg-base-200" placeholder="Password" />
                        <div className='py-2'><a className="link link-hover font-bold ">Forgot password?</a></div>
                        <button
                            type='submit'
                            className="btn btn-neutral mt-4">Login</button>
                        <p className='text-center text-primary font-semibold py-5'>Dont’t Have An Account ? <Link to={'/auth/register'} className='text-secondary'>Register</Link> </p>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default Login;