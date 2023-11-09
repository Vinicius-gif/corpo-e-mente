/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <header className="bg-green-500 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">Corpo & Mente</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
