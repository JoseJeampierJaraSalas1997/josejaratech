'use client';
import { ReactNode, useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <html lang="es">
      <body className="bg-white text-black">
        <div className="flex min-h-screen">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`
        transition-all duration-300
        md:pl-${isCollapsed ? '20' : '72'}
        pt-20 md:pt-6 px-4 md:px-6
      `}>
        
        {children} 
      </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
