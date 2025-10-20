import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, setUser } = use(AuthContext)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name.value);
        const name = e.target.name.value
        const photo = e.target.photoUrl.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log({ name, photo, email, password });

        createUser(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)

            }).catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                alert(errorCode, errorMessage)
            });

    }
    return (
        <div className='flex justify-center min-h-screen items-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h1 className='text-2xl pt-5 text-center font-semibold'>Register your account</h1>
                <form onSubmit={handleOnSubmit} className="card-body">
                    <fieldset className="fieldset ">
                        {/* name */}
                        <label className="label font-bold">Name</label>
                        <input
                            type="text"
                            name='name'
                            className="input border-0 bg-base-200"
                            placeholder="Name"
                            required />
                        {/* Photo Url */}
                        <label className="label font-bold">Photo Url</label>
                        <input
                            type="text"
                            name='photoUrl'
                            className="input border-0 bg-base-200"
                            placeholder="Photo Url"
                            required />
                        {/* email */}
                        <label className="label font-bold">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="input border-0 bg-base-200"
                            placeholder="Email"
                            required />
                        {/* password */}
                        <label className="label font-bold">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input border-0 bg-base-200" placeholder="Password"
                            required />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='text-center text-primary font-semibold py-5'>Already have an account ? <Link to={'/auth/login'} className='text-secondary'>Login</Link> </p>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default Register;