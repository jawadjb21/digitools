import React from 'react';

const StatCard = ({ stat }) => {
    return (
        <div className='flex-col gap-2 justify-center items-center'>
            <p>{stat.icon}</p>
            <h3 className='text-white font-bold text-4xl'>{stat.value}</h3>
            <p className='text-zinc-700 font-semibold'>{stat.label}</p>
        </div>
    );
};

export default StatCard;