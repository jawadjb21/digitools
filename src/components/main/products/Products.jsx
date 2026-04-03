import {React, use} from 'react';
import CustomButton from '../../ui/CustomButton';

const Products = ({ productsPromise }) => {
    const products = use(productsPromise);
    console.log(products);
    return (
        <div className='container mx-auto my-10'>
            <div className='flex flex-col justify-center items-center text-center gap-3'>
                <h1 className='font-bold text-3xl text-black'>Premium Digital Tools</h1>
                <p className='text-zinc-500 w-2/3'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                <div className='flex justify-center items-center'>
                    <CustomButton text={"Products"}></CustomButton>
                    <CustomButton text={"Cart"}></CustomButton>
                </div>
            </div>
        </div>
    );
};

export default Products;