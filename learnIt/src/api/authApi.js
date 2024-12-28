import requester from "./requester";

const BASE_URL = 'http://localhost:3000/users';

export const login = async (email, password, accessToken) => {  
  
    const authData = await requester.post(`${BASE_URL}/login`, { email, password, accessToken});
 


    return authData;


}

export const register = async (email, password, accessToken) => {
    const authData = await requester.post(`${BASE_URL}/register`, {email, password, accessToken})
 
    return authData;
}

export const logout = () => requester.get(`${BASE_URL}/logout`)
