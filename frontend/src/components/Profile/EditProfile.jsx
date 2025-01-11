import React from 'react'
import { useForm } from '../../hooks/formHooks'
import { useNavigate } from 'react-router-dom'
import { useAddProfile } from '../../hooks/useProfile'

const initialValues = {
  name: "",
  years: "",
  aboutMe: "",
  subjects: "",
  motivation: "",
  imageUrl: ""
}


const FormProfile = () => {

  const navigate = useNavigate()
  const addProfile = useAddProfile();

  const addProfileHandler = async (values) => {

    try {
      await addProfile(values)
      navigate(`/`)

    } catch (err) {
      console.log(err)
    }


  }

  const {
    values,
    changeStateHandler,
    submitHandler
  } = useForm(initialValues, addProfileHandler)













  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-semibold text-gray-900 text-center font-serif">
          Добави данни
        </h1>
        <form onSubmit={submitHandler} className="space-y-4" >

          <div>
            <label className="block text-sm font-medium text-gray-700" >
              Име
            </label>
            <input
              id="name"
              type="name"
              name='name'
              value={values.name}
              onChange={changeStateHandler}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 sm:text-sm"

            />
            <label className="block text-sm font-medium text-gray-700" htmlFor="image">
              Снимка
            </label>
            <input
              id="imageUrl"
              type="imageUrl"
              name='imageUrl'
              value={values.imageUrl}
              onChange={changeStateHandler}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              placeholder='http://..'
            />
          </div>
          <div>

            <label className="block text-sm font-medium text-gray-700" >
              Опишете себе си
            </label>
            <input
              id="aboutMe"
              type="aboutMe"
              name='aboutMe'
              value={values.aboutMe}
              onChange={changeStateHandler}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 sm:text-sm"

            />
            
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" >
              Любим предмет
            </label>
            <input
              id="subjects"
              type="subjects"
              name='subjects'
              value={values.subjects}
              onChange={changeStateHandler}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 sm:text-sm"

            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Години
            </label>
            <input
              id="years"
              type="years"
              name='years'
              value={values.years}
              onChange={changeStateHandler}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 sm:text-sm"

            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Каква е мотивацията ми
            </label>
            <input
              id="motivation"
              type="motivation"
              name='motivation'
              value={values.motivation}
              onChange={changeStateHandler}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 sm:text-sm"

            />
          </div>
          {/* <div>
          <label className="block text-sm font-medium text-gray-700" >
            Клас
          </label>
          <select name="role" id="role" className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-2 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
            <option value='teacher' className="font-semibold text-slate-300">Учител</option>
            <option value='Profile' className="font-semibold text-slate-300">Ученик</option>
          </select>

        </div> */}

          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-amber-400 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 w-full"
          >
            Запази
          </button>
        </form>

      </div>
    </div>
  )
}

export default FormProfile
