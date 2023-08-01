'use client'
import React, { useState } from 'react'
import Button from '../components/Button'
import Blur from '../components/Blur'
import checkImg from '../../public/chatbot/check.png'
import PrButton from '../components/PrButton'

const index = () => {
  const [price, setPrice] = useState('yearly')

  const pricing = [
    {
      title: 'Starter',
      text: 'The best for startups that doesnt have a lot of clients',
      price_monthly: '35$ USD',
      price_yearly: '25$ USD',
      perks: [
        '20 Apps to connect',
        '3 Premium apps',
        'Update time 15 min',
        'Multi steps automation',
        'Filters and Formatter'
      ]
    },
    {
      title: 'Expert',
      text: 'The best for startups that doesnt have a lot of clients',
      price_monthly: '79$ USD',
      price_yearly: '55$ USD',
      perks: [
        'Unlimited apps to connect',
        'Unlimited premium apps',
        'Update time 2 min',
        'Multi steps automation',
        'Autoreplay for errors '
      ]
    }
  ]

  return (
    <div>
      {/* Hero */}
      <div className='w1 text-center !mt-[250px]'>
        <h1 className='text-[50px] sm:text-[40px] font-semibold'>BlackOpti automates your work on <br />
          all platforms ⚙️</h1>
        <p className='text-pt text-[14px] my-10 mb-16'>Automate the busywork, so you can focus on your job, not your tools. We'll show you how.  🎯</p>
        <PrButton text='See Pricing' link='/automatation#pricing' style='bg-prBlue border border-prBlue hover:bg-transparent' />
        <Blur style="bg-[#D9DC37] blur-[150px] bottom-[50px] left-[-50px]" />
      </div>

      {/* 2 section */}
      <div className='w1 flex md:flex-col gap-20 !mt-[550px]'>
        <div className='flex-1'>
          <h1 className='text-[45px] sm:text-[35px] font-semibold mb-10'>How our automation  <br /> helps your business</h1>
          <p className='text-pt text-[14px]'>Are you struggling to reach your revenue goals? AI is the game-changer you need! Our team of AI experts will analyze your business data and identify opportunities for optimization and expansion. With AI-driven insights, you can make data-driven decisions that ensure every step you take is in the right direction.</p>
        </div>
        <div className='flex-1'>
          <div>
            <div className='flex mb-10 gap-5'>
              <img className='w-[50px]' src={checkImg.src} />
              <div className='text-[17px] font-medium'>Improves efficiency of your work</div>
            </div>
            <div className='flex mb-10  gap-5'>
              <img className='w-[50px]' src={checkImg.src} />
              <div className='text-[17px] font-medium'>Enhanced Marketing</div>
            </div>
            <div className='flex mb-10  gap-5'>
              <img className='w-[50px]' src={checkImg.src} />
              <div className='text-[17px] font-medium'>Improved Sales Process</div>
            </div>
            <div className='flex mb-10  gap-5'>
              <img className='w-[50px]' src={checkImg.src} />
              <div className='text-[17px] font-medium'>Brand Reputation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div id="pricing" className='relative mt-[550px] mb-[550px]'>
        <Blur style="bg-[#D9DC37] blur-[150px] top-[-10px] right-[-50px]" />
        <Blur style="bg-[#FFC0CB] blur-[150px] bottom-[-50px] left-[-50px]" />
        <div className='w1'>
          <div>
            <div className='text-center mb-20'>
              <h1 className='text-[45px] sm:text-[35px] font-semibold mb-10'>Pricing</h1>
              <p className='text-pt text-[14px]'>To have a chatbot you will have to send us a message and our team will respond you within 15 mins</p>
            </div>
            <div className='flex justify-center mb-10'>
              <div className='flex gap-14'>
                <div
                  onClick={() => {
                    setPrice('monthly')
                  }}
                >Monthly</div>
                <div
                  onClick={() => {
                    setPrice('yearly')
                  }}
                >Yearly (Save 33%)</div>
              </div>
            </div>
            <div className='flex justify-center gap-32 md:flex-col'>
              {pricing.map((e) => {
                return (
                  <div className={`bg-white text-black rounded-lg ${e.id == 2 && 'border border-red-500'} py-10 px-4`}>
                    <div className='text-center'>
                      <div className='text-[25px] font-medium mb-4'>{e.title}</div>
                      <div className='text-[15px]'>{e.text}</div>
                    </div>
                    <div className='text-center flex justify-center items-center mb-14 mt-10'>
                      <div className='inline'>
                        <div className='text-[40px] font-semibold text-prBlue'>{price == 'yearly' ? e.price_yearly : e.price_monthly}</div>
                        <div className='text-left text-[#1D1D1D] text-[15px] font-medium'>monthly</div>
                      </div>
                    </div>
                    <div>
                      {e.perks.map((el) => {
                        return (
                          <div className='flex mb-4 gap-2'>
                            <img className='w-[40px] h-auto' src={checkImg.src} />
                            <div className='font-medium'>{el}</div>
                          </div>
                        )
                      })}
                    </div>
                    <div className='flex justify-center items-center text-white'>
                      <Button text='Start Now' type={true} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index