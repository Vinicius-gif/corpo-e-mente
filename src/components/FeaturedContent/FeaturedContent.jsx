/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

function FeaturedContent() {
  const featuredContentData = [
    {
      title: 'Vivendo de forma saudável',
      link: '/VivendoSaudavel',
      image: '/images/img-home1.jpg',
      description: 'Como conciliar vida, estudos e trabalho de forma saudável',
    },
    {
      title: 'Como viver bem em um mundo doentio',
      link: '/MundoDoentio',
      image: '/images/img-home2.jpg',
      description: 'Viver bem em um mundo doentio requer equilíbrio entre autocuidado e empatia.',
    },
    {
      title: 'Cuidado Piscicologico',
      link: '/CuidadoPiscicologico',
      image: '/images/img-home3.jpg',
      description: 'Como pensar numa vida saudável em meio as adversidades do dia a dia',
    },
    {
      title: 'Autocuidados Gerais',
      link: '/AutocuidadosGerais',
      image: '/images/img-home4.jpg',
      description: 'Autocuidados gerais abrangem práticas e atitudes que promovem o bem-estar físico, emocional e mental, incluindo hábitos de saúde, alimentação equilibrada e ações que visam o autorrespeito e a autoestima.',
    },
    {
      title: 'Dicas de relaxamento corporal e mental',
      link: '/Relaxamento',
      image: '/images/img-home5.jpg',
      description: 'Se você tem uma rotina agitada no trabalho, sente estresse e ansiedade, é importante fazer você fazer uma pausa e diminuir um pouco o seu ritmo. ',
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Conteúdo em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredContentData.map((content, index) => (
            <Link key={index} href={content.link}>
              <div className="bg-white p-4 rounded-md shadow-lg cursor-pointer">
                <img src={content.image} alt={content.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
                <p className="text-gray-600">{content.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedContent;
