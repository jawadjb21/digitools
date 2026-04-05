import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import ProductFeature from './ProductFeature';
import CustomButton from './CustomButton';
import ProductTag from './ProductTag';
import IconDisplay from './IconDisplay';


const SubscriptionCard = ({ subscription, selectedSubscriptions, setSelectedSubscriptions, carousel }) => {

    const isThisSelected = selectedSubscriptions.some(sub => sub.id === subscription.id);
    let isAnySelected = false;
    if (selectedSubscriptions.length > 0) {
        isAnySelected = true;
    }
    const handleSelectedSubscriptions = (subscription) => {
        if (isAnySelected) {
            toast.warning(`You already have a subscription!`);
        } else {
            setSelectedSubscriptions([subscription]);
            toast.success(`Subscribed to ${subscription.name} !`);
        }
    }
    const card = (
        <div id={subscription.id} className={`relative h-full w-full flex flex-col gap-1 justify-start items-start border border-zinc-200 rounded-2xl text-left p-4 ${subscription.tagType !== "popular" ? "bg-white" : "bg-linear-to-r from-[#4F39F6] to-[#627382]"} shadow-sm hover:shadow-md transition-shadow`}>
            <IconDisplay icon={subscription.icon}></IconDisplay>
            <h5 className={`font-bold text-xl ${subscription.tagType !== "popular" ? "text-zinc-800" : "text-white"}`}>{subscription.name}</h5>
            <p className={`font-medium ${subscription.tagType !== "popular" ? "text-zinc-500" : "text-white"}`}>{subscription.description}</p>
            <p className={`${subscription.tagType !== "popular" ? "text-zinc-400" : "text-white"} text-sm`}>{`$`}<span className={`font-bold text-2xl ${subscription.tagType !== "popular" ? "text-zinc-800" : "text-white"}`}>{subscription.price}</span>{`/${subscription.period}`}</p>
            <ul className='list-none h-full'>
                {
                    subscription.features.map((feature, index) => <ProductFeature key={index} feature={feature} popularSubscription={subscription.tagType === "popular"}></ProductFeature>)
                }
            </ul>
            {
                !isThisSelected ?
                    <CustomButton text={"Subscribe"} forBuying={true} onClick={() => handleSelectedSubscriptions(subscription)} popularSubscription={subscription.tag === "popular"}></CustomButton> :
                    <button className="btn rounded-2xl w-full bg-red-500 text-emerald-100" disabled>Unsubscribe</button>
            }
        </div>
    );

    // const popularCard = (
    //     <div id={subscription.id} className='relative h-full w-full flex flex-col gap-1 justify-start items-start border border-zinc-200 rounded-2xl text-left p-4  shadow-sm hover:shadow-md transition-shadow'>
    //         <ProductTag tag={subscription.tagType} popularSubscription={true}></ProductTag>
    //         <IconDisplay icon={subscription.icon}></IconDisplay>
    //         <h5 className='font-bold text-xl text-white'>{subscription.name}</h5>
    //         <p className='font-medium text-white'>{subscription.description}</p>
    //         <p className='text-white text-sm'>{`$`}<span className='font-bold text-2xl text-white'>{subscription.price}</span>{`/${subscription.period}`}</p>
    //         <ul className='list-none h-full'>
    //             {
    //                 subscription.features.map((feature, index) => <ProductFeature key={index} feature={feature} popularSubscription={true}></ProductFeature>)
    //             }
    //         </ul>
    //         {
    //             !isThisSelected ?
    //                 <CustomButton text={"Subscribe"} forBuying={true} onClick={() => handleSelectedSubscriptions(subscription)} popularSubscription={true}></CustomButton> :
    //                 <button className="btn rounded-2xl w-full bg-red-500 text-emerald-100" disabled>Unsubscribe</button>
    //         }
    //     </div>
    // );

    return (
        <>
            {
                !carousel ?
                    card :
                    <div className='carousel-item shrink-0 w-full px-4'>{card}</div>
            }
        </>
    );
};

export default SubscriptionCard;