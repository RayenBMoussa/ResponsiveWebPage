import React from 'react'
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion"

const iconAnimation =()=>{
    
    return{
        initial:{
            scale:0
        },
        whileInView:{
            scale:1
        },
        transition:{duration:0.9}
    }
}
const icons =[
"./Logos1.png",
"./2-comp.png",
"./3-comp.png",
"./4-comp.png",
"./5-comp.png",
"./6-comp.png"
]
const Section8 = () => {
    return (
        <section className='py-[32px] px-[144px] bg-silver lg:px-[100px] sm:px-5'>
            <div className='grid grid-cols-[1fr,2fr] xl:gap-6 1150:grid-cols-1 '>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.4 }}>
                    <img src="./image9.png" alt="" className='min-w-[220px] min-h-[220px] 1150:mx-auto' />
                </motion.div>
                <div className='flex flex-col gap-[14px] 1150:mx-auto'>
                    <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.6 }} className=' text-grey font-semibold text-[16px] lg:text-[15px] mb:text-[14px] smb:text-[12px] text-justify' >Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </motion.span>
                    <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.7 }} className='text-xl text-primary font-bold mb:text-lg smb:text-[15px]'>Tim Smith</motion.span>
                    <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.7 }} className='text-l-grey font-normal mb:text-base smb:text-[13px]'>British Dragon Boat Racing Association</motion.span>

                    {/* <div className='grid grid-cols-7'> */}
                    <div className='flex flex-wrap gap-4 justify-between py-5'>
                        {icons.map((src,index)=>{
                            const localVar = iconAnimation()
                            return(
                                <motion.img
                                    key={index}
                                    initial={localVar.initial}
                                    whileInView={localVar.whileInView}
                                    transition={localVar.transition}
                                    src={src}
                                    className='sm:w-9'
                                    alt="lg"
                                />
                            )
                        })}
                        <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.9 }}   className='flex items-center text-[17px] font-semibold text-primary gap-3 lg:mx-auto'>Meet all customers <HiMiniArrowLongRight /> </motion.span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section8