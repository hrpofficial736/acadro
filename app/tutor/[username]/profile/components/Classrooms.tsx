
import ProfileSectionCard from '@/components/cards/ProfileSectionCard'
import React from 'react'

const Classrooms = () => {
  return (
    <ProfileSectionCard
      header="My Classrooms"
      className="row-span-4 col-start-3 row-start-1"
      component={
      <div className="flex flex-col divide-y divide-secondaryText/10 gap-2">
        <h1 className="font-semibold text-primaryText hover:underline p-3 cursor-pointer hover:text-primary">Classroom 1</h1>
        <h1 className="font-semibold text-primaryText hover:underline p-3 cursor-pointer hover:text-primary">Classroom 2</h1>
        <h1 className="font-semibold text-primaryText hover:underline p-3 cursor-pointer hover:text-primary">Classroom 3</h1>
        <h1 className="font-semibold text-primaryText hover:underline p-3 cursor-pointer hover:text-primary">Classroom 4</h1>
        <h1 className="font-semibold text-primaryText hover:underline p-3 cursor-pointer hover:text-primary">Classroom 5</h1>
        <h1 className="font-semibold text-primaryText hover:underline p-3 cursor-pointer hover:text-primary">Classroom 6</h1>
      </div>}
    />
  )
}

export default Classrooms
