import React from 'react'
import Blur from '../components/Blur'
import { articles_data } from '../components/articles_data'
import Link from 'next/link'

const index = () => {
  return (
    <div>
      {/* Hero */}
      <div className='w1 text-left !mb-[250px] !mt-[250px]'>
        <h1 className='text-[50px] sm:text-[40px] font-semibold'>How we impact your <br />
          business</h1>
        <p className='text-pt text-[14px] my-10 mb-20'>Read the articles about how we helped our clients to increase their revenue</p>
        <Blur style="bg-[#D9DC37] blur-[150px] bottom-[180px] left-[-50px]" />
        {articles_data.map((e) => {
          return (
            <Link href={`/articles/${e.id}`}>
              <div className='flex gap-10'>
                <div className={`bg-${e.bckColor} mb-20 px-10 py-4 rounded-2xl flex justify-center items-center`}>
                  {e.img !== null && <img className='w-[200px]' src={e.img.src} />}
                </div>
                <div>
                  <h1 className='font-semibold text-[20px]'>{e.title}</h1>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default index