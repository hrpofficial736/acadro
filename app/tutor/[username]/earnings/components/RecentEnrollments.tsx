
import React from 'react'

const RecentEnrollments = () => {
  return (
    <div className="f-c-col justify-start gap-6 w-full lg:w-1/2 px-5 py-4 bg-gradient-to-b from-surface/40 via-surface/60 to-white/10 rounded-2xl">
      <h1 className="text-primaryText/80 text-xl font-bold self-start">
        Recent Enrollments
        <br />
        <p className="font-normal text-secondaryText text-xs">
          Get details of students enrolling to your classrooms.
        </p>
      </h1>


      <div className="f-c-col gap-3 w-full rounded-2xl text-secondaryText">
        <div className="my-list-item">
          <span>Vinay Solanki (Classroom 2)</span>
          <span className="text-accent">+ $ 250</span>
        </div>

        <div className="my-list-item">
          <span>Vinay Solanki (Classroom 2)</span>
          <span className="text-accent">+ $ 250</span>
        </div>

        <div className="my-list-item">
          <span>Vinay Solanki (Classroom 2)</span>
          <span className="text-accent">+ $ 250</span>
        </div>

        <div className="my-list-item">
          <span>Vinay Solanki (Classroom 2)</span>
          <span className="text-accent">+ $ 250</span>
        </div>
      </div>
    </div>
  )
}

export default RecentEnrollments
