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
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  // screen size
  useEffect(() => {
    // function to set/change screenSize context
    const handleResize = () => setScreenSize(window.innerWidth);
    // add event listener for window size changing
    window.addEventListener('resize', handleResize);
    // call the handleResize on page load initially to get the initial size
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // to close the sidebar on small screens/devices
  useEffect(() => {
    if (screenSize <= 900) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize])

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
            <NavButton
              title='Notifications'
              customFunc={() => handleClick('notification')}
              icon={<RiNotification3Line />}
              color=''
              dotColor=''
            />
            <TooltipComponent content='Profile' position='BottomCenter'>
              <div
                className='flex item-center gap-2 cursor-pointer p-1 hover:bg-flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
                onClick={() => handleClick('userProfile')}>
                <img src={avatar} className='rounded-full w-8 h-8' />
                <p>
                  <span className='text-gray-400 text-14'>Hi,</span>{' '}
                  <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
                </p>
                <MdKeyboardArrowDown className='text-gray-400 text-14' />
              </div>
            </TooltipComponent>

            {isClicked.cart && <Cart />}
            {isClicked.chat && <Chat />}
            {isClicked.notification && <Notification />}
            {isClicked.sserProfile && <UserProfile />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
