import React, { createContext, useEffect, useState } from 'react'
import {getAuth, onAuthStateChanged, signInWithPopup} from "firebase/auth"
import app from "../../firebase/firebase";


export const AuthContext = createContext(); 
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const providerLogin = (provider) =>{
        return signInWithPopup(auth,provider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUSer) => {
            console.log('user inside state change',currentUSer);
            setUser(currentUSer)
        });
        return() =>{
            unsubscribe();
        }
    },[])
    const authInfo = {user,providerLogin}

    

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
