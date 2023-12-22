import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from './Firebase/Firebase.config'
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const authContext=createContext()
const auth =getAuth(app)

const provider =new GoogleAuthProvider()
const AuthContext = ({children}) => {
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login= (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googlesignIn=()=>{
        setLoading(true)
       return signInWithPopup(auth,provider)
    }
    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unsubscribe();
    },[])
    




    
    const info = {
        user,createUser,login,googlesignIn,logOut
    }
    return (
        <authContext.Provider value={info}>
        {children}
        </authContext.Provider>
    );
};

export default AuthContext;