import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/Firebase.config';


export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    console.log(user);

    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleProvider = new GoogleAuthProvider()
    const loginWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)

    }

    const logOut = ()=>{
        return signOut(auth)
    }


  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
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
        logOut,
        loginWithGoogle,
        loading,
        setLoading
    }

    return (
        <AuthContext value={authData}> {children} </AuthContext>
    );
};

export default AuthProvider;
