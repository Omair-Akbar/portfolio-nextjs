"use client"
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold,PiCaretRightBold } from "react-icons/pi"


const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles}) => {
  
    const swiper = useSwiper();
  const handlePrev = async ()=>{
    if(swiper && swiper.slidePrev){
       await swiper.slidePrev();
    }
  }
  const handleNext = async ()=>{
    if(swiper && swiper.slideNext){
        await swiper.slideNext();
    }
  }


    return (
    <div className={containerStyles}>
        <button className={btnStyles}><PiCaretLeftBold className={iconsStyles} onClick={handlePrev}/></button>
        <button className={btnStyles}><PiCaretRightBold className={iconsStyles} onClick={handleNext}/></button>      
    </div>
  )
}

export default WorkSliderBtns
