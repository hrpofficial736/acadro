import CustomTextField from '@/components/form-fields/CustomTextField'
import React from 'react'

const PersonalInfo = () => {
  return (
    <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-primaryText/80">
          Personal Info
        </h1>
        <p className="text-xs text-secondaryText mt-[2px]">
          Edit all your personal info.
        </p>
        <div className="flex flex-col lg:grid grid-cols-2 gap-5 mt-7">
          <CustomTextField
            name="name"
            className="col-span-1"
            type="text"
            value={""}
            label="Full Name"
            placeholder="Enter your full name"
            onChanged={() => {}}
          />

          <CustomTextField
            name="username"
            className="col-span-1"
            type="text"
            value={""}
            label="Username"
            placeholder="Enter your username"
            onChanged={() => {}}
          />

          <CustomTextField
            name="about"
            className="col-span-2"
            type="text"
            value={""}
            label="About me"
            placeholder="Describe yourself in 1 line..."
            onChanged={() => {}}
          />
        </div>
      </div>
  )
}

export default PersonalInfo
