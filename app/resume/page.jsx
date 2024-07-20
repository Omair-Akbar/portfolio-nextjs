"use client"
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss,SiExpress, SiMongodb, SiNextdotjs, SiTypescript, SiMysql, } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
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
  title: "My Experience",
  descripition: "Developed and maintained scalable web applications using Next.js, MongoDB, Express.js, React.js, Node.js, JavaScript, TypeScript, and Tailwind CSS.",
  items: [
    {
      company: "Full-Stack Food Delivery",
      posistion: "Next.js And MongoDB",
      duration: "2022 - present"
    }
  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  descripition: "Passionate lifelong learner with a background in web development technologies such as Next.js, MongoDB, Express.js, React.js, Node.js, JavaScript, and TypeScript.",
  items: [
    {
      institution: "Code Step By Step",
      posistion: "Full Stack Next.js Web Development",
      duration: "Feb 2024 - present"
    },
    {
      institution: "Islamia University Bahawalpur",
      posistion: "Software Engineering",
      duration: "Oct 2023 - present"
    },
    {
      institution: "Sheryian Coding School",
      posistion: "React.js, Git GitHub",
      duration: "Mar 2024 - Apr 2024"
    },
    {
      institution: "Apna College",
      posistion: "MERN Stack Web Development",
      duration: "Oct 2023 - Jan 2024"
    },
    {
      institution: "Fazaia Degree College",
      posistion: "Intermidate",
      duration: "2020 - 2023"
    },
    {
      institution: "Fazaia Degree College",
      posistion: "Matriculation",
      duration: "2019 - 2021"
    },
  ]
}

const skills = {
  title: "My Skills",
  descripition: "Skilled in developing scalable web applications",
  skillsList: [
    {
      icon: <SiNextdotjs />,
      name: "Next.Js"
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript"
    },
    {
      icon: <FaReact />,
      name: "React.Js"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.Js"
    },
    {
      icon: <SiExpress />,
      name: "Express.Js"
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB"
    },{
      icon: <SiMysql />,
      name: "My SQL"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.CSS"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3"
    },
  ]
}




const page = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
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
{/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.descripition}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap=1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.posistion}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
{/* Education */}
            <TabsContent value="education" className="w-full">  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.descripition}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap=1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.posistion}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
              </TabsContent>
{/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{skills.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.descripition}</p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.skillsList.map((skill,index)=>{
                        return <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                               <div className="text-6xl group-hover:text-accent transition-all duration-100"> {skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-white text-black p-2 rounded shadow-lg">
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      })}
                    </ul>
                    </div>
            </TabsContent>
{/* About Me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.descripition}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60 font-semibold">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default page
