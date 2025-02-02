// src/components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>JoseJaraTech</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
