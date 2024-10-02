import React, { createContext, userState, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [user, setUser] = useState({nome:'Herberton'})

    return(
        <AuthContext.Provider>
            value={{user}}
            {children}
        </AuthContext.Provider>
            
        
    )
    
}

export default AuthProvider