import React from 'react'
import { Swiper, SwiperSlide} from "swiper/react"
import { Pagination } from 'swiper/modules';
import {motion} from 'framer-motion'
import 'swiper/css';
import 'swiper/css/pagination';
import "./Section1.css"
const Section1 = () => {
    return (
        <section className='py-[67px] px-[101px] bg-silver relative  md:px-[90px] md:py-[50px] sm:px-[80px] sm:py-[40px] mb:px-[45px] smb:px-[30px] ssm:px-[20px]'>
            <Swiper pagination={true} loop={true} autoplay={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className='flex justify-around items-center flex-wrap lg:flex-col lg:gap-5 md:gap-8'>
                        <motion.div initial={{x:-100,y:-30}} whileInView={{x:0,y:0}} transition={{duration:0.7}}  className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-4'>
                                <span className='text-d-grey font-semibold text-6xl md:text-5xl sm:text-4xl smb:text-3xl ssm:text-2xl'>Lessons and insights <br /></span>
                                <span className='text-tint1 font-semibold text-5xl md:text-4xl sm:text-3xl smb:text-2xl ssm-text-xl'> from 8 years <br /></span>
                                <span className='text-grey text-base md:text-sm sm:text-xs ssm:text-[11px]'>Where to grow your business as a photographer: site or social media? <br /></span>
                            </div>
                            <button className='text-white bg-primary  px-[22.5px] py-[10px] rounded-[3px] md:block md:m-auto  ssm:text-[12px]  w-fit'>Register</button>
                        </motion.div>
                        <motion.div initial={{x:100,y:-30}} whileInView={{x:0,y:0}} transition={{duration:1.2}}>
                            <img src="./Illustration.webp" alt="illustartion" />
                        </motion.div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-around items-center flex-wrap lg:flex-col lg:gap-5 md:gap-8'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-4'>
                                <span className='text-d-grey font-semibold text-6xl md:text-5xl sm:text-4xl smb:text-3xl ssm:text-2xl'>Lessons and insights <br /></span>
                                <span className='text-tint1 font-semibold text-5xl md:text-4xl sm:text-3xl smb:text-2xl ssm-text-xl'> from 8 years <br /></span>
                                <span className='text-grey text-base md:text-sm sm:text-xs ssm:text-[10px]'>Where to grow your business as a photographer: site or social media? <br /></span>
                            </div>
                            <button className='text-white bg-primary  px-[22.5px] py-[10px] rounded-[3px] md:block md:m-auto  ssm:text-[12px]  w-fit'>Register</button>
                        </div>
                        <div>
                            <img src="./Illustration.webp" alt="illustartion" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-around items-center flex-wrap lg:flex-col lg:gap-5 md:gap-8'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-4'>
                                <span className='text-d-grey font-semibold text-6xl md:text-5xl sm:text-4xl smb:text-3xl ssm:text-2xl'>Lessons and insights <br /></span>
                                <span className='text-tint1 font-semibold text-5xl md:text-4xl sm:text-3xl smb:text-2xl ssm-text-xl'> from 8 years <br /></span>
                                <span className='text-grey text-base md:text-sm sm:text-xs ssm:text-[10px]'>Where to grow your business as a photographer: site or social media? <br /></span>
                            </div>
                            <button className='text-white bg-primary  px-[22.5px] py-[10px] rounded-[3px] md:block md:m-auto  ssm:text-[12px]  w-fit'>Register</button>
                        </div>
                        <div>
                            <img src="./Illustration.webp" alt="illustartion" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Section1