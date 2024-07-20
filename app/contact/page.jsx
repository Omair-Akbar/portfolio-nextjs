"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    descripition: "(+92) 3361455314"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    descripition: "muhammadomairakbar@gmail.com"
  }, {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    descripition: "Bahawalpur,Shorkot cantt"
  }
]

const page = () => {
  return (
    <motion.section className="py-6" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let's grow together</h3>
            <p className="text-white/60">Let's build something amazing together—reach out to us!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" placeholder="firstname"/>
              <Input type="lastname" placeholder="lastname"/>
              <Input type="email" placeholder="Email address"/>
              <Input type="phone" placeholder="Phone number"/>
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="est">Hire me</SelectItem>
                  <SelectItem value="cst">Full-Stack Web Development</SelectItem>
                  <SelectItem value="mst">Front-end Web Development</SelectItem>
                  <SelectItem value="nst">Back-end web Development</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea className="h-[200px] focus:border-accent" placeholder="Type your message here."/>
            <Button size="md" className="max-w-40 pt-3 pb-3">Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return <li className="flex items-center gap-6" key={index}>
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.descripition}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default page
