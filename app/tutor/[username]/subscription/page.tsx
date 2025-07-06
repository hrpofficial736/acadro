import MySubscription from "./components/MySubscription";
import SwitchPlan from "./components/SwitchPlan";
import * as motion from "motion/react-client";

export default function SubscriptionPage() {
  return (
    <motion.div
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
        type: "tween",
      }}
      className="px-4 mt-20 py-3 f-c-col lg:flex-row lg:items-start gap-10 overflow-y-scroll overflow-x-hidden max-lg:mx-auto ml-auto w-full lg:max-w-[90%]"
    >
      <MySubscription />
      <div className="max-lg:hidden h-full w-[1px] border border-primaryText/20 border-dashed" />
      <SwitchPlan />
    </motion.div>
  );
}
