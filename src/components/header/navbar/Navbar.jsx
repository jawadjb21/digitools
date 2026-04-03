import { React, use } from 'react';
import { IoIosCart } from "react-icons/io";
import Link from './Link';
import LoginButton from '../../ui/LoginButton';
import CustomButton from '../../ui/CustomButton';


const Navbar = ({ navLinksPromise, selectedProducts }) => {
    const navLinks = use(navLinksPromise);
    return (
        <div className='sticky z-100 top-0 flex justify-between items-center mx-auto container'>
            <div className="md:hidden dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 ml-3 w-52 p-2 shadow">
                    {navLinks.map(link => <Link key={link.id} link={link}></Link>)}
                </ul>
            </div>
            <h2 className='bg-linear-to-r from-[#4F39F6] to-[#627382] bg-clip-text inline-block text-transparent font-bold text-2xl md:text-4xl pb-1'>DigiTools</h2>
            <ul className='hidden md:flex justify-between items-center list-none gap-2'>
                {navLinks.map(link => link.name !== 'Login' && <Link key={link.id} link={link}></Link>)}
            </ul>
            <div className='flex justify-between items-center'>
                <div className="indicator">
                    {selectedProducts.length > 0 ? <span className="indicator-item badge badge-secondary">{selectedProducts.length}</span>:""}
                    <button className='btn btn-ghost'><IoIosCart /></button>
                </div>

                <div className='hidden md:flex justify-between items-center gap-1'>
                    <LoginButton></LoginButton>
                    <CustomButton text={"Get Started"}></CustomButton>
                </div>
            </div>
        </div>
    );
};

export default Navbar;