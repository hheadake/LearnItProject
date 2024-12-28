import testAPI from "../api/testApi";
import { useEffect, useState } from "react";


export function useAddTest() {
    

    //const addTestHandler = (test, accessToken) => testAPI.createTest(test, accessToken);

    const addTestHandler = (test) => testAPI.createTest(test);
    return addTestHandler;
    
   }



export function useGetOneTest (testId) {
    const [test, setTest] = useState({});

    useEffect(() => {
        (async () => {
        const result = await testAPI.getOne(testId)
        setTest(result)
        })();
    }, [testId]);
    

    return [test, setTest]
}