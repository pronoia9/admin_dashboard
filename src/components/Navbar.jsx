import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button
      type='button'
      onClick={() => customFunc()}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div id='navbar' className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
      <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
        <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
          <NavButton
            title='Menu'
            customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
            icon={<AiOutlineMenu />}
            color=''
            dotColor=''
          />

          <div className='flex'>
            <NavButton title='Cart' customFunc={() => handleClick('cart')} icon={<FiShoppingCart />} color='' />
            <NavButton title='Chat' customFunc={() => handleClick('chat')} icon={<BsChatLeft />} color='' dotColor='#03C9D7' />
            <NavButton title='Notifications' customFunc={() => handleClick('notification')} icon={<RiNotification3Line />} color='' dotColor='' />
            <TooltipComponent content='Profile' position='BottomCenter'>
              <div className='flex item-center gap-2 cursor-pointer p-1 hover:bg-flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')}>
                <img />
              </div>
            </TooltipComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
