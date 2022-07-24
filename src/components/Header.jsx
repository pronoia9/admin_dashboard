import React from 'react';

const Header = ({ category, title, subtitle }) => (
  <div id='header-component' className=' mb-10'>
    <div>
      <p className='text-lg text-gray-400'>{category}</p>
      <p className='text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900'>{title}</p>
    </div>
    <p className='text-center dark:text-gray-200 text-xl mb-2 mt-3'>{subtitle}</p>
  </div>
);

export default Header;