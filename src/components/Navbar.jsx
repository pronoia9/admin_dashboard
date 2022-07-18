import React, { useEffect } from 'react';
import { useStateContext } from '../context/ContextProvider';

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
      <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>{/*  */}</div>
    </div>
  );
};

export default Navbar;