'use client'
import React, { useState } from 'react'
import { articles_content } from '../../components/articles_content'
import { useParams } from 'next/navigation'
import Blur from '../../components/Blur'
import parse, { domToReact } from 'html-react-parser';

const page = () => {
    const param = useParams()

    const article = articles_content.filter((e) => {
        return e.id == param.id
    })[0]

    const text = parse(article.text)

    return (
        <div className='w1 text-left !mb-[250px] !mt-[250px]'>
            <h1 className='text-[50px] sm:text-[40px] font-semibold mb-20'>{article.title}</h1>
            <div className='mb-[200px] relative'>
                <Blur style="bg-[#D9DC37] blur-[150px] bottom-[0px] left-[-450px]" />
                <div className='font-medium text-[18px] mb-10'>Clients results:</div>
                <div className='flex gap-20 mb-14 sm:flex-col'>
                    {Object.keys(article.results).map(key => {
                        return <div>
                            <div className='text-prBlue font-medium text-[28px]'>{article.results[key]}</div>
                            <div className='text-[20px]'>{key}</div>
                        </div>
                    })}
                </div>
                <div className='flex gap-20 sm:flex-col'>
                    {Object.keys(article.saved).map(key => {
                        return <div>
                            <div className='text-prBlue font-medium text-[28px]'>{article.saved[key]}</div>
                            <div className='text-[20px]'>{key}</div>
                        </div>
                    })}
                </div>
            </div>
            <div>{text}</div>
        </div>
    )
}

export default page