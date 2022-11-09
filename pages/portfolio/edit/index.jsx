import React, { useState } from 'react';
import Sidebar from '../../../components/dashboard/Sidebar';
import StepOne from '../../../components/Portfolio/Steps/StepOne';
import StepThree from '../../../components/Portfolio/Steps/StepThree';
import StepTwo from '../../../components/Portfolio/Steps/StepTwo';

const EditPortfolio = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <Sidebar />
      <section className="col-span-1"></section>
      <section className="col-span-11 bg-gray-100 p-16">
        {active === 0 && <StepOne setActive={setActive} />}
        {active === 1 && <StepTwo setActive={setActive} />}
        {active === 2 && <StepThree setActive={setActive} />}
      </section>
    </div>
  );
};

export default EditPortfolio;
