"use client"
import CountUp from "react-countup"

const stats = [
    {
        num: 1,
        text: "Year of coding experience"
    },
    {
        num: 11,
        text: "Project completed"
    },
    {
        num: 48,
        text: "Skills mention on Linkedin"
    },
    {
        num: 1559,
        text: "Linkedin Followers"
    },
]


const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item,index)=>{
                        return <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                            <CountUp end={item.num} duration={5} delay={2} className="text-4xl font-extrabold xl:text-6xl"/>
                        <p className={`${item.text.length <15 ? "max-w-[100px]":"max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats
