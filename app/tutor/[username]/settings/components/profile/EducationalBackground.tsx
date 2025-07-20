import CustomDropDown from '@/components/dropdowns/CustomDropDown'
import CustomTextField from '@/components/form-fields/CustomTextField'
import { months, years } from '@/utils/constants'
import React from 'react'

const EducationalBackground = () => {
  return (
    <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-primaryText/80">
          Educational Background
        </h1>
        <p className="text-xs text-secondaryText mt-[2px]">
          Edit all your personal info.
        </p>

        <CustomTextField
          label="University Name"
          type="text"
          name="university"
          value=""
          className="mt-[20px]"
          placeholder="Enter your university name"
          onChanged={() => {}}
        />

        <CustomTextField
          name="degree"
          type="text"
          value=""
          label="Degree"
          className="mt-5"
          placeholder="Enter the degree name"
          onChanged={() => {}}
        />

        

        <div className="flex max-md:flex-col gap-10 mt-7">
          <div className="flex gap-4">
            <CustomDropDown placeholder="January" listOfOptions={months} label="Start Month" />
            <CustomDropDown placeholder="1970" listOfOptions={years} label="Start Year" />
          </div>



          <div className="flex gap-4">
            <CustomDropDown placeholder="January" listOfOptions={months} label="End Month" />
            <CustomDropDown placeholder="1970" listOfOptions={years} label="End Year" />
          </div>
        </div>
      </div>
  )
}

export default EducationalBackground
