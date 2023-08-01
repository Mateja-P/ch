import React, { useEffect, useState } from 'react'
import Button from './Button'
import Blur from './Blur'
import { motion } from 'framer-motion'
import { supabase } from '../../supabase/supabase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Cookies from 'js-cookie'
import vImg from '../../public/Modal/v.png'
import nvImg from '../../public/Modal/nv.png'

const Modal = ({ purpose, setModal }) => {
    const [input, setInput] = useState({
        email: '',
        password: ''
    })
    const [visibleInput, setVibisle] = useState(false)

    const router = useRouter()
    const path = usePathname()

    useEffect(() => {
        return () => {
            setInput({
                email: '',
                password: ''
            })
        }
    }, [])

    const getUser = async (email, password) => {
        const { data, error } = await supabase
            .from('users')
            .select()

        const userExist = data.filter((e) => {
            return e.email == email
        })

        let resObj = {
            bool: false,
            res: ''
        }

        if (userExist.length == 1) {
            const { data, error } = await supabase
                .from('users')
                .select()
                .filter('email', 'in', `(${email})`)

            const passValidation = passwordRegex(password)
            if (passValidation) {
                if (data[0].password == password) {
                    resObj = {
                        bool: true
                    }
                } else {
                    resObj = {
                        bool: false,
                        res: `Wrong password for user ${email}`
                    }
                }
            } else {
                resObj = {
                    bool: false,
                    res: `Password is not satisfied`
                }
            }
        } else if (userExist.length == 0) {
            resObj = {
                bool: false,
                res: `User with email ${email} doesnt exist`
            }
        }
        return resObj
    }

    const checkDb = async (input) => {
        let { data: users, error } = await supabase
            .from('users')
            .select('email')

        if (users.length > 0) {
            const matchedEmail = users.filter((e) => {
                return e.email == input
            })

            if (matchedEmail.length == 1) return false
            else if (matchedEmail.length == 0) return true
        }
    }

    const emailRegex = (input) => {
        const regex = /^([a-zA-Z0-9_.-]+)@([\da-zA-Z.-]+).([a-zA-Z.]{2,6})$/
        if (regex.test(input)) return true
        else return false
    }

    const passwordRegex = (input) => {
        const regex = /^(?=.*\d).{5,16}$/
        if (regex.test(input)) return true
        else return false
    }

    const signUpFunction = async () => {
        const checkEmail = await checkDb(input.email)
        if (input.email !== '' && input.password !== '') {
            const emailValidation = emailRegex(input.email)
            if (emailValidation) {
                if (checkEmail) {
                    const passValidation = passwordRegex(input.password)
                    if (passValidation) {
                        const { data, error } = await supabase
                            .from('users')
                            .insert([
                                { email: input.email, password: input.password },
                            ])
                            .select()
                            .then(() => {
                                toast.success('Account Created Successfully, You will be redirected to Log In with your credentials', {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "dark",
                                })

                                setInput({
                                    email: '',
                                    password: ''
                                })

                                setTimeout((e) => {
                                    setModal({
                                        purpose: 'Log In',
                                        open: true
                                    })
                                }, 2500)
                            })
                    } else {
                        toast.info('Password is not satisfied', {
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
                    toast.info(`User with email: ${input.email} already exists. Try logging in.`, {
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
            toast.info('All inputs are required', {
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
    }

    const logInFunction = async () => {
        const users = await getUser(input.email, input.password)
        if (input.email !== '' && input.password !== '') {
            const emailValidation = emailRegex(input.email)
            if (emailValidation) {
                if (users.bool) {
                    const { data, error } = await supabase
                        .from('users')
                        .select()
                        .filter('email', 'in', `(${input.email})`)

                    const { services, email } = data[0]

                    const user = {
                        services,
                        email
                    }
                    Cookies.set('user', JSON.stringify(user))

                    router.push('/platform')
                } else {
                    toast.info(users.res, {
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
            toast.info('All inputs are required', {
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
    }

    return (
        <motion.div className='fixed w-screen h-screen top-0 left-0 bottom-0 flex justify-center items-center bg-black-rgba z-[999]'>
            <ToastContainer />
            <div className='relative bg-bgBlack px-10 py-10 !z-[999] sm:w-full overflow-hidden'>
                <div className='absolute top-[20px] right-[20px] cursor-pointer' onClick={() => {
                    setModal({
                        purpose: null,
                        open: false
                    })
                }}>X</div>
                <div className='text-center text-[30px] mb-10 font-semibold'>{purpose}</div>
                <div className='z-[999] relative'>
                    <div>
                        <div className='font-regular text-[20px] mb-3'>Email</div>
                        <input onChange={(e) => setInput({ ...input, email: e.target.value })} value={input.email} placeholder='Type your email...' className='border bg-transparent w-[500px] sm:w-full py-3 pl-1' />
                    </div>
                    <div className='mt-8 mb-10'>
                        <div className='font-regular text-[20px] mb-3'>Password</div>
                        <div className='flex items-center'>
                            <input type={`${visibleInput ? 'text' : 'password'}`} onChange={(e) => setInput({ ...input, password: e.target.value })} value={input.password} placeholder='Type your password...' className='border bg-transparent w-[500px] sm:w-full py-3 pl-1' />
                            <div onClick={() => {
                                setVibisle(!visibleInput)
                            }}>
                                {visibleInput ? <div>
                                    <img className='h-[30px] sm:h-[25px] ml-3' src={nvImg.src} />
                                </div> : <div>
                                    <img className='h-[30px] sm:h-[25px] ml-3' src={vImg.src} />
                                </div>}
                            </div>
                        </div>
                        {purpose == 'Sign Up' && (
                            <div className='mt-3'>
                                <p className='text-pt my-1 text-[13px]'>* 5 - 16 characters</p>
                                <p className='text-pt my-1 text-[13px]'>* At least 1 number</p>
                            </div>
                        )}
                    </div>
                    <div className='flex justify-end'>
                        <Button text='Submit' type={true} onClick={() => {
                            if (purpose == 'Sign Up') signUpFunction()
                            if (purpose == 'Log In') logInFunction()
                        }} />
                    </div>
                </div>
                <Blur style="bg-[#814CC6] blur-[150px] bottom-[-100px] right-[-50px] !z-[900]" />
            </div>
        </motion.div>
    )
}

export default Modal