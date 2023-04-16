import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()
 const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

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

    //  sign in with google
    const signInWithGoogle = ()=>{
      return  signInWithPopup(auth,googleProvider)
    }

     // update profile
     const updateTheUserProfile = () =>{
        return updateProfile(user,{
            displayName:user.displayName
        })
     }

     useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
          console.log('state is  changed',currentUser)
          setUser(currentUser);
          setLoading(false);
          })
          return () => {
              unSubscribe();
          };
      }, []);


    const userInfo = {
        user,
        createUser,
        updateTheUserProfile,
        signIn,
        signInWithGoogle,
        logOut,
        loading
    }



    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;