import Image from 'next/image';
import React from 'react';

const PensamentoSaudavel = () => {
  return (
    <div className="p-10 grid grid-cols-1 justify-center justify-items-center gap-y-12">
      <Image src="/images/dicas-especialistas.png" alt="dicas" width={700} height={700}/>
      <h2 className="mt-11 font-medium text-3xl border-b-2 border-green-500 pb-8">Dicas importantes para um autocuidado psicológico completo</h2>
      <div className="pl-11">
        <section>
          <h3 className="text-lg font-medium">Autocuidado psicológico:</h3>
          <ol className="list-decimal pl-4 my-5">
            <li>Escreva um diário</li>
            <li>Observe sua experiencia interior- perceber seus pensamentos, julgamentos, crenças, atitudes e sentimentos</li>
            <li>Diga “não” as responsabilidades extras, às vezes é respeitar os próprios limites</li>
            <li>Busque ajuda quando não conseguir resolver questões que promovem o sofrimento interno</li>
          </ol>
        </section>
        <section>
          <h3 className="text-lg font-medium">Autocuidado físico:</h3>
          <ol className="list-decimal pl-4 my-5">
            <li>Coma regularmente e de forma saudável</li>
            <li>Exercitar-se, correr, andar</li>
            <li>Dormir o suficiente</li>
            <li>Dar um tempo de celular e computadores</li>
          </ol>
        </section>
        <section>
          <h3 className="text-lg font-medium">Autocuidado Emocional:</h3>
          <ol className="list-decimal pl-4 my-5">
            <li>Mantenha contato com pessoas importantes na sua vida</li>
            <li>Seja afirmativo(a) consigo, elogiar-se</li>
            <li>Encontre coisas que te façam rir</li>
            <li>Aproxime de pessoas, e lugares que te fazem bem</li>
          </ol>
        </section>
        <section>
          <h3 className="text-lg font-medium">Autocuidado espiritual:</h3>
          <ol className="list-decimal pl-4 my-5">
            <li>Encontre um tempo para refletir</li>
            <li>Meditar e orar</li>
            <li>Esteja aberto à inspiração</li>
            <li>Passar algum tempo com amigos(as)</li>
          </ol>
        </section>
        <section>
          <h3 className="text-lg font-medium">Autocuidado em casa, faculdade ou em local de trabalho:</h3>
          <ol className="list-decimal pl-4 my-5">
            <li>Faça pausas durante a jornada da faculdade/ escola ou trabalho</li>
            <li>Reserve um tempo de silêncio para concluir as tarefas</li>
            <li>Equilibre suas atividades para que nenhum dia te sobrecarregue</li>
            <li>Busque equilíbrio dentro da sua vida da faculdade/escola ou na rotina de trabalho, em amigos, relacionamentos e família</li>
          </ol>
        </section>
        <h3 className="text-xl font-semibold text-center">Alimentação saudável</h3>
        <div className="flex justify-center">
          <Image 
            className="my-10" 
            alt="alimentação" 
            src="/images/cuidadoPiscicPage/cuidadoPiscic2.jpeg" 
            width={500} height={500}
          />
        </div>
        <p>
          Promover uma alimentação saudável é essencial para uma vida de qualidade, mas muitas vezes
          a confusão entre comer e nutrir pode levar a problemas de saúde. A falta de conhecimento e
          influências como mídia e tendências podem afetar a alimentação, especialmente entre os
          jovens. Uma alimentação inadequada na adolescência pode prejudicar o crescimento e
          aumentar o risco de obesidade e doenças crônicas. Compreender a importância da nutrição e
          adotar práticas saudáveis é crucial para uma vida saudável e de bem-estar.
        </p>
        <div className="flex justify-center">
          <Image 
            className="my-10" 
            alt="alimentação" 
            src="/images/cuidadoPiscicPage/cuidadoPiscic1.jpeg" 
            width={500} height={500}
          />
        </div>
        <ol className="list-decimal [&>li]:my-7">
          <li>
            <p>
              <strong>Mantenha a consistência: </strong>Estabeleça um cronograma regular de exercícios
              que se adapte à sua rotina diária.
            </p>
          </li>
          <li>
            <p>
              <strong>Priorize a diversão: </strong>escolha atividades que você gosta e que sejam divertidas,
              isso aumenta a probabilidade de você permanecer comprometido e motivado
              com sua rotina.
            </p>
          </li>
          <li>
            <p>
              <strong>Busque orientação profissional: </strong>Professor de educação física ou personal
              treiner para criar um plano de exercícios personalizado.
            </p>
          </li>
          <li>
            <p>
              <strong>Ajuste sua rotina de acordo com as mudanças da vida: </strong>Reconheça suas
              necessidades e capacidades físicas
            </p>
          </li>
          <li>
            <p>
              <strong>Encontre um equilíbrio entre as atividades físicas e treinamento de força e flexibilidade: </strong>
              Combinações de exercícios cardiovasculares, treinamento de
              força e atividades de alongamento.
            </p>
          </li>
          <li>
            <p>
              <strong>Aumente gradualmente a intensidade: </strong>Permitindo que seu corpo se adapte a
              intensidade do exercício.
            </p>
          </li>
          <li>
            <p>
              <strong>Monitore seu progresso: </strong>ajuda a manter a motivação
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PensamentoSaudavel;
