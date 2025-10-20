import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router';
import LoadingPage from './LoadingPage';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    console.log(loading, user);
    
    if(loading){
        return <LoadingPage></LoadingPage>
    }
    if(user && user.email){
        return children
    }
    else{
        return <Navigate to={'/auth/login'}></Navigate>
    }
};

export default PrivateRoute;