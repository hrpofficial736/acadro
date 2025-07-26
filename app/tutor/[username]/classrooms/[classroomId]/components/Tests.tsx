import { PrimaryButton } from '@/components/buttons/PrimaryButton'
import React from 'react'
import { FaPencil } from 'react-icons/fa6'
import { ImBin } from 'react-icons/im'
import { FaHourglassStart, FaPlus } from "react-icons/fa";
import * as motion from "motion/react-client"

const Tests = () => {
  return (
    <motion.section initial={{ x: +100, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }} className="w-full">
        <div className="flex w-[90%] justify-between mt-10">
                <div className="text-primaryText/80 text-xl font-bold self-start">
                  Tests
                <br />
                <p className="font-normal text-secondaryText text-xs">
                  Manage your tests from one centralized menu.
                </p>
                </div>
                <PrimaryButton text="Create new test" icon={<FaPlus />} className="rounded-lg text-sm" onPressed={() => {}} />
              </div>
          <table className="w-[90%] overflow-hidden mt-10">
            <thead className="w-full text-xs text-secondaryText/90">
              <tr>
                <th scope="col" className="px-6 py-4 text-start">
                  Tests
                </th>
                <th scope="col" className="px-6 py-4 text-center">
                  Options
                </th>
                <th scope="col" className="px-6 py-4 text-center">
                  Date
                </th>
                <th scope="col" className="px-6 py-4 text-center">
                  Time
                </th>
              </tr>
            </thead>
    
            <tbody className="uppercase text-primaryText/80 font-semibold text-sm">
              <tr className="cursor-pointer group">
                <td className="px-6 py-4 text-start rounded-xl transition-all duration-200">
                  Physics Test-1
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="f-c-row gap-2 max-2xl:hidden">
                    <PrimaryButton
                      text="Start"
                      icon={<FaHourglassStart />}
                      className="text-xs rounded-lg"
                      onPressed={() => {}}
                    />
                    <PrimaryButton
                      text="Edit"
                      icon={<FaPencil />}
                      className="text-xs rounded-lg"
                      onPressed={() => {}}
                    />
                    <PrimaryButton
                      text="Cancel"
                      icon={<ImBin />}
                      className="from-error to-error/70 text-xs rounded-lg"
                      onPressed={() => {}}
                    />
                  </div>
                </td>
    
                <td className="px-6 py-4 text-center">29-07-2024</td>
                <td className="px-6 py-4 text-center rounded-xl">09:00 AM</td>
              </tr>
    
              <tr className="cursor-pointer group">
                <td className="px-6 py-4 text-start rounded-xl transition-all duration-200">
                  CS Test-1
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="f-c-row gap-2 max-2xl:hidden">
                    <PrimaryButton
                      text="Start"
                      icon={<FaHourglassStart />}
                      className="text-xs rounded-lg"
                      onPressed={() => {}}
                    />
                    <PrimaryButton
                      text="Edit"
                      icon={<FaPencil />}
                      className="text-xs rounded-lg"
                      onPressed={() => {}}
                    />
                    <PrimaryButton
                      text="Cancel"
                      icon={<ImBin />}
                      className="from-error to-error/70 text-xs rounded-lg"
                      onPressed={() => {}}
                    />
                  </div>
                </td>
    
                <td className="px-6 py-4 text-center">29-07-2024</td>
                <td className="px-6 py-4 text-center rounded-xl">09:00 AM</td>
              </tr>
            </tbody>
          </table>
        </motion.section>
  )
}

export default Tests
