import { React, use, useState } from 'react';
import CustomButton from '../../ui/CustomButton';
import OutlineButton from '../../ui/OutlineButton';
import AllProducts from './AllProducts/AllProducts';
import SelectedProducts from './SelectedProducts/SelectedProducts';


const Products = ({ productsPromise }) => {
    const products = use(productsPromise);

    const [selectedButton, setSelectedButton] = useState("all");
    console.log(products);
    return (
        <div className='container mx-auto my-10'>
            <div className='flex flex-col justify-center items-center text-center gap-3'>
                <h1 className='font-bold text-3xl text-black'>Premium Digital Tools</h1>
                <p className='text-zinc-500 w-2/3'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                <div className='flex justify-center items-center gap-2'>
                    {/* {selectedButton === "all" ? <CustomButton text={"Products"}></CustomButton> : <OutlineButton>Products</OutlineButton>} */}
                    {/* {selectedButton === "selected" ? <CustomButton text={"Cart"}></CustomButton> : <OutlineButton>Cart{`(${"A"})`}</OutlineButton>} */}
                </div>
            </div>
            <AllProducts products={products}></AllProducts>
            {/* {selectedButton === "available" ? <AllProducts products={products}></AllProducts> : <SelectedProducts></SelectedProducts>} */}
        </div>
    );
};

export default Products;