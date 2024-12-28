import { useState, useEffect } from "react";
import studentAPI from '../api/studentsApi'



export function useGetAllstudents() {

    const [students, setStudent] = useState([]);

    useEffect(() => {
      (async () => {
        const result = await studentAPI.getAll();
        setStudent(result);
      })();
    }, []);


return [students, setStudent]



}

export function useGetOnestudent (studentId) {
    const [student, setStudent] = useState({});

    useEffect(() => {
        (async () => {
        const result = await studentAPI.getOne(studentId)
        setStudent(result)
        })();
    }, [studentId]);
    

    return [student, setStudent]
}


export function useAddStudent() {

 const addStudentHandler = (studentData) => studentAPI.create(studentData);

 return addStudentHandler;
 
}