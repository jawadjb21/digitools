import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";


const Footer2 = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-blue-950 text-white p-10 mx-auto">
                <aside className='place-items-center text-center md:place-items-start md:text-left'>
                    <h2 className='bg-linear-to-r from-[#4F39F6] to-[#627382] bg-clip-text inline-block text-transparent font-bold text-2xl md:text-4xl pb-1'>DigiTools</h2>
                    <p className='text-zinc-300 w-2/3'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </aside>
                <div className='grid grid-cols-3 gap-6 col-span-full md:col-span-1 md:contents'>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
                <nav className='mx-auto place-items-center'>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https:www.x.com'><FaTwitter className='text-2xl' /></a>
                        <a href='https://www.youtube.com'><FaYoutube className='text-2xl' /></a>
                        <a href="https://www.facebook.com"><FaFacebook className='text-2xl' /></a>
                    </div>
                </nav>
            </footer>
            <hr className='mx-auto text-gray-300' />
            <footer className="footer sm:footer-horizontal footer-center bg-blue-950 text-white p-4 mx-auto">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer2;