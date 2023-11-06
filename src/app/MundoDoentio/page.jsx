import Image from 'next/image';
import React from 'react';

const MundoDoentio = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg py-11">
      <h2 className="text-2xl font-semibold mb-4 text-center border-b-2 border-green-600 pb-2">Como Viver Bem em um Mundo Doentio</h2>
      
      <p className="text-center mx-5">
        Para usufruir das oportunidades que a vida nos traz, precisamos estar bem em todos os aspectos:
        físico, psicológico, social, religioso e financeiro. Alinhar nossos anseios com nossa realidade
        e desejo futuros, o processo de viver saudável nesses quesitos mencionados requer uma análise 
        do modelo de vida e os hábitos que estão sendo praticados. Para viver bem, é preciso controlar
        as emoções e trazer novas formas de visão de vida.
      </p>
      
      {/* Continue adicionando o restante do texto e formate-o conforme necessário */}
      
      <h3 className="text-lg font-semibold mt-4 mb-2 text-center">Segue abaixo algumas dicas para ser mais feliz</h3>
      <div className="mx-auto max-w-md border-b-2 border-green-600 pb-2">
        <ol className="list-decimal ml-6 [&>*]:my-10">
          <li className="my-4">Celebre as pequenas conquistas.</li>
          <li>Pratique o autocuidado com você e com os demais.</li>
          <li>Comece o dia agradecendo.</li>
          <li>Seja sincero com você e alimente-se de alimentos naturais.</li>
          <li>Siga uma rotina.</li>
          <li>Faça programas com famílias e amigos próximos.</li>
        </ol>
      </div>
      
      <h3 className="text-lg font-semibold mt-4 mb-2 text-center">Como viver bem?</h3>
      <div className="grid grid-cols-1 gap-7 justify-items-center">
        <div className="[&>h3]:font-extrabold text-xl">
          <section className="border-b-2 border-green-600 pb-2 flex flex-col items-center">
            <h3 className="text-center my-4">Estabeleça prioridades</h3>
            <Image src="/images/metas.jpg" alt="metas" width={200} height={100}/>
          </section>
          <section className="border-b-2 border-green-600 pb-2 flex flex-col items-center">
            <h3 className="text-center my-4">Organize uma rotina de descanso e lazer</h3>
            <Image src="/images/descanso.jpg" alt="metas" width={200} height={100}/>
          </section>
          <section className="border-b-2 border-green-600 pb-2 flex flex-col items-center">
            <h3 className="text-center my-4">Organize seu espaço de trabalho</h3>
            <Image src="/images/organize.jpg" alt="metas" width={200} height={100}/>
          </section>
          <section className="border-b-2 border-green-600 pb-2 flex flex-col items-center">
            <h3 className="text-center my-4">Separe sua vida pessoal do profissional</h3>
            <Image src="/images/separe.jpg" alt="metas" width={200} height={100}/>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MundoDoentio;
