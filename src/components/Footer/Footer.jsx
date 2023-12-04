import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-green-500 py-4 bottom-0 left-0 right-0 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-white text-sm">&copy; {new Date().getFullYear()} Corpo & Mente</p>
        <nav>
          <ul className="flex space-x-4">
            <li className="text-white">Desenvolvido por:</li>
            <li>
              <Link 
                href="https://www.linkedin.com/in/vinicius-felipe-5148a81b5/" 
                className="text-white"
              >
                <FaLinkedin size={35}/>
              </Link>
            </li>
            <li><Link href="#" className="text-white">Política de Privacidade</Link></li>
            <li><Link href="#" className="text-white">Termos de Uso</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
