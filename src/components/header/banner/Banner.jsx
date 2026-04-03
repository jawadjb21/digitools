import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import SimpleParallax from "simple-parallax-js";
import banner from "../../../assets/banner.png";
import CustomButton from '../../ui/CustomButton';
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen mx-auto text-center">
            <div className="hero-content flex-col lg:flex-row-reverse items-center justify-around">
                <SimpleParallax>
                    <img
                        src={banner}
                        className="rounded-lg shadow-2xl w-full max-w-sm"
                    />
                </SimpleParallax>
                <div className='w-full lg:w-1/2 flex flex-col justify-center items-start text-left gap-2'>
                    <span className='flex justify-between items-center gap-1.5 bg-[#E1E7FF] rounded-3xl px-2 py-1'>
                        <div className="size-4 rounded-full bg-radial-[at_25%_25%] from-[#4F39F6] to-[#627382] to-75%"></div>
                        <p className='italic text-zinc-500'>New AI-Powered Tools Available</p>
                    </span>
                    <h1 className="text-5xl font-bold my-1">Supercharge Your <br /> Digital Workflow</h1>
                    <p className="py-6">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>
                    <div className='flex justify-center items-center gap-1'>
                        <CustomButton text={"Explore Products"}></CustomButton>
                        <button className="btn border rounded-2xl border-[#4F39F6] bg-linear-to-r from-[#4F39F6] to-[#627382] bg-clip-text text-transparent"><CiPlay1 className='text-[#4F39F6]' />
                            Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;