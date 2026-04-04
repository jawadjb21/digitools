import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import ProductFeature from './ProductFeature';
import CustomButton from './CustomButton';
import ProductTag from './ProductTag';
import IconDisplay from './IconDisplay';

const SubscriptionCard = ({ subscription, selectedSubscriptions, setSelectedSubscriptions, carousel }) => {

    const isSelected = selectedSubscriptions.some(sub => sub.id === subscription.id)
    const handleSelectedSubscriptions = (subscription) => {
        const newSelectedSubscriptions = [...selectedSubscriptions];
        if (!newSelectedSubscriptions.includes(subscription)) {
            newSelectedSubscriptions.push(subscription);
        }
        setSelectedSubscriptions(newSelectedSubscriptions);
        toast.success(`${subscription.name} has been selected!`);
    }
    const card = (
        <div id={subscription.id} className='relative h-full w-full flex flex-col gap-1 justify-start items-start border border-zinc-200 rounded-2xl text-left p-4 bg-white shadow-sm hover:shadow-md transition-shadow'>
            <IconDisplay icon={subscription.icon}></IconDisplay>
            <h5 className='font-bold text-xl text-zinc-800'>{subscription.name}</h5>
            <p className='font-medium text-zinc-500'>{subscription.description}</p>
            <p className='text-zinc-400 text-sm'>{`$`}<span className='font-bold text-2xl text-zinc-800'>{subscription.price}</span>{`/${subscription.period}`}</p>
            <ul className='list-none h-full'>
                {
                    subscription.features.map((feature, index) => <ProductFeature key={index} feature={feature}></ProductFeature>)
                }
            </ul>
            {
                !isSelected ? <CustomButton text={"Subscribe"} forBuying={true} onClick={() => handleSelectedSubscriptions(subscription)} disabled={isSelected}></CustomButton> : <button className="btn rounded-2xl w-full bg-green-500 text-emerald-100" disabled><FaCheckCircle className='text-emerald-100' />Subscribed</button>
            }
        </div>
    )
    return (
        <>
            {
                !carousel ? card : <div className='carousel-item shrink-0 w-full px-4'>{card}</div>
            }
        </>
    );
};

export default SubscriptionCard;