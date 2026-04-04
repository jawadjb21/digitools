import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import ProductFeature from './ProductFeature';
import CustomButton from './CustomButton';
import ProductTag from './ProductTag';
import IconDisplay from './IconDisplay';

const ProductCard = ({ product, selectedProducts, setSelectedProducts }) => {
    
    const isSelected = selectedProducts.some(prod => prod.id === product.id);

    const handleSelectedProducts = (product) => {
        const newSelectedProducts = [...selectedProducts, product];
        setSelectedProducts(newSelectedProducts);
        toast.success(`${product.name} has been selected!`);
    }
    return (
        <div className='relative h-full w-full flex flex-col gap-1 justify-start items-start border border-zinc-200 rounded-2xl text-left p-4 bg-white shadow-sm hover:shadow-md transition-shadow'>
            <ProductTag tag={product.tagType}></ProductTag>
            <IconDisplay icon={product.icon}></IconDisplay>
            <h5 className='font-bold text-xl text-zinc-800'>{product.name}</h5>
            <p className='font-medium text-zinc-500'>{product.description}</p>
            <p className='text-zinc-400 text-sm'>{`$`}<span className='font-bold text-2xl text-zinc-800'>{product.price}</span>{`/${product.period}`}</p>
            <ul className='list-none h-full'>
                {
                    product.features.map((feature, index) => <ProductFeature key={index} feature={feature}></ProductFeature>)
                }
            </ul>

            {
                !isSelected ? <CustomButton text={"Buy Now"} forBuying={true} onClick={() => { handleSelectedProducts(product) }} disabled={isSelected}></CustomButton> : <button className="btn rounded-2xl w-full bg-green-500 text-emerald-100" disabled><FaCheckCircle className='text-emerald-100' />Subscribed</button>
            }
        </div>
    );
};

export default ProductCard;