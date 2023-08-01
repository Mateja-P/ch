'use client'
import React, { useState } from 'react'
import Button from '../components/Button'
import Link from 'next/link'
import chatbotImg from '../../public/platform/chatbot.png'
import gearImg from '../../public/platform/gear.png'
import Tooltip from '@mui/material/Tooltip';
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const NotLoggedIn = () => {
    return (
        <div className='flex h-screen justify-center items-center w-full'>
            <div>
                <div>It looks like you are not logged in</div>
                <Button type={true} text='Get back to log in' />
            </div>
        </div>
    )
}

const WelcomeComponent = () => {
    const cookie_data = JSON.parse(Cookies.get('user'))

    return (
        <div className='flex h-screen justify-center items-center w-full'>
            {cookie_data.services == null
                ? (
                    <div>
                        <div>It looks like you didnt buy any service</div>
                        <Button type={true} text='Get back to find what you need' />
                    </div>
                )
                : <div>Welcome to our platform, here you can access your services</div>
            }
        </div>
    )
}

const Menu = () => {
    const [openMenu, setOpenMenu] = useState()

    const router = useRouter()

    return (
        <div className='absolute top-[20px] right-[20px]'>
            <div className='relative'>
                <div
                    className="flex flex-col justify-between w-5 h-5 z-[3]"
                    onClick={() => setOpenMenu(!openMenu)}>
                    <div
                        className={`w-full h-0.5 transition-all bg-[#D9D9D9] duration-200 ease-in ${openMenu ? "rotate-[-45deg] translate-y-[9px]" : ""
                            }`}></div>
                    <div
                        className={`w-full h-0.5 bg-[#D9D9D9] transition-all duration-200 ease-in ${openMenu ? "opacity-0" : ""
                            }`}></div>
                    <div
                        className={`w-full h-0.5 bg-[#D9D9D9]  transition-all duration-200 ease-in ${openMenu ? "rotate-45 translate-y-[-9px]" : ""
                            }`}></div>
                </div>
                <div
                    className={`${openMenu ? "scale-1" : "scale-0"
                        } absolute top-[200%] !w-auto right-0 w-full bg-white rounded-md overflow-hidden  transition-all duration-100 ease-in`}>
                    <Link
                        href="/"
                        className="hover:bg-[#f9f9f9] flex items-center gap-2 text-black py-5 border-b px-2">
                        <div className="font-semibold">Send Message</div>
                    </Link>
                    <Link
                        href="/"
                        className="hover:bg-[#f9f9f9] flex items-center gap-2 text-black py-5 border-b px-2">
                        <div className="font-semibold">Home</div>
                    </Link>
                    {Cookies.get('user') && (
                        <div
                        onClick={() => {
                            Cookies.remove('user')
                            router.push('/')
                            // location.reload()
                        }}
                            className="hover:bg-[#f9f9f9] text-black flex items-center gap-2 py-5 px-2 cursor-pointer">
                            <div className="font-semibold">Logout</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const Chatbot = () => {
    const cookie_data = JSON.parse(Cookies.get('user'))

    return (
        <div className='p-10'>
            {cookie_data.services.map((e) => {
                if (e.service == 'chatbots') {
                    return (
                        <>
                            <div className='flex items-center gap-[150px] md:gap-10 md:flex-col'>
                                <div className='font-semibold text-[20px]'>
                                    You have {cookie_data.services[0].has.length} chatbots on the platform
                                </div>
                                <Button type={true} text='Need more chatbots?' />
                            </div>
                            <div className='grid grid-cols-4 gap-10 mt-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                                {e.has.map((el) => {
                                    return (
                                        <div className='bg-[#505050] rounded-md p-5'>
                                            <div className='my-3 font-medium'>Chatbot name: {el.name}</div>
                                            <div className='my-3 font-medium'>Chatbot image: <img className='w-[20px]' src={el.img} /></div>
                                            <div className='text-[14px] mt-10'>{el.text}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    )
                } else {
                    return (
                        <div>You dont have any chat running</div>
                    )
                }
            })}
        </div>
    )
}

const Automatation = () => {
    const cookie_data = JSON.parse(Cookies.get('user'))

    return (
        <div className='p-10'>
            {cookie_data.services.map((e) => {
                if (e.service == 'automatation') {
                    return (
                        <>
                            <div className='flex items-center gap-[150px] md:gap-10 md:flex-col'>
                                <div className='font-semibold text-[20px]'>
                                    You have {cookie_data.services[0].has.length} chatbots on the platform
                                </div>
                                <Button type={true} text='Need more chatbots?' />
                            </div>
                            <div className='grid grid-cols-4 gap-10 mt-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                                {e.has.map((el) => {
                                    return (
                                        <div className='bg-[#505050] rounded-md p-5'>
                                            <div className='my-3 font-medium'>Chatbot name: {el.name}</div>
                                            <div className='my-3 font-medium'>Chatbot image: <img className='w-[20px]' src={el.img} /></div>
                                            <div className='text-[14px] mt-10'>{el.text}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    )
                } else {
                    return (
                        <div className='flex h-screen justify-center items-center w-full'>You dont have Automatation process running</div>
                    )
                }
            })}

        </div>
    )
}

const page = () => {
    const [serviceType, setType] = useState('')
    // const cookie_data = JSON.parse(Cookies.get('user'))
    let cookie_data;
    if(Cookies.get('user')) {
        cookie_data = JSON.parse(Cookies.get('user'))
    }

    return (
        <>
            <Menu />
            {Cookies.get('user') ? (
                <div className='flex md:flex-col'>
                    {cookie_data.services !== null && (
                        <div className='pt-[150px] md:pt-0 md:flex bg-[#505050] px-2 h-screen md:h-auto'>
                            <Tooltip title='Chatbots' placement='right'>
                                <div className={`${serviceType == 'chatbot' && 'bg-bgBlack'} cursor-pointer p-2 rounded-full mb-5 md:mb-0`} onClick={() => {
                                    setType('chatbot')
                                }}>
                                    <img className='w-[40px]' src={chatbotImg.src} />
                                </div>
                            </Tooltip>
                            <Tooltip title='Automatation' placement='right'>
                                <div className={`${serviceType == 'automatation' && 'bg-bgBlack'} cursor-pointer p-2 rounded-full mb-5 md:mb-0`} onClick={() => {
                                    setType('automatation')
                                }}>
                                    <img className='w-[40px]' src={gearImg.src} />
                                </div>
                            </Tooltip>
                        </div>
                    )}
                    <div className='flex-1'>
                        {serviceType == '' && <WelcomeComponent />}
                        {serviceType == 'chatbot' && <Chatbot />}
                        {serviceType == 'automatation' && <Automatation />}
                    </div>
                </div>
            ) : (
                <NotLoggedIn />
            )}
        </>
    )
}

export default page