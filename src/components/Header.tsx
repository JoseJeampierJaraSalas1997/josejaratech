import React from 'react';
import Link from 'next/link'; 

const Header: React.FC = () => {
  return (
    <header>
      <h1>JoseJaraTech</h1>
      <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/productos"><a>Productos</a></Link></li>
          <li><Link href="/contacto"><a>Contacto</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
