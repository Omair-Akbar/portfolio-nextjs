"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const PageTransition = ({ childern }) => {
    const pathName = usePathname();
    return (
        <>
            <AnimatePresence>
                <div key={pathName}>
                    <motion.div initial={{ opacity: 1 }}
                        animate={{
                            opacity: 0,
                            transition: {
                                delay: 1, durantion: 0.4,
                                ease: "easeInOut"
                            },
                        }}
                        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" />
                </div>
            </AnimatePresence>
            {childern}
        </>
    )
}
export default PageTransition
