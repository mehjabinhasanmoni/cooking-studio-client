import React, {  createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firbase/Firbase.config';


 export const AuthContext = createContext(null);

const auth =  getAuth(app);



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);


    // const logOut = () =>{
    //     // setLoading(true);
    //     return signOut(auth);
    // }


    const authInfo = {
        user,
        
    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;