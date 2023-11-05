/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <header className="bg-green-500 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">Corpo & Mente</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white">Pensamento Saudável</a></li>
              <li><a href="#" className="text-white">Dicas de Saúde</a></li>
              <li><a href="#" className="text-white">Bem-Estar Mental</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
