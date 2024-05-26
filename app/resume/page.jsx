"use client"
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiTypescript,} from "react-icons/si"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import { Tooltip,TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"



const about = {

  title: "About me",
  descripition: "Aspiring Software Engineer skilled in Next.js, MongoDB, Express.js, React.js, and Node.js.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Omair Akbar"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 3361455314"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 3286103600"
    },
    {
      fieldName: "Email",
      fieldValue: "muhammadomairakbar@gmail.com"
    },
    {
      fieldName: "Remote",
      fieldValue: "Available"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "City",
      fieldValue: "Bahawalpur, Shorkot"
    },
    {
      fieldName: "Language",
      fieldValue: "English, Urdu, Punjabi"
    },

  ]

}

const experience = {
  icon: "/assets/resume/badge.svg",
  title:"My Experience",
  descripition:"Developed and maintained scalable web applications using Next.js, MongoDB, Express.js, React.js, Node.js, JavaScript, TypeScript, and Tailwind CSS.",
  items:[
    {
      company:"Full-Stack Food Delivery Web",
      posistion:"Next.js And MongoDB",
      duration:"2022 - present"
    }
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  descripition: "Passionate lifelong learner with a background in web development technologies such as Next.js, MongoDB, Express.js, React.js, Node.js, JavaScript, and TypeScript.",
  item: [
    {
      institution: "Code Step By Step",
      posistion:"Full Stack Next.js Web Development",
      duration:"Feb 2024 - present"
    },
    {
      institution: "Islamia University Bahawalpur",
      posistion:"Software Engineering",
      duration:"Oct 2023 - present"
    },
    {
      institution: "Sheryian Coding School",
      posistion:"React.js, Git GitHub",
      duration:"Mar 2024 - Apr 2024"
    },
    {
      institution: "Apna College",
      posistion:"Html CSS JavaScript,SQL, Express.js, Node.js",
      duration:"Oct 2023 - Jan 2024"
    },
    {
      institution: "Fazaia Degree College",
      posistion:"Intermidate",
      duration:"2020 - 2023"
    },
    {
      institution: "Fazaia Degree College",
      posistion:"Matriculation",
      duration:"2019 - 2021"
    },
  ]
}

const skills = {
  title:"My Skills",
  descripition: "Skilled in developing scalable web applications",
  skillsList: [
    {
      icon:<SiNextdotjs/>,
      name: "Next.Js"
    },
    {
      icon:<SiTypescript/>,
      name: "TypeScript"
    },
    {
      icon:<FaReact/>,
      name: "React.Js"
    },
    {
      icon:<FaNodeJs/>,
      name: "Node.Js"
    },
    {
      icon:<SiTailwindcss/>,
      name: "Tailwind.CSS"
    },
    {
      icon:<FaJs/>,
      name: "JavaScript"
    },
    {
      icon:<FaHtml5/>,
      name: "HTML 5"
    },
    {
      icon:<FaCss3/>,
      name: "CSS 3"
    },
  ]
}




const page = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2 ,duration:0.4, ease:"easeIn"}}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
           <TabsContent></TabsContent> 
          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default page
