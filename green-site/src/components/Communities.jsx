import React from 'react'
import { motion } from 'framer-motion'
const Communities = () => {
    return (
        <section className='py-[30px] px-[144px] md:px-[100px]  mb:px-0 '>
            <motion.div className='flex flex-col gap-4 items-center  '>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }} className='flex flex-col items-center'>
                    <span className='text-d-grey text-[30px] font-bold sm:text-[23px] mb:text-[19px] smb:text-[17px] '>Manage your entire community  </span>
                    <span className='text-d-grey text-[30px] font-bold sm:text-[23px] mb:text-[19px] smb:text-[17px]'>in a single system</span>
                    <span className='text-grey'>Who is Nextcent suitable for?</span>
                </motion.div>
                <div className='flex items-center text-center justify-between 1150:flex-col gap-7'>
                    <motion.div initial={{x:-50,y:-10}} whileInView={{x:0,y:0}} transition={{duration:0.7}} className='flex flex-col py-6 gap-1 min-h-[250px] justify-between items-center'>
                        <div className='flex flex-col items-center gap-4'>
                            <img src="./Icon(4).png" width={60} alt="v" />
                            <span className='text-d-grey text-[25px] font-bold mb:text-[17px] smb:text-[14px]'>Membership <br />Organisations</span>
                        </div>
                        <span className='text-grey text-center mb:text-sm'>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</span>
                    </motion.div>
                    <motion.div initial={{y:40}} whileInView={{y:0}} transition={{duration:0.9}} className='flex flex-col py-6 gap-1 min-h-[250px] justify-between items-center'>
                        <div className='flex flex-col items-center gap-4'>
                            <img src="./Icon(5).png" width={60} alt="v" />
                            <span className='text-d-grey text-[25px] font-bold mb:text-[17px] smb:text-[14px]'>National <br />Associations</span>
                        </div>
                        <span className='text-grey  text-center mb:text-sm'>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</span>
                    </motion.div>
                    <motion.div initial={{x:50,y:-10}} whileInView={{x:0,y:0}} transition={{duration:0.7}} className='flex flex-col py-6 gap-1 min-h-[250px] justify-between items-center'>
                        <div className='flex flex-col items-center gap-4'>
                            <img src="./Icon(6).png" width={60} alt="v" />
                            <span className='text-d-grey text-[25px] font-bold mb:text-[17px] smb:text-[14px]'>Clubs And <br />Groups</span>
                        </div>
                        <span className='text-grey  text-center mb:text-sm'>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Communities