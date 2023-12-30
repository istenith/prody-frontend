import React from 'react'

const Skeleton = ({num}: {num: number}) => {
  return (
    Array.from({ length: num }).map((_, i) => (
      <div key={i} className="flex flex-col gap-4 w-72 h-96 md:w-80 lg:w-80">
        <div className="skeleton h-56 w-full"></div>
        <div className="skeleton h-5 w-28"></div>
        <div className="skeleton h-5 w-full"></div>
        <div className="skeleton h-5 w-full"></div>
        <div className="skeleton h-5 w-full"></div>
      </div>
    ))
  )
}

export default Skeleton
