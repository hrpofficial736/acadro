import ProfileSectionCard from "@/components/cards/ProfileSectionCard";
import React from "react";

const EducationalBackground = () => {
  return (
    <ProfileSectionCard
      header="Educational Background"
      className="row-span-4 col-start-2 row-start-1"
      component={
        <div className="flex flex-col divide-y divide-secondaryText/10 gap-2">

          <div className="p-3 flex items-center gap-3">
            <div className="bg-primary rounded p-7" />
            <div className="flex flex-col">
              <h1 className="text-lg text-primaryText/90 font-semibold">Guru Gobind Singh Indraprastha University</h1>
              <h1 className="text-sm text-primaryText/70 font-semibold">B.Tech (Computer Science and Engineering)</h1>
              <p className="text-sm text-primaryText/80 font-normal">Sept 2023 - Present</p>
            </div>
          </div>

          <div className="p-3 flex items-center gap-3">
            <div className="bg-primary rounded p-7" />
            <div className="flex flex-col">
              <h1 className="text-lg text-primaryText/90 font-semibold">Guru Gobind Singh Indraprastha University</h1>
              <h1 className="text-sm text-primaryText/70 font-semibold">B.Tech (Computer Science and Engineering)</h1>
              <p className="text-sm text-primaryText/80 font-normal">Sept 2023 - Present</p>
            </div>
          </div>

          <div className="p-3 flex items-center gap-3">
            <div className="bg-primary rounded p-7" />
            <div className="flex flex-col">
              <h1 className="text-lg text-primaryText/90 font-semibold">Guru Gobind Singh Indraprastha University</h1>
              <h1 className="text-sm text-primaryText/70 font-semibold">B.Tech (Computer Science and Engineering)</h1>
              <p className="text-sm text-primaryText/80 font-normal">Sept 2023 - Present</p>
            </div>
          </div>


        </div>
      }
    />
  );
};

export default EducationalBackground;
