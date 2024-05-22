"use client"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries} from "react-icons/ci"

const links = [
  {
    name: "home",
    path:"/"
  },
  {
    name: "services",
    path:"/services"
  },
  {
    name: "resume",
    path:"/resume"
  },
  {
    name: "work",
    path:"/work"
  },
  {
    name: "contact",
    path:"/contact"
  },
]
const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-start">
        <CiMenuFries className="text-[32] text-accent"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col">12345</SheetContent>
    </Sheet>
  )
}

export default MobileNav
