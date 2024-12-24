import React from 'react'
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion"
const Section9 = () => {
    return (
        <section className='py-8 px-36 lg:px-20 mb:px-8 ssm:px-3'>
            <div className='flex flex-col items-center gap-2 1150:gap-4  '>
                <motion.span initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} className='text-d-grey text-2xl font-bold smb:text-xl ssm:text-lg'>Caring is the new marketing</motion.span>
                <motion.span initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} className='text-center text-grey mb:text-[14px] '>The Nextcent blog is the best place to read about the latest membership insights,<br /> trends and more. See who's joining the community, read about how our community <br /> are increasing their membership income and lot's more.​</motion.span>
                <div className='grid grid-cols-3 gap-5 1150:grid-cols-1 1150:gap-0'>
                    <div>
                        <motion.img initial={{opacity:0,x:-20,y:-10}} whileInView={{opacity:1,x:0,y:0}} transition={{duration:0.9}} className='rounded-lg  ssm:w-56 ssm:mx-auto' src="./1Sec9.webp" alt="zdzd" />
                        <motion.div initial={{opacity:0,x:20,y:10}} whileInView={{opacity:1,x:0,y:-64}} transition={{duration:0.9}} className='flex flex-col gap-3 items-center text-center bg-silver w-fit p-4 rounded-md text-grey font-bold
                         -translate-y-16 mx-auto shadow-xl shadow-shad/30	'>
                            <span className='text-center ssm:text-[13px]'>Creating Streamlined <br />Safeguarding Processes with <br /> OneRen</span>
                            <span className='flex items-center text-[17px] ssm:text-[15px] leading-none font-semibold text-green gap-3 p-1'>Readmore<HiMiniArrowLongRight /> </span>
                        </motion.div>
                    </div>
                    <div>
                        <motion.img initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}} transition={{duration:0.9}} className='rounded-lg  ssm:w-56 ssm:mx-auto' src="./2Sec9.webp" alt="sdd" />
                        <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:-64}} transition={{duration:0.9}} className='flex flex-col text-center gap-3 items-center bg-silver w-fit p-4 rounded-md text-grey font-bold -translate-y-16 mx-auto shadow-xl shadow-shad/30'>
                            <span className='text-center ssm:text-[13px]'>What are your safeguarding <br /> responsibilities and how can <br /> you manage them?</span>
                            <span className='flex items-center text-[17px] ssm:text-[15px] font-semibold text-green gap-3 p-1'>Readmore<HiMiniArrowLongRight /> </span>
                        </motion.div>
                    </div>
                    <div>
                        <motion.img initial={{opacity:0,x:40,y:-10}} whileInView={{opacity:1,x:0,y:0}} transition={{duration:0.9}} className='rounded-lg  ssm:w-56 ssm:mx-auto' src="./3Sec9.webp" alt="sddd" />
                        <motion.div initial={{opacity:0,x:-40,y:10}} whileInView={{opacity:1,x:0,y:-64}} transition={{duration:0.9}} className='flex flex-col text-center gap-3 items-center bg-silver w-fit p-4 rounded-md text-grey 
                        font-bold -translate-y-16 mx-auto shadow-xl shadow-shad/30 '>
                            <span className='text-center ssm:text-[13px]'>Revamping the Membership <br /> Model with Triathlon <br /> Australia</span>
                            <span className='flex items-center text-[17px] ssm:text-[15px] font-semibold text-green gap-3 p-1'>Readmore<HiMiniArrowLongRight /> </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Section9