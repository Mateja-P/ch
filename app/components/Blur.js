import React from 'react'

const Blur = ({style}) => {
  return (
    <div className={`${style} absolute h-[200px] w-[200px] z-[-1]`}></div>
  )
}

export default Blur