import { React, use, useState } from 'react';
import CustomButton from '../../ui/CustomButton';
import OutlineButton from '../../ui/OutlineButton';
import AllSubscriptions from './AllSubscriptions/AllSubscriptions';
import SelectedSubscriptions from './SelectedSubscriptions/SelectedSubscriptions';
const Subscriptions = ({ subscriptionsPromise, selectedSubscriptions, setSelectedSubscriptions }) => {
    const subscriptions = use(subscriptionsPromise);
    
    const [selectedButton, setSelectedButton] = useState("all");
    
    return (
        <div className='container mx-auto my-10'>
            <div className='flex flex-col justify-center items-center text-center gap-3'>
                <h1 className='font-bold text-3xl text-black'>Simple, Transparent Pricing</h1>
                <p className='text-zinc-500 w-2/3'>Choose the plan that fits your needs. Upgrade or downgrade ANYTIME.</p>
                <div className='flex justify-center items-center gap-2'>
                    {selectedButton === "all" ? <CustomButton text={"Subscriptions"} forBuying={false} ></CustomButton> : <OutlineButton onClick={() => setSelectedButton("all")}>Subscriptions</OutlineButton>}
                    {selectedButton === "selected" ? <CustomButton text={`Cart(${selectedSubscriptions.length})`} forBuying={false}></CustomButton> : <OutlineButton onClick={() => setSelectedButton("selected")}>Cart{`(${selectedSubscriptions.length})`}</OutlineButton>}
                </div>
            </div>
            {selectedButton === "all" ? <AllSubscriptions subscriptions={subscriptions} selectedSubscriptions={selectedSubscriptions} setSelectedSubscriptions={setSelectedSubscriptions}></AllSubscriptions> : <SelectedSubscriptions selectedSubscriptions={selectedSubscriptions} setSelectedSubscriptions={setSelectedSubscriptions}></SelectedSubscriptions>}
        </div>
    );
};

export default Subscriptions;