import { createContext, useContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { logout } from "../api/authApi";


export const AuthContext = createContext({
    userID: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
    //logout: () => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState({})
    const changeAuthState = (state) => {

        localStorage.setItem('accessToken', state.accessToken)

        setAuthState(state)
        

    };

    const logout = () => {
        setAuthState(null)
    }

    const contextData = {
        userID: authState._id,
        //email: authState?.email,
        accessToken: authState.accessToken,
        changeAuthState, 
        //isAuthenticated: !!authState.email,
        logout,

    }


    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )





}

export function useAuthContext () {
        
    const authData = useContext(AuthContext);
    return authData;
}