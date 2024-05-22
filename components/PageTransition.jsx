"use client"

import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { usePathname } from 'next/navigation'


const PageTransition = ({ childern }) => {

    const pathName = usePathname();


    return (
        <AnimatePresence>
            <div key={pathName}>
            
            <motion.div initial={{ opacity:1 }}
            animate = {{ 
                opacity:0,
                transition: { delay:1, durantion:0.4,
                ease:"easeInOut"},
            }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            />
            
            
                {childern}</div>
        </AnimatePresence>
    )
}

export default PageTransition
