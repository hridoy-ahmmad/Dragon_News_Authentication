import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/Firebase.config';


export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    console.log(user);

    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }


  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })
    return ()=>{
        unsubcribe()
    }
  },[])
    
    const authData = {
        user,
        setUser,
        logIn,
        createUser,
        logOut
    }

    return (
        <AuthContext value={authData}> {children} </AuthContext>
    );
};

export default AuthProvider;
