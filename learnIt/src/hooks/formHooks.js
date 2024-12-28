import { useState } from "react"


export function useForm (initValues, submitCallBack) {
const [values, setValues] = useState(initValues);

const changeStateHandler = (e) => {
setValues(state => ({
    ...state,
    [e.target.name]: e.target.value 
}))

}
const submitHandler = async (e) => {
    e.preventDefault();
    await submitCallBack(values);
    
    setValues(initValues)
}


return {
    values,
    changeStateHandler,
    submitHandler
}


}