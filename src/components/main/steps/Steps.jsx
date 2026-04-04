import React, { use } from 'react';
import StepCard from '../../ui/StepCard';

const Steps = ({ stepsPromise }) => {
    const steps = use(stepsPromise);
    return (
        <div className='flex flex-col justify-center items-center gap-y-2 container mx-auto text-center'>
            <h2 className='text-zinc-800 font-bold text-3xl'>Get Started in 3 Steps</h2>
            <p className='text-zinc-500 w-2/3'>Start using premium digital tools in minutes, not hours.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-10 place-items-center mx-auto md:max-w-5xl px-5 mt-5'>
                {
                    steps.map(step => <StepCard key={step.id} step={step}></StepCard>)
                }
            </div>
        </div>
    );
};

export default Steps;