import CountryDropDown from '@/components/dropdowns/CountryDropDown'
import DialCodeDropDown from '@/components/dropdowns/DialCodeDropDown'
import React from 'react'

const ContactInfo = () => {
  return (
    <div className="flex flex-col h-[300px]">
        <h1 className="text-lg font-semibold text-primaryText/80">
          Contact Info
        </h1>
        <p className="text-xs text-secondaryText mt-[2px]">
          Edit your contact info.
        </p>

        <div className="flex flex-col 2xl:flex-row items-center gap-10 mt-7">
          {/* Location */}

          <div className="flex flex-col gap-2 self-start">
            <label>Country</label>
            <CountryDropDown />
          </div>

          {/* Phone number */}
          <div className="flex flex-col gap-2 self-start">
            <label htmlFor="phone">Phone Number</label>
            <div className="flex items-center gap-2">
              <DialCodeDropDown />
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="input"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactInfo
