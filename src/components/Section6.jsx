import React from 'react'
import { motion } from "framer-motion"
const Section6 = () => {
    return (
        <section className='px-[144px] py-12 bg-silver md:px-[90px] mb:px-[50px] smb:px-[20px] ssm:px-0 '>
            <div className='flex items-center justify-between max-w-[1050px] 1150:flex-col 1150:gap-7'>
                <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 0.6 }} className='flex flex-col gap-2 1150:items-center'>
                    <span className='text-d-grey font-bold text-3xl md:text-[25px] mb:text-[20px]'>Helping a local</span>
                    <span className='text-primary font-bold text-3xl md:text-[25px] mb:text-[20px]'>business reinvent itself</span>
                    <span className='md:text-[14px] ssm:text-[11px]'>We reached here with our hard work and dedication</span>
                </motion.div>
                <div className='flex  gap-20 smb:flex-col 1150:gap-11 '>
                    <div className='flex flex-col gap-11 '>
                        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.6 }} className='flex gap-4 items-center'>
                            <img src="./Icon(7).png" alt="icon" className='w-10 h-10 select-none' />
                            <div className='flex flex-col '>
                                <span className='text-d-grey text-2xl font-bold md:text-[20px]'>2,245,341</span>
                                <span className='text-grey mb:text-[10px] font-semibold'>Members</span>
                            </div>
                        </motion.div>
                        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.9 }} className='flex gap-4 items-center'>
                            <img src="./Vector1.png" alt="icon" className='w-8 h-8' />
                            <div className='flex flex-col'>
                                <span className='text-d-grey text-2xl font-bold md:text-[20px]'>828,867</span>
                                <span className='text-grey mb:text-[10px] font-semibold'>Event Bookings</span>
                            </div>
                        </motion.div>

                    </div>
                    <div className='flex flex-col gap-11 '>
                        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.7 }} className='flex gap-4 items-center'>
                            <img src="./Group2.png" alt="icon" className='w-8 h-8' />
                            <div className='flex flex-col '>
                                <span className='text-d-grey text-2xl font-bold md:text-[20px]'>46,328</span>
                                <span className='text-grey mb:text-[10px] font-semibold '>Clubs</span>
                            </div>
                        </motion.div>
                        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }} className='flex gap-4 items-center'>
                            <img src="./Vector2.png" alt="icon" className='w-10 h-8' />
                            <div className='flex flex-col'>
                                <span className='text-d-grey text-2xl font-bold md:text-[20px]'>1,926,436</span>
                                <span className='text-grey mb:text-[10px] font-semibold'>Payments</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Section6