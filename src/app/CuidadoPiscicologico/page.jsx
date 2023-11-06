import Image from 'next/image';
import React from 'react';

const PensamentoSaudavel = () => {
  return (
    <div className="p-10 grid grid-cols-1 justify-center justify-items-center gap-y-12">
      <Image src="/images/dicas-especialistas.png" alt="dicas" width={700} height={700}/>
      <h2 className="mt-11 font-medium text-3xl border-b-2 border-green-500 pb-8">Dicas importantes para um autocuidado psicológico completo</h2>
      <div>
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
      </div>
    </div>
  );
};

export default PensamentoSaudavel;
