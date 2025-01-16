export const getAccessToken = () => {
    const authJSON = localStorage.getItem('token');
    //auth
    if (!authJSON) {
        return ''
    }

    const authData = JSON.parse(authJSON);

    return authData?.accessToken; 
    
}