import ProfileSectionCard from "@/components/cards/ProfileSectionCard";
import React from "react";

const ContactInfo = () => {
  return (
    <ProfileSectionCard
      header="Contact Info"
      className="row-span-2 col-start-1"
      component={
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-secondaryText text-sm">Location</p>
            <h1 className="font-semibold">New Delhi, India</h1>
          </div>
          <div>
            <p className="text-secondaryText text-sm">Phone no.</p>
            <h1 className="font-semibold">+91-9810180956</h1>
          </div>
        </div>
      }
    />
  );
};

export default ContactInfo;
