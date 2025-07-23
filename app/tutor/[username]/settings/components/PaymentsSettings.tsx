"use client";

import { motion } from "motion/react";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import React from "react";

const PaymentsSettings = () => {
  return (
    <motion.div initial={{ x: +100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }} className="flex flex-col gap-16 w-full lg:w-[50%]">
      {/* Current Plan */}
      <div className="bg-surface flex items-center justify-between px-4 py-3 rounded-xl outline-2 outline-border">
        <div className="text-sm font-semibold text-primaryText/80">
          Current Plan
          <br />
          <p className="text-xs text-secondaryText font-normal">
            Manage your subscription plan on Acadro.
          </p>
        </div>

        <PrimaryButton
          text="Change plan"
          onPressed={() => {}}
          className="text-sm rounded-lg"
        />
      </div>

      {/* Payment Method */}

      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="font-semibold text-primaryText/80">
            Payment Method
            <br />
            <p className="text-xs text-secondaryText font-normal">
              Manage your payment methods to ensure seamless payments.
            </p>
          </div>
          <PrimaryButton
            text="Change payment method"
            onPressed={() => {}}
            className="text-xs rounded-lg max-md:w-[250px]"
          />
        </div>

        {/* Method */}
        <div className="bg-surface flex items-center justify-between px-4 py-3 rounded-xl outline-2 outline-border">
          <span className="text-primaryText/80 text-sm font-semibold">
            UPI ID
          </span>
          <span className="text-primaryText text-sm font-semibold">
            hrpofficial736
          </span>
        </div>
      </div>

      {/* Payout history */}
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="font-semibold text-primaryText/80">
            Payout history
            <br />
            <p className="text-xs text-secondaryText font-normal">
              View your payment history.
            </p>
          </div>
        </div>

        {/* Method */}
        <div className="bg-surface flex items-center justify-between px-4 py-3 rounded-xl outline-2 outline-border">
          <span className="text-primaryText/80 text-sm font-semibold">
            From viratkohli18
            <br />
            <p className="text-xs text-secondaryText font-normal">
              Today, 03.15 PM
            </p>
          </span>
          <span className="text-accent text-sm font-semibold">+ $250</span>
        </div>

        <div className="bg-surface flex items-center justify-between px-4 py-3 rounded-xl outline-2 outline-border">
          <span className="text-primaryText/80 text-sm font-semibold">
            From viratkohli18
            <br />
            <p className="text-xs text-secondaryText font-normal">
              Yesterday, 09.15 AM
            </p>
          </span>
          <span className="text-accent text-sm font-semibold">+ $200</span>
        </div>

        <div className="bg-surface flex items-center justify-between px-4 py-3 rounded-xl outline-2 outline-border">
          <span className="text-primaryText/80 text-sm font-semibold">
            From viratkohli18
            <br />
            <p className="text-xs text-secondaryText font-normal">
              July 16, 2025, at 03.15 PM
            </p>
          </span>
          <span className="text-accent text-sm font-semibold">+ $450</span>
        </div>



        
      </div>
    </motion.div>
  );
};

export default PaymentsSettings;
