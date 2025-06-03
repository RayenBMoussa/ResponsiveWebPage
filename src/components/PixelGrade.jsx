import React from 'react'
import { motion } from "framer-motion"
import useMediaQuery from '@mui/material/useMediaQuery';
const PixelGrade = () => {

    //causing animation to be stuck before it reaches it's normal postion on it's way back/to fix later
    // const wideScreen = useMediaQuery('(min-width:660px)')
    // const changeToScale = wideScreen ? {
    //     initial: {
    //         x: 100, y: -30
    //     }, whileInView: { x: 0, y: 0 },
    //      transition: { duration: 1 }
    // } : {
    //     initial: {
    //         scale:0
    //     }, whileInView: { scale:1},
    //      transition: { duration: 1 }
    // }
    return (
        <section className='py-[30px] px-[144px] md:px-[100px] sm:px-[20px]'>
            <div className='flex justify-between 1150:flex-col 1150:items-center '>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.7 }}>
                    <img src="./Frame.png" alt="fr" className='min-w-60' />
                </motion.div>
                <motion.div  className='flex flex-col justify-center gap-7'>
                    <div className='flex flex-col 1150:items-center gap-4'>
                        <span className='text-d-grey text-[30px] font-bold 1150:text-center md:text-[25px] sm:text-[23px] mb:text-[20px] smb:text-[17px] '>The unseen of spending three <br /> years at Pixelgrade</span>
                        <span className='text-grey max-w-[630px] mb:text-sm smb:text-[12px] sm:px-[10]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</span>
                    </div>
                    <button className='bg-primary px-[32px] py-[14px] w-fit rounded-[4px] text-white xl:block xl:m-auto mb:px-[25px]
                  mb:text-[14px]'>Learn more</button>
                </motion.div>
            </div>
        </section>
    )
}

export default PixelGrade