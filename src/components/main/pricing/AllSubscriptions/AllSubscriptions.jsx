import SubscriptionCard from '../../../ui/SubscriptionCard';

const AllSubscriptions = ({ subscriptions, selectedSubscriptions, setSelectedSubscriptions }) => {

    return (
        <>
            <div className='hidden md:grid md:grid-cols-4 gap-y-3 md:gap-10 place-items-center mx-auto md:max-w-5xl px-5 mt-5'>
                {
                    subscriptions.map(subscription => <SubscriptionCard key={subscription.id} subscription={subscription} selectedSubscriptions={selectedSubscriptions} setSelectedSubscriptions={setSelectedSubscriptions}></SubscriptionCard>)
                }
            </div>
            <div className="carousel w-full md:hidden rounded-box mt-5">
                {
                    subscriptions.map(subscription => <SubscriptionCard key={subscription.id} subscription={subscription} selectedSubscriptions={selectedSubscriptions} setSelectedSubscriptions={setSelectedSubscriptions} carousel={true}></SubscriptionCard>)
                }
            </div >
        </>
    );
};

export default AllSubscriptions;