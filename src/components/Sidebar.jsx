import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({ activeMenu }) => {
  return <div className={`dark:bg-secondary-dark-bg ${activeMenu ? 'w-72 fixed sidebar bg-white' : 'w-0'}`}></div>;
};

export default Sidebar;