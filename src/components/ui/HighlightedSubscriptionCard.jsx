import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import ProductFeature from './ProductFeature';
import CustomButton from './CustomButton';
import ProductTag from './ProductTag';
import IconDisplay from './IconDisplay';


const HighlightedSubscriptionCard = ({ subscription, selectedSubscriptions, setSelectedSubscriptions, carousel }) => {
    
    const isSelected = selectedSubscriptions.some(sub => sub.id === subscription.id);

    const handleSelectedSubscriptions = (subscription) => {
        const newSelectedSubscriptions = [...selectedSubscriptions, subscription];
        setSelectedSubscriptions(newSelectedSubscriptions);
        toast.success(`${subscription.name} has been selected!`);
    }
    const card = (
        <div id={subscription.id} className='relative h-full w-full flex flex-col gap-1 justify-start items-start border border-zinc-200 rounded-2xl text-left p-4 bg-linear-to-r from-[#4F39F6] to-[#627382] shadow-sm hover:shadow-md transition-shadow'>
            <ProductTag tag={subscription.tagType} popularSubscription={true}></ProductTag>
            <IconDisplay icon={subscription.icon}></IconDisplay>
            <h5 className='font-bold text-xl text-white'>{subscription.name}</h5>
            <p className='font-medium text-white'>{subscription.description}</p>
            <p className='text-white text-sm'>{`$`}<span className='font-bold text-2xl text-white'>{subscription.price}</span>{`/${subscription.period}`}</p>
            <ul className='list-none h-full'>
                {
                    subscription.features.map((feature, index) => <ProductFeature key={index} feature={feature} popularSubscription={true}></ProductFeature>)
                }
            </ul>
            {
                !isSelected ? <CustomButton text={"Subscribe"} forBuying={true} onClick={() => handleSelectedSubscriptions(subscription)} disabled={isSelected}></CustomButton> : <button className="btn rounded-2xl w-full bg-green-500 text-emerald-100" disabled><FaCheckCircle className='text-emerald-100'/>Subscribed</button>
            }
        </div>
    );
    return (
        <>
            {
                !carousel ? card : <div className='carousel-item shrink-0 w-full px-4'> {card} </div>
            }
        </>
    );
};

export default HighlightedSubscriptionCard;