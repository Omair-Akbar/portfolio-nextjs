import Link from "next/link"
import {FaGithub, FaLinkedin, FaInstagram, FaWhatsapp} from "react-icons/fa"

const socials = [
    { icons: <FaLinkedin/>, path:"https://www.linkedin.com/in/omair-akbar/"},
    { icons: <FaGithub/>, path:"https://github.com/Omair-Akbar/"},
    { icons: <FaInstagram/>, path:"https://www.instagram.com/omair_365/"},
    { icons: <FaWhatsapp/>, path:"https://wa.me/03361455314?text=Hi%20Omair!"}
]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {
            socials.map((item,index)=>{
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icons}
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Socials
