import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import SimpleParallax from "simple-parallax-js";
import banner from "../../../assets/banner.png";
import CustomButton from '../../ui/CustomButton';
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen container mx-auto text-center">
            <div className="hero-content flex-col lg:flex-row-reverse items-center justify-around">
                <SimpleParallax>
                    <img
                        src={banner}
                        className="rounded-lg shadow-2xl w-full max-w-sm"
                    />
                </SimpleParallax>
                <div className='w-full lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Supercharge Your <br /> Digital Workflow</h1>
                    <p className="py-6">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>
                    <div className='flex justify-center items-center gap-1'>
                        <CustomButton text={"Explore Products"}></CustomButton>
                        <button className="btn btn-outline rounded-2xl"><CiPlay1 />
                            Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;