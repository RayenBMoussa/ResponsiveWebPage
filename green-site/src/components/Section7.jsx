import React from 'react'
import { motion } from "framer-motion"
import useMediaQuery from '@mui/material/useMediaQuery';
const PixelGrade = () => {
    const changeScale = useMediaQuery('(min-width:660px)')

    return (
        <section className='py-[30px] px-[144px] md:px-[100px] sm:px-[20px]'>
            <div className='flex gap-8 1150:flex-col 1150:items-center 1150:gap-2 '>
                <motion.div initial={{ x: -120, y: -30 }} whileInView={{ x: 0, y: 0 }} transition={{ duration: 0.5 }} >
                    <img src="./pana.png" alt="fr" className='min-w-50' />
                </motion.div>
                <div className='flex flex-col justify-center gap-7'>
                    <div className='flex flex-col 1150:items-center gap-4'>
                        <motion.span initial={{ x: -120, y: -30 }} whileInView={{ x: 0, y: 0 }} transition={{ duration: 0.5 }} className='text-d-grey text-[30px] font-bold 1150:text-center md:text-[25px] sm:text-[23px] mb:text-[20px] smb:text-[14px] '>How to design your site footer like <br /> we did</motion.span>
                        <motion.span  {...(changeScale
                            ? {
                                initial: { x: 40 },
                                whileInView: { x: 0 },
                                transition: { duration: 0.7 }
                            }
                            : {
                                initial: { scale: 0 },
                                whileInView: { scale: 1 },
                                transition: { duration: 0.7 }
                            })} className='text-grey max-w-[630px] mb:text-sm smb:text-[12px] sm:px-[10] '>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</motion.span>
                    </div>
                    <motion.button initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1.2 }} className='bg-primary px-[32px] py-[14px] w-fit rounded-[4px] text-white xl:block xl:m-auto mb:px-[25px]
                  mb:text-[14px]'>Learn more</motion.button>
                </div>
            </div>
        </section>
    )
}

export default PixelGrade