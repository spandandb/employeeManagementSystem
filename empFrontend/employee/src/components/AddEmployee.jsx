import React, { useState } from 'react';

export default function AddEmployee() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    hometown: '',
    mail: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  const handleReset = () => {
    setFormData({
      fname: '',
      lname: '',
      hometown: '',
      mail: ''
    });
  };

  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-col items-center m-10 border-2 border-gray-500 w-1/2 rounded-lg'>
        <h1 className='text-3xl font-bold m-5'>Add Employee</h1>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='flex flex-col w-full items-center'>
            <label htmlFor='fname'>First Name</label>
            <input
              type='text'
              placeholder='First Name here...'
              className='mb-5 p-2 bg-gray-200 rounded-md w-1/2'
              value={formData.fname}
              id='fname'
              name='fname'
              onChange={handleChange}
            />
            <label htmlFor='lname'>Last Name</label>
            <input
              type='text'
              placeholder='Last Name here...'
              value={formData.lname}
              className='mb-5 p-2  bg-gray-200 rounded-md w-1/2'
              id='lname'
              name='lname'
              onChange={handleChange}
            />
            <label htmlFor='home'>Home town</label>
            <input
              type='text'
              placeholder='State/City that the employee is from here...'
              value={formData.hometown}
              className='mb-5 p-2  bg-gray-200 rounded-md w-1/2'
              id='home'
              name='hometown'
              onChange={handleChange}
            />
            <label htmlFor='mail'>Email Address</label>
            <input
              type='text'
              placeholder='Email ID here...'
              value={formData.mail}
              className='mb-5 p-2  bg-gray-200 rounded-md w-1/2'
              id='mail'
              name='mail'
              onChange={handleChange}
            />
          </div>
          <div className='my-8 text-center'>
            <button
              type='submit'
              value='Submit'
              className='px-3 py-1 text-white bg-green-400 hover:bg-green-700 text-lg rounded-lg  mx-5'
            >
              Save
            </button>
            <button
              type='reset'
              value='Reset'
              className='px-3 py-1 text-white hover:bg-red-800 bg-red-500  text-lg rounded-lg '
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
