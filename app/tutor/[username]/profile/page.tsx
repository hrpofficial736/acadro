import * as motion from "motion/react-client";
import MyInfo from "./components/MyInfo";
import AboutMe from "./components/AboutMe";
import ContactInfo from "./components/ContactInfo";
import EducationalBackground from "./components/EducationalBackground";
import Classrooms from "./components/Classrooms";

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


      <div className="flex flex-col lg:grid grid-cols-3 grid-rows-4 gap-5 p-3">
        <AboutMe />
        <ContactInfo />
        <EducationalBackground />
        <Classrooms />
      </div>
    </motion.div>
  );
}
