import React from 'react';

function Footer() {
  return (
    <footer className="bg-green-500 py-4 bottom-0 left-0 right-0 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-white text-sm">&copy; {new Date().getFullYear()} Corpo & Mente</p>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white">Política de Privacidade</a></li>
            <li><a href="#" className="text-white">Termos de Uso</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
