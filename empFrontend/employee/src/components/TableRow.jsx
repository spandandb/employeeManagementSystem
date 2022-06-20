import React from 'react';

export default function TableRow(props) {
  return (
    <tr className='hover:bg-slate-200'>
      <td className='p-2 border border-1 border-gray-500'>{props.id}</td>
      <td className='p-2 border border-1 border-gray-500'>{props.fname}</td>
      <td className='p-2 border border-1 border-gray-500'>{props.lname}</td>
      <td className='p-2 border border-1 border-gray-500'>{props.homeTown}</td>
      <td className='p-2 border border-1 border-gray-500'>{props.mail}</td>
    </tr>
  );
}
