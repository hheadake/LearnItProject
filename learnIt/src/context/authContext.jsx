import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { logout } from "../api/authApi";


export const AuthContext = createContext({
    email: '',
    userID: '',
    accessToken: '',
    role: '',
    name: '',
    familyName: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
    logout: () => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('auth', {})
    const changeAuthState = (state) => {

        localStorage.setItem('accessToken', state.accessToken)
        setAuthState(state)

    };

    const logout = () => {
        setAuthState(null)
    }

    const contextData = {
        email: authState?.email,
        role: authState?.select,
        name: authState?.name,
        familyName: authState?.familyName,
        userID: authState?._id,
        accessToken: authState?.accessToken,
        changeAuthState,
        isAuthenticated: !!authState?.email,
        logout,

    }


    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )




}