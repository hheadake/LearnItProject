
import { login, register, logout } from "../api/authApi"
import { AuthContext, useAuthContext } from "../context/authContext.jsx"
import { useNavigate } from "react-router-dom"





export const useLogin = () => {
    const { changeAuthState } = useAuthContext()
    const loginHandler = async (email, password) => {
        try {
            const result = await login(email, password)
            changeAuthState(result);
            console.log(result)
        } catch (error) {
            console.log(error)
        }


    }


    return loginHandler


}

export const useRegister = () => {
    const { changeAuthState } = useAuthContext()
    const registerHandler = async (email, password) => {
        const result = await register(email, password)
        changeAuthState(result);
        return result
    }

    return registerHandler;

}

export const useLogout = () => {
    

    const { logout: localLogout } = useAuthContext()

    const logoutHandler = async () => {
         await logout();
         localLogout();
         
        
      
    }

    return logoutHandler;

}