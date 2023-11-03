/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Banner from './Banner/Banner';

const Header = () => {
  return (
    <>
      <header className="bg-green-500 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="text-white text-2xl font-bold">Corpo & Mente</a>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white">Início</a></li>
              <li><a href="#" className="text-white">Dicas de Saúde</a></li>
              <li><a href="#" className="text-white">Bem-Estar Mental</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <Banner/>
    </>
  );
};

export default Header;
