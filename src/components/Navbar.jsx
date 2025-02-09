import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useDashboardContext } from '../contexts/ContextProvider';

const NavButton = ({ title, func, icon, color, dotColor }) => {
  return <TooltipComponent
    content={title}
    position='BottomCenter'
  >
    <button
      type='button'
      onClick={func}
      style={{
        color: color
      }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span style={{
        background: dotColor
      }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}

    </button>
  </TooltipComponent>
}

const Navbar = () => {

  const { activeMenu, setActiveMenu, handleCLick, isClicked, setScreenSize, screenSize } = useDashboardContext();

  useEffect(() => {
    const handleScreenSize = () => {
      setScreenSize(window.innerWidth);
    }

    window.addEventListener('resize', handleScreenSize);

    handleScreenSize();

    return () =>
      window.removeEventListener('resize', handleScreenSize);

  }, []);

  useEffect(() => {
    if (screenSize < 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }


  }, [screenSize])



  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title="Menu"
        func={
          () => {
            setActiveMenu((prevActiveMenu) => !prevActiveMenu)
          }
        }
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
        <NavButton
          title="Cart"
          func={() => handleCLick('cart')}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          func={() => handleCLick('chat')}
          dotColor="#03C9D7"
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          func={() => handleCLick('notification')}
          color="blue"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent
          content="Profile"
          position='BottomCenter'>
          <div className='flex items-center
          gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleCLick('userProfile')}
          >
            <img
              className='rounded-full w-8 h-8'
              src={avatar}
            />
            <p>
              <span className='text-gray-500 text-14'>Hi,</span> {' '}
              <span className='text-gray-500 font-bold ml-1 text-14'>Topan</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-500 text-14' />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar