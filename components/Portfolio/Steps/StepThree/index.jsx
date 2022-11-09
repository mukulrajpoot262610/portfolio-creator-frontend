import React, { useState } from 'react';
import FormStepFour from './FormSteps/FormStepFour';
import FormStepOne from './FormSteps/FormStepOne';
import FormStepThree from './FormSteps/FormStepThree';
import FormStepTwo from './FormSteps/FormStepTwo';

const StepThree = ({ setActive }) => {
  const [formStep, setFormStep] = useState(0);

  return (
    <div className="flex">
      <div className="flex flex-col items-start justify-center w-1/3">
        <h1 className="text-5xl font-bold mb-10">Edit Website!</h1>
        <p className="text-lg text-gray-600 text-center capitalize">
          <span className="font-bold">Template: </span>richard hendricks
        </p>
        <p
          onClick={() => setActive(1)}
          className="text-sm text-gray-400 text-center capitalize hover:underline cursor-pointer hover:text-gray-600"
        >
          Change
        </p>

        <div className="tabs my-10 tabs-boxed">
          <a
            className={`tab ${formStep === 0 && 'tab-active font-bold'}`}
            onClick={() => setFormStep(0)}
          >
            1. Website Details
          </a>
          <a
            className={`tab ${formStep === 1 && 'tab-active font-bold'}`}
            onClick={() => setFormStep(1)}
          >
            2. User Information
          </a>
          <a
            className={`tab ${formStep === 2 && 'tab-active font-bold'}`}
            onClick={() => setFormStep(2)}
          >
            3. Projects
          </a>
          <a
            className={`tab ${formStep === 3 && 'tab-active font-bold'}`}
            onClick={() => setFormStep(3)}
          >
            4. Testinomials
          </a>
        </div>

        <div className="w-full">
          {formStep === 0 && <FormStepOne setFormStep={setFormStep} />}
          {formStep === 1 && <FormStepTwo setFormStep={setFormStep} />}
          {formStep === 2 && <FormStepThree setFormStep={setFormStep} />}
          {formStep === 3 && <FormStepFour setFormStep={setFormStep} />}
        </div>
      </div>
    </div>
  );
};

export default StepThree;
