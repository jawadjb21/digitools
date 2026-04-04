import React from 'react';
import IconDisplay from './IconDisplay';

const StepCard = ({ step }) => {
    return (
        <div className='relative h-full w-full flex flex-col gap-1 justify-center items-center border border-zinc-200 rounded-2xl p-5 text-center bg-white shadow-sm hover:shadow-md transition-shadow'>
            <span className='ml-auto absolute -top-px right-1.5 bg-linear-to-r from-[#4F39F6] to-[#627382] rounded-full p-1 text-white'>{step.id}</span>
            <IconDisplay icon={step.icon}></IconDisplay>
            <h5 className='font-semibold text-xl'>{step.name}</h5>
            <p className='text-zinc-500 h-full'>{step.description}</p>
        </div>
    );
};

export default StepCard;