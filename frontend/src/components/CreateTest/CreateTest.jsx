import React from 'react';

import { useForm } from '../../hooks/formHooks';
import { useNavigate } from 'react-router-dom';
import { useAddTest } from '../../hooks/useTest';



const CreateTest = () => {
  const addTest = useAddTest();
  const navigate = useNavigate();




  const initialValues = {
    questionText: '',
    correctAnswer: '',
    wrongAnswer: '',

  };

  const submitCallBack = async (values) => {
    const data = {
      questionText: values.questionText,
      correctAnswer: values.correctAnswer,
      wrongAnswer: values.wrongAnswer,
    }

    try {
       
      await addTest(data);
      navigate('/');
    } catch (err) {
      console.log('Error while creating the test:', err);
    }



  }


  const {
    values,
    changeStateHandler,
    submitHandler,
  } = useForm(initialValues, submitCallBack);

  return (
    <div className="bg-blue-200 min-h-screen flex items-center">

      <div className="w-full">

        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={submitHandler}>

            <div className="mb-20">
              <label
                htmlFor="questionTitle"
                className="center mb-2 font-bold text-gray-600"
              >
                Задай въпрос
              </label>
              <input
                type="text"
                id="questionText"
                name="questionText"
                value={values.questionText}
                onChange={changeStateHandler}
                className="border border-gray-300 shadow p-3 w-full rounded mb-"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="option1"
                className="block mb-2 font-bold text-gray-600"
              >
                Верен отговор
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="option"
                  name="correctAnswer"
                  value={values.correctAnswer}
                  onChange={changeStateHandler}
                  placeholder="Отговор 1"
                  className="border border-gray-300 shadow p-3 w-full rounded mr-4"
                />
                
                <label htmlFor="correct1" className="ml-2 text-gray-600">

                </label>
              </div>
            </div>
            
            <div className="mb-5">
              <label
                htmlFor="option2"
                className="block mb-2 font-bold text-gray-600"
                >
                Грешен отговор
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="option2"
                  value={values.wrongAnswer}
                  onChange={changeStateHandler}
                  name="wrongAnswer"
                  placeholder="Отговор 2"
                  className="border border-gray-300 shadow p-3 w-full rounded mr-4"
                  />
               
                <label htmlFor="correct2" className="ml-2 text-gray-600">
                
                </label>
              </div>
            </div>

            <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default CreateTest;
