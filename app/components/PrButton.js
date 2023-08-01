import React from 'react'
import Link from 'next/link'

const PrButton = ({ text, link, onClick, style }) => {
    return (
        <>
            {!link
                ? (
                    <div onClick={onClick}>
                        <div className={`bg-prBlue inline px-12 py-4 cursor-pointer font-medium ${style}`}>{text}</div>
                    </div>
                )
                : (
                    <div>
                        <Link href={link} className={`bg-prBlueinline px-12 py-4 font-medium cursor-pointer ${style}`}>{text}</Link>
                    </div>
                )}
        </>
    )
}

export default PrButton