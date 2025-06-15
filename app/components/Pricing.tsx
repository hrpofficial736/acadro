import PricingCard from "@/components/cards/PricingCard";
import * as motion from "motion/react-client";

export default function Pricing() {
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
      className="w-[80%] flex flex-col gap-10 px-5 py-5"
    >
      <div className="f-c-col gap-2">
        <h1 className="text-3xl md:text-4xl text-primaryText font-bold text-center">
          Simple, Transparent Pricing
        </h1>
        <p className="text-secondaryText text-sm text-center md:text-lg">
          Only pay when you earn. No hidden fees. No upfront cost.
        </p>
      </div>

      <div className="f-c-col gap-20 md:flex-row md:gap-40 ">
        {/* For tutors */}
        <div className="f-c-col md:w-1/2 gap-10">
          <span>
            <h1 className="text-primaryText text-center font-bold text-2xl">For Tutors</h1>
            <p className="text-secondaryText text-center mt-2">
              Teach freely. Upgrade when you’re ready.
            </p>
          </span>
          <div className="f-c-col md:flex-row gap-5">
            <PricingCard
              isFree
              amount={0}
              featuresList={[
                "Up to 2 active classrooms",
                "Up to 50 students",
                "200 MB total storage",
                "20 live sessions per month",
                "Basic Collaborative Tools",
                "Basic Analytics",
                "15% platform fee on student payments",
              ]}
            />
            <PricingCard
              isFree={false}
              amount={3}
              featuresList={[
                "Unlimited no. of classrooms",
                "Unlimited no. of students per classroom",
                "5 GB total storage",
                "Unlimited live sessions per month",
                "Advanced Collaborative Tools",
                "Detailed Analytics",
                "5% platform fee on student payments",
                "Total 2 classrooms",
              ]}
            />
          </div>
        </div>


              {/* For students */}
        <div className="f-c-col md:w-1/2 gap-10">
          <span>
            <h1 className="text-primaryText text-center font-bold text-2xl">
              For Students
            </h1>
            <p className="text-secondaryText text-center mt-2">
              Join the class. Pay once. Learn forever.
            </p>
          </span>
          <div className="f-c-col md:flex-row gap-5">
            <PricingCard
              isFree
              amount={0}
              featuresList={[
                "Up to 5 enrolled classrooms",
                "Unlimited access to Free Classrooms",
                "500 MB total storage",
                "50 live sessions per month",
                "Basic Collaborative Tools",
                "Basic Analytics",
              ]}
            />
            <PricingCard
              isFree={false}
              amount={3}
              featuresList={[
                "Unlimited access to Free classrooms",
                "Unlimited access to Paid classrooms",
                "5 GB total storage",
                "Unlimited live sessions per month",
                "Advanced Collaborative Tools",
                "Detailed Analytics",
                "Total 2 classrooms",
                "Ad-Free Experience"
              ]}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
