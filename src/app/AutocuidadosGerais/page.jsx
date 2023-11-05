/* eslint-disable @next/next/no-img-element */
import React from 'react';

const AutosCuidadosGerais = () => {
  return (
    <div className="bg-blue-100 p-8 rounded-lg shadow-lg text-center px-96">
      <h2 className="text-2xl font-bold mb-4">Como conciliar vida, estudos e trabalho de forma saudável</h2>
      <p className="text-gray-700 my-5">
      Sabemos que a vida adulta é repleta de desafios, onde a responsabilidade aumenta não só consigo mesmo como
      com os outros ao seu redor, por exemplo, família. No quesito trabalho e estudo, sabemos que necessitamos
      de mais dedicação, tempo e energia ao longo de nossa rotina, porém não se deve deixar consumir por essa
      rotina muitas vezes massiva. Precisa-se separar um tempo para você mesmo e as outras áreas de sua vida
      não deixando-as de lado. Deixar aspectos de sua vida de lado pode causar inúmeros problemas futuros, até
      mesmo na sua saúde física, mental e emocional. Por mais importante que um trabalho ou curso possa ser,
      existem aspectos que devem estar em maior prioridade, por exemplo, sua família e você mesmo, é claro.
      </p>
      <div className="mt-4 my-20">
        <h3 className="text-xl font-bold mb-2 my-20">Dicas para conciliar vida, estudos e trabalho de forma saudável:</h3>
        <ul className="list-inside text-gray-700 list-none">
          <li className="my-8">
            <h4 className="text-lg font-semibold mb-2">Organize seu tempo</h4>
            <p>Fazer uma gestão de tempo te ajudará a manter uma rotina organizada que será a chave para conciliar
              suas atividades do dia. Anotar seus compromissos em uma agenda, seja física ou mesmo digital, será 
              um grande incentivo, pois estará visualizando todos os dias seus compromissos diários, semanais e 
              mensais. Isso te ajudará a evitar o esquecimento de obrigações e a encaixar atividades de lazer e 
              momentos com amigos e família.</p>
          </li>
          <li className="my-8">
            <h4 className="text-lg font-semibold mb-2">Defina as prioridades</h4>
            <p>Definir o que é mais importante para se fazer no momento, como atividades que precisam de mais atenção,
              te ajudará a não deixar nada pendente, tornando sua agenda sempre organizada e até com mais tempo livre
              para fazer algo de bem-estar e qualidade de vida. Lembrando que ter obrigações NÃO quer dizer que você
              deve viver apenas para cumprí-las.</p>
          </li>
        </ul>
      </div>
      <div className="mt-4 flex justify-center">
        <img src="/images/banner.jpg" alt="Imagem 1" className="w-1/3 h-1/4 rounded-lg" />
      </div>
      <div className="mt-4">
        <p className="text-gray-700 my-10">
        Essas são algumas dicas que podem te ajudar, mas há diversos meios como também evitar a procrastinação e 
        manter um ambiente de trabalho e estudos sempre organizado.
        </p>
      </div>
      <div className="mt-4 flex justify-center">
        <img src="/images/img-home1.jpg" alt="Imagem 2" className="w-1/3 h-1/4 rounded-lg" />
      </div>
    </div>
  );
};

export default AutosCuidadosGerais;
