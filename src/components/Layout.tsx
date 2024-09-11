import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-1 p-4 flex flex-col items-center justify-center text-center'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
