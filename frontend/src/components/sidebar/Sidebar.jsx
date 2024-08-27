import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {


  return (
    <div className='h-full flex flex-col border-r border-slate-500 p-4 '>
      {/* SearchInput at the top */}
      <div className='px-3'>
        <SearchInput />
      </div>
      
      {/* Divider (if needed) */}
      <div className='divider my-2'></div>
      
      {/* Conversations should fill remaining space and be scrollable */}
      <div className='flex-1 overflow-y-auto'>
        <Conversations />
      </div> 

      <LogoutButton/>
    </div>

  );
};

export default Sidebar;
