'use client';
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Home, User, Settings, Mail, HelpCircle, 
  ChevronLeft, ChevronRight, Bell, Search, Moon, Sun
} from 'lucide-react';

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
  badge?: number;
}

const menuItems: MenuItem[] = [
  { title: 'Inicio', icon: <Home size={20} />, path: '/', badge: 2 },
  { title: 'Perfil', icon: <User size={20} />, path: '/profile' },
  { title: 'Mensajes', icon: <Mail size={20} />, path: '/messages', badge: 5 },
  { title: 'Configuración', icon: <Settings size={20} />, path: '/settings' },
  { title: 'Ayuda', icon: <HelpCircle size={20} />, path: '/help' },
];

interface SidebarProps {
    isCollapsed: boolean;
    setIsCollapsed: (value: boolean) => void;
  }
  
  const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeItem, setActiveItem] = useState('/');

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const filteredItems = menuItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      {/* Header para móvil */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 
      bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-900 dark:to-indigo-900
      backdrop-blur-lg shadow-lg z-30">
        <div className="flex items-center justify-between h-full px-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 
              backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            {isOpen ? 
              <X size={24} className="text-white transform rotate-90 transition-transform duration-300" /> : 
              <Menu size={24} className="text-white transition-transform duration-300" />
            }
          </button>
          <div className="flex items-center space-x-4">
            <h1 className="text-white font-bold text-xl">Inicio</h1>
            <div className="relative">
              <Bell size={20} className="text-white/80 hover:text-white cursor-pointer transition-colors" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                3
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay para móvil con blur */}
      {isOpen && (
         <div 
         className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden z-20"
         onClick={() => setIsOpen(false)}
       />
      )}

      {/* Sidebar principal */}
      <div
        className={`fixed h-full z-30 
          transition-all duration-300 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0
          ${isCollapsed ? 'md:w-20' : 'md:w-72'}
          bg-gradient-to-b from-violet-600 to-indigo-600 dark:from-violet-900 dark:to-indigo-900
          md:top-0 top-16
          backdrop-blur-lg
          border-r border-white/10`}
      >
        {/* Botón de colapso con animación */}
        <button
          onClick={toggleCollapse}
          className="hidden md:flex absolute -right-3 top-8 
            bg-gradient-to-r from-violet-500 to-indigo-500 dark:from-violet-800 dark:to-indigo-800
            hover:scale-110 text-white rounded-full p-1.5 shadow-lg 
            transition-all duration-300 hover:shadow-indigo-500/50"
        >
          {isCollapsed ? 
            <ChevronRight size={18} className="transition-transform duration-300" /> : 
            <ChevronLeft size={18} className="transition-transform duration-300" />
          }
        </button>

        {/* Cabecera del sidebar */}
        <div className={`p-6 ${isCollapsed ? 'md:p-4' : ''}`}>
          <div className={`transition-all duration-300 ${isCollapsed ? 'md:opacity-0' : 'opacity-100'}`}>
            <h2 className="text-2xl font-bold text-white mb-2">Bienvenido a mi Portafolio</h2>
            {!isCollapsed && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 text-white placeholder-white/50 rounded-lg px-4 py-2 pl-10
                    focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                />
                <Search size={18} className="absolute left-3 top-2.5 text-white/50" />
              </div>
            )}
          </div>
        </div>

        {/* Navegación */}
        <nav className="mt-6">
          {filteredItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(item.path);
              }}
              className={`flex items-center px-6 py-3 text-white/80 
                hover:bg-white/10 relative group
                transition-all duration-200 ease-out
                ${isCollapsed ? 'md:px-4 md:justify-center' : ''}
                ${activeItem === item.path ? 'bg-white/10 text-white' : ''}
                hover:translate-x-1 md:hover:translate-x-2`}
            >
              <div className={`
                absolute left-0 w-1 h-full bg-white transform scale-y-0
                group-hover:scale-y-100 transition-transform duration-200
                ${activeItem === item.path ? 'scale-y-100' : ''}`} 
              />
              <span className="text-white/90 group-hover:text-white 
                transition-all duration-200 group-hover:scale-110">
                {item.icon}
              </span>
              <span className={`ml-3 font-medium group-hover:text-white 
                transition-all duration-300
                ${isCollapsed ? 'md:hidden' : 'md:block'}`}>
                {item.title}
              </span>
              {item.badge && (
                <span className={`ml-auto bg-white/20 text-white px-2 py-1 rounded-full text-xs
                  ${isCollapsed ? 'md:hidden' : ''}`}>
                  {item.badge}
                </span>
              )}
              
              {/* Tooltip para modo colapsado */}
              {isCollapsed && (
                <div className="absolute left-full ml-6 py-1 px-3 bg-gray-900 text-white text-sm
                  rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  pointer-events-none whitespace-nowrap">
                  {item.title}
                </div>
              )}
            </a>
          ))}
        </nav>

        {/* Footer con tema y perfil */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 
          border-t border-white/10 bg-black/10
          ${isCollapsed ? 'md:p-2' : ''}`}>
          <div className="flex items-center justify-between">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 
                transition-all duration-300 hover:scale-105"
            >
              {isDarkMode ? 
                <Sun size={20} className="text-white" /> : 
                <Moon size={20} className="text-white" />
              }
            </button>
            {!isCollapsed && (
              <div className="flex items-center space-x-3">
                <img
                  src="/api/placeholder/32/32"
                  alt="Profile"
                  className="w-8 h-8 rounded-lg border-2 border-white/20"
                />
                <div className="text-sm">
                  <p className="text-white font-medium">Usuario</p>
                  <p className="text-white/60">Admin</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;