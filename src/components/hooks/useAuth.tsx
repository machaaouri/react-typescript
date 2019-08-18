import * as React from "react";
import { useState, useEffect, useRef } from "react";


export const Auth = () => {

    const auth = useAuth();
    const inputRef = useRef<HTMLInputElement>();

    return <div>
        {!auth.user ?
            <>
                <input type="text" ref={inputRef}/>
                <button onClick={() => auth.signin(inputRef.current.value)}>Sign in</button>
            </>
        :
           <>
                <label>{auth.user}</label>
                <button onClick={() => auth.signout()}>Sign out</button>
           </>
        }
    </div>
}

type AuthObject = {
    user: string | null,
    signin : (user: string) => void,
    signout : () => void
}
const useAuth = () : AuthObject => {

     const [user, setUser] = useState(null);

     const signin =  (userName: string) => {
        console.log("sign in");
         if (userName) setUser(userName)
     }

     const signout = () => {
         console.log("sign out");
         setUser(null);
     }    

    // Return the user object and auth methods
    return {
        user,
        signin,
        signout,
    };
}