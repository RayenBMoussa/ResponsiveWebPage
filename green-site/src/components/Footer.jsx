import React from 'react'
import { LuSend } from "react-icons/lu";
import {motion} from "framer-motion"
const Footer = () => {
    return (
        <footer className='py-16 px-32 bg-black lg:px-20 flex justify-between md:flex-col md:items-center md:gap-9 '>
            <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.3}} className='flex flex-col gap-9'>
                <div className='flex items-center gap-1' >
                    <img className='w-10' src="./IconF.png" alt="site" />
                    <h1 className='font-bold text-3xl text-white'>Nexcent</h1>
                </div>
                <span className='text-silver text-sm'>Copyright © 2020 Nexcent ltd. <br />All rights reserved</span>
                <div className='flex gap-3'>
                    <img src="./S1.png" alt="" />
                    <img src="./S2.png" alt="" />
                    <img src="./S3.png" alt="" />
                    <img src="./S4.png" alt="" />
                </div>
            </motion.div>
            <div className='flex gap-20 1150:flex-col smb:gap-10 '>
                <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.3}} className='flex gap-20 md:gap-36 smb:flex-col smb:items-center smb:gap-10 '>
                    <div className='flex flex-col gap-6 '>
                        <span className='text-white text-xl font-semibold'>Company</span>
                        <div className='flex flex-col gap-3 text-silver text-sm smb:text-center'>
                            <span>About us</span>
                            <span>Blog</span>
                            <span>Contact us</span>
                            <span>Pricing</span>
                            <span>Testimonials</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <span className='text-white text-xl font-semibold'>Support</span>
                        <div className='flex flex-col gap-3 text-silver text-sm'>
                            <span>Help center</span>
                            <span>Terms of service</span>
                            <span>Legal</span>
                            <span>Privacy policy</span>
                            <span>Status</span>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.3}} className='flex flex-col gap-8 md:items-center'>
                    <span className='text-white text-xl font-semibold smb:text-center'>Stay up to date</span>
                    <div className='relative w-fit flex items-center'>
                        <span className='absolute right-3'><LuSend color='white' size={18} /></span>
                        <input type='email' placeholder='Your email address' className='rounded-lg bg-grey-box text-silver min-w-64 py-3 px-4 placeholder:text-place' />
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer