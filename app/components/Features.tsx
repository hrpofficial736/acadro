import FeaturesCard from "@/components/cards/FeaturesCard";
import Features1 from "@/public/images/features/features-1.png";
import Features2 from "@/public/images/features/features-2.png";
import Features3 from "@/public/images/features/features-3.jpg";
import Features4 from "@/public/images/features/features-4.jpg";
import * as motion from "motion/react-client";


export default function Features() {
  return (
    <motion.div initial={{
        opacity: 0,
    }} transition={{
        type: "tween",
        duration: 0.8
    }} whileInView={{
        opacity: 1,
    }} className="w-[80%] f-c-col gap-10 px-5 py-5">
      <div className="f-c-col gap-2">
        <h1 className="text-2xl md:text-4xl text-primaryText font-bold">
          What Acadro Offers
        </h1>
        <p className="text-secondaryText text-sm text-center md:text-lg">
          Everything you need to teach, share, and engage — in one place.
        </p>
      </div>
      <div className="f-c-col gap-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-3">
        <FeaturesCard
          title="🎥 Live Sessions"
          description="Schedule live+hosted classes"
          image={Features1.src}
        />
        <FeaturesCard
          title="📁 Share Material"
          description="Upload notes, PDFs, assignments"
          image={Features2.src}
        />
        <FeaturesCard
          title="📊 Track Progress"
          description="See who’s joined, completed tasks"
          image={Features3.src}
        />
        <FeaturesCard
          title="🖊️ Collaborative Board"
          description="Work together in real-time"
          image={Features4.src}
        />
      </div>
    </motion.div>
  );
}
