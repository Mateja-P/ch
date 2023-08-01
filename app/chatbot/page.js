'use client'
import React, { useState } from 'react'
import Button from '../components/Button'
import Blur from '../components/Blur'
import checkImg from '../../public/chatbot/check.png'
import PrButton from '../components/PrButton'
import chatbotImg from "../../public/Landing/chatbot.png";
import customerChatbotImg from "../../public/Landing/customerChatbot.png";
import conversionChatbotImg from "../../public/Landing/conversionChatbot.png";
import Link from 'next/link'
import { supabase } from '../../supabase/supabase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const index = () => {
  const [email, setEmail] = useState('')

  const emailRegex = (input) => {
    const regex = /^([a-zA-Z0-9_.-]+)@([\da-zA-Z.-]+).([a-zA-Z.]{2,6})$/
    if (regex.test(input)) return true
    else return false
  }

  const pricing = [
    {
      id: 1,
      title: 'Starter',
      text: 'The best for startups that doesnt have a lot of clients',
      price: '5$ USD',
      perks: [
        '1000 messages per month',
        'Standard chatbot features',
        '24/7 advanced technical support',
        'E-commerce platform integration',
        'Commitment & volume discounts'
      ]
    },
    {
      id: 2,
      title: 'Professional',
      text: 'The best for startups that doesnt have a lot of clients',
      price: '15$ USD',
      perks: [
        '5000 messages per month',
        'Advanced chatbot features',
        'Customized chatbot solutions',
        'Custom SSO integrations',
        'Commitment & volume discounts'
      ]
    },
    {
      id: 3,
      title: 'Expert',
      text: 'The best for startups that doesnt have a lot of clients',
      price: '45$ USD',
      perks: [
        '10000 messages per month',
        'Guaranteed uptime SLAs',
        'API access for easy integration',
        'Dedicated account manager',
        'Analytics for in-depth insights',
      ]
    }
  ]

  return (
    <div>
      <ToastContainer />
      {/* Hero */}
      <div className='w1 text-center !mt-[250px]'>
        <h1 className='text-[50px] sm:text-[40px] font-semibold'>Boost Your Conversions with<br />
          Smart Chatbot Solutions 🚀</h1>
        <p className='text-pt text-[14px] my-10 mb-16'>Step into the future of customer interactions with our advanced chatbot solutions! Our cutting-edge chatbots are designed to revolutionize your customer service experience.</p>
        {/* <Button type={true} text='See Pricing' /> */}
        <PrButton text='See Pricing' link='/chatbot#pricing' style='bg-prBlue border border-prBlue hover:bg-transparent' />
        <Blur style="bg-[#D9DC37] blur-[150px] bottom-[50px] left-[-50px]" />
      </div>

      {/* 2 section */}
      <div className='w1 flex md:flex-col gap-20 !mt-[550px]'>
        <div className='flex-1'>
          <h1 className='text-[45px] sm:text-[35px] font-semibold mb-10'>How our chatbots help <br /> your business</h1>
          <p className='text-pt text-[14px]'>We deliver tailor-made chatbots that consistently drive growth, efficiency, and customer engagement, resulting in measurable success for your businesses. We prioritize innovation, performance, and dedicated support, ensuring you achieve their goals and form long-lasting partnerships with us.</p>
        </div>
        <div className='flex-1'>
          <div>
            <div className='flex mb-10 gap-5'>
              <img className='w-[50px]' src={checkImg.src} />
              <div className='text-[17px] font-medium'>Instant Customer Engagement</div>
            </div>
            <div className='flex mb-10  gap-5'>
              <img className='w-[50px]' src={checkImg.src} />
              <div className='text-[17px] font-medium'>Personalized Interactions</div>
            </div>
            <div className='flex mb-10  gap-5'>
              <img className='w-[50px]' src={checkImg.src} />
              <div className='text-[17px] font-medium'>Streamlined Sales Process</div>
            </div>
            <div className='flex mb-10  gap-5'>
              <img className='w-[50px]' src={checkImg.src} />
              <div className='text-[17px] font-medium'>Enhanced Customer Support</div>
            </div>
            <div className='flex mb-10  gap-5'>
              <img className='w-[50px]' src={checkImg.src} />
              <div className='text-[17px] font-medium'>Multichannel Accessibility</div>
            </div>
            <div className='flex mb-10  gap-5'>
              <img className='w-[50px]' src={checkImg.src} />
              <div className='text-[17px] font-medium'>Scalability and Cost-Effectiveness</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 section */}
      <div className='!mt-[550px]'>
        <div className='flex flex-col gap-[250px]'>
          <div className="flex w1 md:flex-col gap-10">
            <div className="flex-1">
              <h1 className="text-[35px] sm:text-[25px] font-semibold">
                AI Chatbots For Sales Conversion
              </h1>
              <p className="text-pt text-[14px] mt-10 mb-24">
                A significant number of clients have harnessed the power of our sales conversion chatbot, with over 85% of businesses reporting a substantial increase in lead conversions and a remarkable 40% growth in revenue generation. This impressive adoption rate reflects the effectiveness of our chatbot solutions in driving tangible results and exemplifies the satisfaction our clients experience with the transformative impact on their businesses.
              </p>
              {/* <Button text="Learn more" type={true} /> */}
            </div>
            <div className="flex-1">
              <img className="w-[1400px] md:w-3/4" src={conversionChatbotImg.src} />
            </div>
          </div>
          <div className="relative">
            <Blur style="bg-[#D9DC37] blur-[150px] top-1/2 left-0" />
            <div className="flex w1 md:flex-col gap-10">
              <div className="flex-1">
                <h1 className="text-[35px] sm:text-[25px] font-semibold">
                  AI Chatbots For Customer Interaction
                </h1>
                <p className="text-pt text-[14px] mt-10 mb-24">
                  Our Customer Interaction chatbot has garnered widespread satisfaction among clients, with a staggering 90% of businesses using it to enhance customer engagement and experience. Notably, these businesses have reported an average of 30% increase in sales, showcasing the tangible benefits and value our chatbot brings to their operations.
                </p>
              </div>
              <div className="flex-1">
                <img className="w-[1400px] md:w-3/4" src={customerChatbotImg.src} />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="flex w1 md:flex-col gap-10">
              <div className="flex-1">
                <h1 className="text-[35px] sm:text-[25px] font-semibold">
                  AI Chatbots For Solving Problems
                </h1>
                <p className="text-pt text-[14px] mt-10 mb-24">
                  Our Solving Problems chatbot has left our clients highly satisfied, with an impressive adoption rate of 85% among businesses seeking efficient and effective issue resolution. The chatbot's capability to address and resolve 70% of customer queries autonomously has contributed significantly to enhanced customer satisfaction and streamlined operations.
                </p>
              </div>
              <div className="flex-1">
                <img className="w-[1400px] md:w-3/4" src={chatbotImg.src} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div id="pricing" className='relative mt-[550px]'>
        <Blur style="bg-[#D9DC37] blur-[150px] top-[-10px] right-[-50px]" />
        <Blur style="bg-[#FFC0CB] blur-[150px] bottom-[-50px] left-[-50px]" />
        <div className='w1'>
          <div>
            <div className='text-center mb-20'>
              <h1 className='text-[45px] sm:text-[35px] font-semibold mb-10'>Pricing</h1>
              <p className='text-pt text-[14px]'>Send us email now for a personalized chatbot consultation. Experience the power of AI-driven conversations that supercharge your conversions and create happy, loyal customers.</p>
            </div>
            <div className='flex justify-between gap-16 md:flex-col'>
              {pricing.map((e) => {
                return (
                  <div className={`${e.id == 1 && 'pt-20'} ${e.id == 3 && 'pt-20'} `}>
                    <div className={`bg-white text-black rounded-lg ${e.id == 2 && 'border border-red-500'} py-10 px-8`}>
                      <div className='text-center'>
                        <div className='text-[25px] font-medium mb-4'>{e.title}</div>
                        {/* <div className='text-[15px]'>{e.text}</div> */}
                      </div>
                      <div className='text-center flex justify-center items-center mb-14 mt-10'>
                        <div className='inline'>
                          <div className='text-[40px] font-semibold text-prBlue'>{e.price}</div>
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
                      <div className='flex justify-center items-center text-white mt-10'>
                        <Link href='/chatbot#send-request' className='cursor-pointer'>
                          <div className='bg-prBlue px-8 py-5'>
                            First 60 Days Free
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Send Request */}
      <div id='send-request' className='w1 !mb-[550px] !mt-[550px] relative'>
        <div className='text-center mb-20'>
          <h1 className='text-[45px] sm:text-[35px] font-semibold mb-5'>Send a request</h1>
          <p className='text-pt text-[14px]'>Unlock your business's true potential. Get started on your journey to success today! We will get in touch with you within 15 minutes.</p>
        </div>
        <div className='flex justify-center items-center'>
          <div className='relative inline-block sm:w-full'>
            <div className='mb-5 text-[25px] font-medium'>Email</div>
            <input value={email} onChange={(e) => {
              setEmail(e.target.value)
            }} type='input' placeholder='Type your email...' className='w-[500px] py-2 pl-1 border border-[#fff] bg-transparent sm:w-full' />
            <div className='flex justify-end mt-[40px]'>
              <PrButton text='Send Request' onClick={async () => {
                if (email !== '') {
                  const validateEmail = emailRegex(email)
                  if (validateEmail) {
                    const { data, error } = await supabase
                      .from('chatbot_emails')
                      .insert([
                        { email: email },
                      ])
                      .select()
                      .then(() => {
                        toast.success('Request Sent Successfully', {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                        })

                        setEmail('')
                      })
                  } else {
                    toast.info('Email is not satisfied', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                  }
                } else {
                  toast.info('Email input is required', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                }
              }} />
              <div>
                <div></div>
              </div>
            </div>
            <Blur style="bg-[#814CC6] blur-[150px] bottom-[-150px] right-[-50px] opacity-[0.7]" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default index