import HowItWorksCard from "@/components/cards/HowItWorksCard";
import { Arrow } from "@/components/icons/Arrow";
import { Grow } from "@/components/icons/Grow";
import { MdiGoogleClassroom } from "@/components/icons/MdiGoogleClassroom";
import { Money } from "@/components/icons/Money";
import { Notes } from "@/components/icons/Notes";
import { Success } from "@/components/icons/Success";
import { Tasks } from "@/components/icons/Tasks";
import { WpfVideoCall } from "@/components/icons/WpfVideoCall";
import SegmentedProgress from "@/components/SegmentedProgress";
import * as motion from "motion/react-client";

export default function HowItWorks() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        type: "tween",
        duration: 0.8,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="w-[80%] f-c-col gap-10 px-5 py-5"
    >
      <div className="f-c-col gap-2">
        <h1 className="text-2xl md:text-4xl text-primaryText font-bold">
          How Acadro Works
        </h1>
        <p className="text-secondaryText text-sm text-center md:text-lg">
          Launch your own digital classroom in minutes — no tech skills needed.
        </p>
      </div>

      <div className="f-c-col relative">
        <SegmentedProgress dimension={1000} />

        <div className="f-c-col md:flex-row md:justify-center md:items-center gap-10 z-10 p-4">
          <HowItWorksCard
            icon={<MdiGoogleClassroom className="size-24" />}
            delay={1}
            title="Create a Classroom"
            description="Start by creating a classroom — like a group chat for your students."
          />
          <HowItWorksCard
            icon={
              <div className="f-c-row gap-5 pb-5">
                <WpfVideoCall className="size-20" />
                <Notes className="size-20" />
                <Tasks className="size-20" />
              </div>
            }
            delay={3}
            title="Add Content & Sessions"
            description="Schedule live sessions, upload notes, and assign tasks."
          />
          <HowItWorksCard
            icon={
              <div className="f-c-row gap-2 pb-5">
                <Money className="size-20" />
                <Arrow className="size-20" />
                <Success className="size-20" />
              </div>
            }
            delay={5.2}
            title="Students Pay & join"
            description="Students pay using secure checkout and join your class."
          />
          <HowItWorksCard
            icon={<Grow className="size-20" />}
            delay={7.5}
            title="Track & Grow"
            description="Track student activity and grow your teaching business."
          />
        </div>
      </div>
    </motion.div>
  );
}
