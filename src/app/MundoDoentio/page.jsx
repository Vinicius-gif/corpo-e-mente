import React from 'react';
import Card from '../Card';

const MundoDoentio = () => {
  return (
    <div className="rounded-lg shadow-lg px-14 py-9">
      <h2 className="text-2xl font-semibold mb-6 text-center border-b-2 border-green-600 pb-4">
        Como Viver Bem em um Mundo Doentio
      </h2>
      <p className=" mx-5">
        Para usufruir das oportunidades que a vida nos traz, precisamos estar bem em todos os aspectos:
        físico, psicológico, social, religioso e financeiro. Alinhar nossos anseios com nossa realidade
        e desejo futuros, o processo de viver saudável nesses quesitos mencionados requer uma análise 
        do modelo de vida e os hábitos que estão sendo praticados. Para viver bem, é preciso controlar
        as emoções e trazer novas formas de visão de vida.
      </p>
      
      {/* Continue adicionando o restante do texto e formate-o conforme necessário */}
      
      <h3 className="text-lg font-semibold mt-4 mb-2 ">Segue abaixo algumas dicas para ser mais feliz:</h3>
      <div className="ml-5 border-b-2 border-green-600 pb-2">
        <ol className="list-decimal ml-6 [&>*]:my-10">
          <li className="my-4">Celebre as pequenas conquistas.</li>
          <li>Pratique o autocuidado com você e com os demais.</li>
          <li>Comece o dia agradecendo.</li>
          <li>Seja sincero com você e alimente-se de alimentos naturais.</li>
          <li>Siga uma rotina.</li>
          <li>Faça programas com famílias e amigos próximos.</li>
        </ol>
      </div>
      
      <h3 className="text-2xl font-semibold my-8 mx-10">Como viver bem?</h3>
      <div className="grid grid-cols-1 gap-7 justify-items-center">
        <div className="grid grid-cols-4 gap-5 my-6">
          <Card title="Estabeleça prioridades" image="/images/metas.jpg"/>
          <Card title="Organize uma rotina de descanso e lazer" image="/images/descanso.jpg"/>
          <Card title="Organize seu espaço de trabalho" image="/images/organize.jpg"/>
          <Card title="Separe sua vida pessoal do profissional" image="/images/separe.jpg"/>
        </div>
      </div>
    </div>
  );
};

export default MundoDoentio;
