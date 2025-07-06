import * as motion from "motion/react-client";
import MyInfo from "./components/MyInfo";

export default function Profile() {
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
      className="px-4 py-3 f-c-col gap-10 overflow-y-scroll overflow-x-hidden max-lg:mx-auto ml-auto w-full lg:max-w-[90%]"
    >
      <h1 className="text-primaryText/80 text-xl font-bold self-start">
        My Profile
        <br />
        <p className="font-normal text-secondaryText text-xs">
          View and manage your profile.
        </p>
      </h1>

      <MyInfo />
    </motion.div>
  );
}
