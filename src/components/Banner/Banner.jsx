import React from 'react';

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-72 relative"
      style={{ backgroundImage: 'url("https://imgcentauro-a.akamaihd.net/09_Landings/2021/Villalobos/desk-conteudo-02.png")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-2xl font-semibold">Dicas de Saúde e Bem-Estar</h1>
        <p className="text-sm mt-2">Fique saudável e viva bem com nossas dicas e orientações.</p>
      </div>
    </div>
  );
};

export default Banner;
