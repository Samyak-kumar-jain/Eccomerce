import React from 'react';
import { AlignJustify, LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toggleAdmin } from '@/features/Sidebarslice/Sidebarslice';
import { logoutnUser, logoutUser } from '@/features/Authslice/authslice';

const Header = () => {
  
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleAdmin());  
  };
  const handleLogout = ()=>{
    dispatch(logoutnUser())
  }

  return (
    <div className='flex sticky  items-center bg-gray-900 justify-between px-4 py-3 bg-background border-b'>
      <button className='' onClick={handleClose}> {/* Moved onClick to button */}
        <span className='sr-only'>Toggle Menu</span>
        <AlignJustify className='text-teal-300' />
      </button>
      <div className="flex flex-1 justify-end">
        <button onClick={handleLogout} className="flex items-center gap-2 bg-gray-900 hover:bg-teal-400 text-teal-50 text-sm border border-white px-3 py-2 rounded-md hover:border-black transition-all duration-300 ease-in-out active:scale-95">
          <LogOut  className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
