import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
 const AuthProviders = ({children}) => {

    const [user,setUser] = useState(null)

    // password email create user
    const createUser = (email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    // log in
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // log out
    const logOut = ()=>{
        return signOut(auth)
     }
     
     useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
          console.log('state is  changed',currentUser)
          setUser(currentUser);
          })
          return () => {
              unSubscribe();
          };
      }, []);


    const userInfo = {
        user,
        createUser,
        signIn,
        logOut
    }



    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;