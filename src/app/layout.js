import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Corpo e Mente',
  description: 'Dicas de saúde e auto cuidado',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" data-lt-installed="true">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
