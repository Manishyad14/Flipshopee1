import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='border-b norder-neutral-900'>
        <motion.h2 
        whileInView={{ opacity:1, y:0 }}
        initial={{ opacity:0, y :-100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-black text-center'>©2024 DailyWellness AI|Privacy Policy|Terms of Service|Contact@dailywellness.ai</motion.h2>
    </div>
  )
}

export default Footer