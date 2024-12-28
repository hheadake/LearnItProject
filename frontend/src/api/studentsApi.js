import * as request from './requester'

const BASE_URL = 'http://localhost:3030/data/students'

 const getAll = async () => {
    
    
    
    const result = await request.get(BASE_URL);
    const students = Object.values(result);
    return students;



}

const getOne =  (studentId) =>  request.get(`${BASE_URL}/${studentId}`)

const create = (studentData) => request.post(`${BASE_URL}`, studentData)

const remove = (studentId) => request.del(`${BASE_URL}/${studentId}`) 

const update = (studentId, studentData) => request.put(`${BASE_URL}/${studentId}`, studentData)

const studentAPI = {
    remove,
    getAll,
    getOne,
    create,
    update,
}

export default studentAPI;