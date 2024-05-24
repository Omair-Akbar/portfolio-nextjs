"use client"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"

const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "services",
    path: "/services"
  },
  {
    name: "resume",
    path: "/resume"
  },
  {
    name: "work",
    path: "/work"
  },
  {
    name: "contact",
    path: "/contact"
  },
]
const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-start">
        <CiMenuFries className="text-[32] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-28 mb-32 text-center text-2xl">
          Om<span className="text-accent">air.</span>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {

            return (<Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-accent "}text-xl capitalize hover:text-accent transition-all`}>{link.name}</Link>)


          })}

        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
