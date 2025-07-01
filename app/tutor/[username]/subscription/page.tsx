import MySubscription from "./components/MySubscription";
import SwitchPlan from "./components/SwitchPlan";

export default function SubscriptionPage () {
    return (
        <div className="px-4 py-3 f-c-col gap-10 overflow-y-scroll overflow-x-hidden max-lg:mx-auto ml-auto w-full lg:max-w-[90%]">
            <MySubscription />
            <SwitchPlan />
        </div>
    )
}


