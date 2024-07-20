"use client"
import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import {motion} from "framer-motion"

const services= [
  {
    num: "01",
    title: "full-stack web Development",
    descripition: " I provide top-notch full-stack web development services backed by extensive experience.",
    href:"#"
  },
  {
    num: "02",
    title: "Back-end Development",
    descripition: "I provide top-tier back-end web development services backed by extensive experience.",
    href:"#"
  },
  {
    num: "04",
    title: "front-end Development",
    descripition: "I provide top-tier front-end web development services backed by extensive experience.",
    href:"#"
  },
  {
    num: "03",
    title: "Video Editing",
    descripition: "I provide top-tier video editing services backed by extensive experience.",
    href:"#"
  }
]

const page = () => {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
       <div className="container mx-auto">
        <motion.div initial={{opacity:0}} animate={{
          opacity:1,
          transition:{delay:2, duration:0.4, ease:"easeIn"}
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            {services.map((item,index)=>{
              return <div key={index} className="felx-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold   transition-all duration-500 group-hover:text-accent">{item.num}</div>
                <Link className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:rotate-45" href={item.href}>
                  <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{item.title}</h2>
              <p className="text-white/60">{item.descripition}</p>
              <div className="border-b border-white/20 w-full"></div>
              </div>
            })}
          </motion.div>
       </div>
      </section>
    )
  }
  
  export default page
  