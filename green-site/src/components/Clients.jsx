import React from 'react'
import { motion } from "framer-motion"
import useMediaQuery from '@mui/material/useMediaQuery';

const Clients = () => {
  const isSmall =useMediaQuery('(min-width:660px)');
  const calculateOffset = (index) => {
    const baseX = isSmall ? -50 : -30;
    const baseY = -10;
    const stepX = isSmall ? 50 : 20;
    const stepY = 10;
    return {
      initial: {
        opacity: 0,
        x: baseX - stepX * index,
        y: baseY - stepY * index
      },
      whileInView: {
        opacity: 1,
        x: 0,
        y: 0
      },
      transition: {
        duration: 0.7
      }
    }
  }
  const imgs = [
    "./1-comp.png",
    "./2-comp.png",
    "./3-comp.png",
    "./4-comp.png",
    "./5-comp.png",
    "./6-comp.png",
    "./7-comp.png"
  ]
  return (
    <section className='py-[30px] px-[144px] md:px-[110px] sm:px-[80px] smb:px-[35px] ssm:px-[10px]'>
      <div className='flex flex-col gap-6'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className='flex flex-col items-center '>
          <span className='text-d-grey text-[30px] font-bold ssm:text-[20px] '>Our Clients <br /></span>
          <span className='text-grey md:text-sm sm:text-xs ssm:text-[10px]'>We have been working with some Fortune 500+ clients</span>
        </motion.div>
        <div className='flex justify-around flex-wrap md:flex-col md:items-center '>

          {imgs.map((src, index) => {
            const respAnimation = calculateOffset(index);
            return (
              <motion.img
                key={index}
                initial={respAnimation.initial}
                whileInView={respAnimation.whileInView}
                transition={respAnimation.transition}
                src={src}
                className='md:w-[80px] smb:w-[50px]'
              />
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Clients