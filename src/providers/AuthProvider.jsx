import React, {  createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firbase/Firbase.config';


 export const AuthContext = createContext(null);

const auth =  getAuth(app);



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);


    // const logOut = () =>{
    //     // setLoading(true);
    //     return signOut(auth);
    // }

    const createUser = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        createUser,
        signIn
        
    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;