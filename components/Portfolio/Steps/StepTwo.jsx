import React, { useState } from 'react';
import toast from 'react-hot-toast';
import TemplateCard from '../TemplateCard';

const TEMPLATES = [
  {
    id: '1',
    name: 'elrich bachman - light',
    desc: 'The simple and straight to the point resume. Clean lines and a theme of soft rounded corners.',
    image: 'https://devfolio.io/static/media/template-01.1ffc344c.png',
    code: 'one',
  },
  {
    id: '2',
    name: 'elrich bachman - light',
    desc: 'The simple and straight to the point resume. Clean lines and a theme of soft rounded corners.',
    image: 'https://devfolio.io/static/media/template-02.202bdc1f.png',
    code: 'two',
  },
  {
    id: '3',
    name: 'elrich bachman - light',
    desc: 'The simple and straight to the point resume. Clean lines and a theme of soft rounded corners.',
    image: 'https://devfolio.io/static/media/template-03.1e907d27.png',
    code: 'three',
  },
];

const StepTwo = ({ setActive }) => {
  const [selected, setSelected] = useState();

  const handleNext = () => {
    !selected ? toast.error('Select a template') : setActive(2);
  };

  return (
    <div className="flex flex-col items-start justify-center">
      <h1 className="text-5xl font-bold mb-2">Select Template!</h1>
      <p className="text-2xl text-gray-400 text-center mb-10">
        Choose your favorite template
      </p>
      <div className="grid grid-cols-3 gap-4">
        {TEMPLATES.map((template) => (
          <TemplateCard
            key={template.id}
            data={template}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      <button onClick={handleNext} className="btn btn-wide mt-6">
        Next
      </button>
    </div>
  );
};

export default StepTwo;
