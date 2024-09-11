import React from "react";

const Header: React.FC = () => {
  return (
    <header className='bg-blue-600 text-white px-4 flex items-center h-[10vh] md:h-[12vh]'>
      <img
        src='https://dummyimage.com/160x100/ffffff/2564eb&text=NOKIA'
        alt='Logo'
        className='h-full'
      />
    </header>
  );
};

export default Header;
