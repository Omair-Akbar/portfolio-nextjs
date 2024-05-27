"use client"
import React from "react"
import { delay, motion } from "framer-motion"
import {useState} from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import Link from "next/link";
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"
import { useState } from "react"

const projects = [
  {
    num: "01",
    category: "Front-end",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos est assumenda dolor numquam quos omnis impedit neque veli    ",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: '/assets/work/thumb1.png',
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Full-stack",
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet dolores velit officia reiciendis deleniti laudantium, voluptate sit corrupti vitae minima, incidunt nesciunt quos architecto, odio voluptatum aperiam quia unde!",
    stack: [{ name: "Next.js 14" }, { name: "Node.js" }, { name: "tailwind css" }],
    image: '/assets/work/thumb2.png',
    live: "",
    github: "",
  },{
    num: "03",
    category: "back-end",
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos est assumenda dolor numquam quos omnis impedit neque veli    ",
    stack: [{ name: "Next.js 14" }, { name: "Node.js" }, { name: "tailwind css" }],
    image: '/assets/work/thumb3.png',
    live: "",
    github: "",
  }
]

const WorkPage = () => {

  const [project, setProject] = useState(projects[0])
  const handleSlideChange = (swiper) =>{
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
}  

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{ delay:2, duration:0.4, ease:"easeIn"} }}  className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[480px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return <li className="text-xl text-accent" key={index}>{item.name}{index !== project.stack.length - 1 && ","}</li>
                })}
              </ul>
              <div className="border boder-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white text-black p-2 rounded shadow-lg">
                <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                <Link href={project.github}>
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                      <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white text-black p-2 rounded shadow-lg">
                <p>Github link</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project,index)=>{
                return <SwiperSlide className="w-full" key={index}>
                  <div className="h-[480px] relative group flex justify-center items-center bg-zinc-400/90">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-full h-full"><Image src={project.image} fill className="object-cover" alt=""></Image></div>
                  </div>
                  </SwiperSlide>
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default WorkPage
