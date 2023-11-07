import React from 'react';
import Card from '../Card';

const CuidadoPiscicologico = () => {
  return (
    <section className="px-20">
      <section>
        <h2 className="mt-11 font-medium text-3xl border-b-2 border-green-500 pb-8 text-center">
          Como pensar numa vida saudável em meio as adversidades do dia a dia
        </h2>
        <section>
          <h3 className="text-2xl font-semibold mt-8">Como obter a estabilidade:</h3>
          <div className="grid grid-cols-4 gap-5 p-3 m-8">
            <Card title="Organize uma rotina de descanso e lazer" image="/images/rotina.jpg"/>
            <Card title="Produtividade no espaço de trabalho" image="/images/produtividade.jpg"/>
            <Card title="Bem-estar" image="/images/bemEstar.jpg"/>
            <Card title="Felicidade" image="/images/felicidade.jpg"/>
            <Card title="Estilo de vida saudável" image="/images/comendo.jpg"/>
            <Card title="Saúde " image="/images/idosa.png"/>
            <Card title="Energia" image="/images/energia.jpg"/>
          </div>
        </section>
        <p className="my-8">
        Torna se de fundamental importância desenvolver o hábito de uma vida saudável, 
        em meio a tantas diversidades encontradas no dia a dia, sendo elas o sofrimento,
        a decepção e a angústia de não saber desenvolver habilidades emocionais e assim 
        aprender a superar as adversidades que acontecem da vida. 
        </p>
        <p className="my-8">
        Entretanto manter o equilíbrio em uma vida balanceada e saudável nas diversas esferas que existe,
        tanto a pessoal, profissional, familiar, amorosa, emocional, social e de relacionamentos
        interpessoais. Contudo isso é sobre saber que não é fácil garantir uma adaptação de equilíbrio na vida.
        </p>
        <p className="my-8">
        Contudo manter a estabilidade que iremos conseguimos alcançar a calma, a racionalidade e
        consequentemente, a saúde mental, emocional e corporal que precisamos para assim adquirir,
        melhor uma estabilidade psicológica, para administrar as situações que pode ocorrer durante
        a nossa vida.
        </p>
        <p className="my-8">
        Dessa forma é sobre começar a entender que a vida nem sempre será fácil, que ao longo dela 
        terá altos e baixos, mas mesmo que o cansaço seja forte e venha à vontade de parar, nada disso
        é mais importante que obter a vontade de vencer os todos os nossos obstáculos.
        </p>
      </section>
      <section className="my-9">
        <h3 className="text-xl font-semibold">
          Segue alguns benefícios do equilíbrio na qualidade de vida:
        </h3>
        <ul className="[&>li]:my-4 list-disc">
          <li>Autoconhecimento;</li>
          <li>Autoconfiança;</li>
          <li>Autocuidado;</li>
          <li>Aumento da autoestima;</li>
          <li>Visão crítica das situações e de si mesmo;</li>
          <li>Clareza e compreensão das adversidades e dos problemas do dia a dia.</li>
        </ul>
      </section>
    </section>
  );
};

export default CuidadoPiscicologico;
