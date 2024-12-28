import { useContext } from "react"
import { login, register, logout } from "../api/authApi"
import { AuthContext } from "../context/authContext.jsx"
import { useNavigate } from "react-router-dom"





export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext)
    const loginHandler = async (email, password) => {
        try {
            const result = await login(email, password)
            changeAuthState(result);
        } catch (error) {
            console.log(error)
        }


    }


    return loginHandler


}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext)

    const registerHandler = async (email, password) => {
        const result = await register(email, password)
        changeAuthState(result);
        return result
    }

    return registerHandler;

}

export const useLogout = () => {
    

    const { logout: localLogout } = useContext(AuthContext)

    const logoutHandler = async () => {
         await logout();
         localLogout();
         
        
      
    }

    return logoutHandler;

}