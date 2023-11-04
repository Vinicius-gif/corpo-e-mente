import React from 'react';

function Benefits() {
  const benefitsData = [
    {
      title: 'Melhora da Saúde Mental',
      description: 'O autocuidado ajuda a reduzir o estresse e ansiedade, promovendo o bem-estar emocional.',
    },
    {
      title: 'Melhoria da Saúde Física',
      description: 'Adotar um estilo de vida saudável pode reduzir o risco de doenças e aumentar a energia.',
    },
    {
      title: 'Qualidade de Vida',
      description: 'Cuidar de si mesmo leva a uma vida mais plena e satisfatória.',
    },
    {
      title: 'Longevidade',
      description: 'Práticas de autocuidado podem contribuir para uma vida mais longa e saudável.',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Benefícios do Autocuidado</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="p-4 rounded-md shadow-lg bg-white">
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
