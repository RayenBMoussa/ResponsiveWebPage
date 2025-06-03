import React from 'react'
import { HiMiniArrowLongRight } from 'react-icons/hi2'

const Section10 = () => {
    return (
        <section className='py-8 px-36 bg-silver lg:px-16 md:px-8 ssm:px-3 '>
            <div className='text-center flex flex-col items-center gap-9 '>
                <div className='flex flex-col gap-3 text-6xl text-black font-semibold md:text-5xl mb:text-4xl smb:text-3xl ssm:text-2xl'>
                    <span >Pellentesque suscipit </span>
                    <span> fringilla libero eu.</span>
                </div>
                <button className='text-white bg-shade1 px-[22.5px] py-[10px] rounded-[3px] flex items-center justify-center gap-2 ssm:px-4 '>
                    <span className='font-normal ssm:text-sm'>Get a Demo</span> <HiMiniArrowLongRight className='p-0' size={20} />
                </button>
            </div>
        </section>
    )
}

export default Section10