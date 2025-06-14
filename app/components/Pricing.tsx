import * as motion from "motion/react-client";

export default function Pricing() {
  return (
    <motion.div initial={{
        opacity: 0,
      }}
      transition={{
        type: "tween",
        duration: 0.8,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="w-[80%] f-c-col gap-10 px-5 py-5">
        <div className="f-c-col gap-2">
        <h1 className="text-2xl md:text-4xl text-primaryText font-bold text-center">
          Simple, Transparent Pricing
        </h1>
        <p className="text-secondaryText text-sm text-center md:text-lg">
          Only pay when you earn. No hidden fees. No upfront cost.
        </p>
      </div>
    </motion.div>
  );
}
