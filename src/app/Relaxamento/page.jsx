import Image from 'next/image';
import React from 'react';

const Relaxamento = () => {
  return (
    <div className="p-10 px-28 grid grid-cols-1 justify-center justify-items-center gap-y-12">
      <h2 className="mt-11 font-medium text-3xl border-b-2 border-green-500 pb-8">
        Como prática relaxamento corporal e mental, para uma qualidade de vida melhor
      </h2>
      <section>
        <p>Se você tem uma rotina agitada no trabalho, sente estresse e ansiedade, é importante fazer
        você fazer uma pausa e diminuir um pouco o seu ritmo. As técnicas de relaxamento elas
        podem te ajudar a manter o equilíbrio, evitar o esgotamento e outros problemas mais
        graves, geralmente ligado ao excesso de trabalho. Uma pessoa descansada e com a mente
        tranquila produz muito mais do que alguém que está com a cabeça cheia de preocupações
        e sem foco.
        </p>
        <p>
        Separamos melhores técnicas de relaxamento do corpo e da mente que prometem ajudar
        na redução do estresse diário. A seguir, veja quais são elas
        </p>
      </section>
      <section>
        <h3 className="my-7 text-2xl font-semibold">Automassagem</h3>
        <section className="text-base">
          <p>
          Uma das melhores maneiras de combater o estresse, é fazendo alguns intervalos durante
          o trabalho, praticando a automassagem, mesmo que você só utilize 5 ou 15 minutos do
          seu tempo. A massagem é uma técnica eficaz que melhora a sua qualidade de vida, sendo
          usada para a redução das dores e desconfortos. Leva a uma sensação de relaxamento
          melhorando a sua produtividade na sua ocupação e em atividades no dia a dia.
          </p>
          <p>Segue abaixo passo a passo de como fazer a automassagem no ambiente de trabalho.</p>
        </section>
        <div className="flex justify-center">
          <Image className="my-10" alt="" src="" width={500} height={500}/>
        </div>
      </section>
      <section>
        <h3 className="my-7 text-2xl font-semibold">Meditação</h3>
        <ul className="list-disc">
          <li>
            <h4 className="my-7 text-xl font-medium">Meditação Concentrativa:</h4>
            <p>
              Se caracteriza pela atenção direcionada a um único foco, como a respiração, um
              mantra ou algum som. Nesse caso, podem ser observados aspectos sensoriais,
              como a nossa respiração (o ambiente é ignorado e a atenção é direcionada para o
              ato de respirar), ou aspectos mentais, como a nossa própria consciência.
            </p>
          </li>
          <li>
            <h4 className="my-7 text-xl font-medium">Meditação Mindfulness ou atenção plena:</h4>
            <p>Caracterizada pela consciência da experiência do momento presente, com uma
              atitude de aceitação, em que nenhum tipo de elaboração ou julgamento é utilizado.
              Exercitando a atenção plena podemos focar no que estamos vivendo no momento
              de forma que nossa produtividade em relação a qualquer tarefa, seja produtiva e
              satisfatória.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="my-7 text-2xl font-semibold text-center">Dicas para começar a meditar</h3>
        <Image className="my-10" alt="" src="" width={500} height={500}/>
      </section>
    </div>
  );
};

export default Relaxamento;
