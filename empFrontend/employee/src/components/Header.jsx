import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-gray-900 text-white p-4 flex'>
      <h1 className='font-semibold text-lg'>Employee Management System</h1>
      <div className='space-x-5 ml-auto mr-3'>
        <NavLink
          to='/'
          className={({ isActive }) => {
            return isActive
              ? 'p-3 text-red-600 border-b-2 border-red-600'
              : 'p-3 border-b-2 border-gray-900 hover:border-yellow-400';
          }}
        >
          View
        </NavLink>
        <NavLink
          to='/add'
          className={({ isActive }) => {
            return isActive
              ? 'p-3 text-red-600 border-b-2 border-red-600'
              : 'p-3 border-b-2 border-gray-900 hover:border-yellow-400';
          }}
        >
          Add
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => {
            return isActive
              ? 'p-3 text-red-600 border-b-2 border-red-600'
              : 'p-3 border-b-2 border-gray-900 hover:border-yellow-400';
          }}
        >
          About
        </NavLink>
      </div>
    </div>
  );
}
