import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'



const PrivateGuard = () => {

    const { isAuthenticated } = useContext(AuthContext);

  

    return isAuthenticated 
    ? <Outlet/>
    : <Navigate to={'/login'}/>   
           
        
    
}
    
    


export default PrivateGuard
