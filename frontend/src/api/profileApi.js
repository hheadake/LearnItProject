const BASE_URL = 'http://localhost:3000/profile'
import * as request from './requester'

const createProfile = (profileData) => request.post(`${BASE_URL}/create`, profileData)

const getOne = (profileId) => request.get(`${BASE_URL}/${profileId}`)


const profileAPI = {
   createProfile,
    getOne,
}

export default profileAPI;