import React from 'react'
import Link from 'next/link'

const Button = ({text, type, onClick}) => {
  return (
    <div className='my-10' onClick={onClick}>
        <Link href='/' className={`${type ? 'bg-prBlue' : 'bg-transaprent border border-white'} inline px-12 py-4 cursor-pointer`}>{text}</Link>
    </div>
  )
}

export default Button