import React from 'react';
import CustomButton from '../ui/CustomButton';
import OutlineButton from '../ui/OutlineButton';
const Footer1 = () => {
    return (
        <div className='bg-[#4F39F6] mx-auto text-center flex flex-col justify-evenly items-center gap-2 py-10 px-4'>
            <h1 className='font-bold text-3xl text-white'>Simple, Transparent Pricing</h1>
            <p className='text-zinc-200 w-2/3'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
            <div className='flex justify-between items-center text-center gap-2'>
                <CustomButton text={"Explore Products"} popularSubscription={true}></CustomButton>
                <OutlineButton color={"text-white"}>View Pricing</OutlineButton>
            </div>
        </div>
    );
};

export default Footer1;