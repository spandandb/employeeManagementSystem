import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';
import { BiRefresh } from 'react-icons/bi';

export default function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const url = 'http://localhost:8080/api/v1/employees';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, [refresh]);

  const toggleRefresh = () => setRefresh(!refresh);
  console.log(refresh);
  return (
    <div>
      <div className='flex justify-center'>
        <h2 className='text-3xl font-bold text-center m-5'>Employees List</h2>
        <div className=' flex items-center'>
          <BiRefresh
            size={30}
            className='text-blue-600 cursor-pointer hover:text-red-600'
            onClick={toggleRefresh}
            title='refresh'
          />
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <table className='text-center table table-fixed border-collapse'>
          <thead className='bg-gray-800 text-white'>
            <tr>
              <th className='p-2 border border-1 border-gray-500'>EID</th>
              <th className='p-2 border border-1 border-gray-500'>
                First Name
              </th>
              <th className='p-2 border border-1 border-gray-500'>Last Name</th>
              <th className='p-2 border border-1 border-gray-500'>Hometown</th>
              <th className='p-2 border border-1 border-gray-500'>Email ID</th>
              <th className='p-2 border border-1 border-gray-500'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <TableRow
                key={employee.id}
                id={employee.id}
                fname={employee.firstName}
                lname={employee.lastName}
                homeTown={employee.homeTown}
                mail={employee.emailId}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
