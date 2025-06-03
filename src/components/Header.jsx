import React, { useState } from 'react'
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { TiThMenuOutline } from "react-icons/ti";
import { motion, AnimatePresence,useScroll } from "framer-motion"


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }
    

    return (
        <nav className='overflow-hidden'>
            <div className="flex px-[144px] py-3 justify-between items-center lg:px-20 sm:px-8 ssm:px-2 overflow-hidden" >
                <div  className='flex items-center gap-1' >
                    <img className='w-8' src="./Icn.png" alt="site" />
                    <h1 className='font-bold text-xl text-black'>Nexcent</h1>
                </div>
                <motion.div className={`flex items-center gap-7 font-semibold text-d-grey lg:absolute lg:flex-col lg:top-[40px] lg:right-[80px] sm:right-[30px] ssm:right-[10px] ssm:top-[50px] lg:rounded-lg lg:bg-silver lg:z-50 lg:transition lg:ease-in lg:delay-300 lg:shadow-xl lg:shadow-shad/70  ${menuOpen ? "flex" : "lg:hidden"}`}>
                    <span>Home</span>
                    <span>Features</span>
                    <span>Community</span>
                    <span>Blog</span>
                    <span>Pricing</span>
                    <button className='text-white bg-shade1 w-[180px] h-[50px] px-[22.5px] py-[10px] rounded-[3px] flex items-center justify-center gap-2 smb: '>
                        <span className='font-normal'>Register Now</span> <HiMiniArrowLongRight className='p-0' size={20} />
                    </button>
                </motion.div>
                <AnimatePresence>
                    <motion.div initial={{ rotate: "0deg", scale: 0 }} animate={{ rotate: "180deg", scale: 1 }} exit={{ rotate: "0deg", scale: 0 }} transition={{duration:1,ease:"backInOut"}}
                         className="hidden lg:block ">

                        <TiThMenuOutline size={20} onClick={toggleMenu} className='cursor-pointer' />
                    </motion.div>
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Header