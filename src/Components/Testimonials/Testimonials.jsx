import React from 'react'
import { useState } from 'react'
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import { testimonialsData } from "../../data/testimonialsData";
import { motion } from "framer-motion";
import "./Testimonial.css"

const Testimonials = () => {

    const transition = {type: "spring", duration: 3}
    const [selected, setSelected] = useState(0);
    const tLenght = testimonialsData.lenght
    
  return (
    <div className="testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className="stroke-text">What they</span>
            <span>About us</span>
            <motion.span
             key={selected}
             initial={{opacity: 0, x: 100}}
             animate={{opacity: 1, x: 0}}
             exit={{opacity: 0, x: -100}}
             transition={transition}>
                {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span style={{color:"var(--orange)"}}>
                {testimonialsData[selected].name } 
                </span> 
                {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div 
             transition={{...transition, duration: 2}}
             initial={{opacity: 0, x: -100}}
             whileInView={{opacity: 1, x: 0}} 
             >

            </motion.div>
            <motion.div 
             transition={{...transition, duration: 2}}
             initial={{opacity: 0, x: 100}}
             whileInView={{opacity: 1, x: 0}} 
             >

            </motion.div>
            <motion.img
             key={selected}
             initial={{opacity: 0, x: 100}}
             animate={{opacity: 1, x: 0}}
             exit={{opacity: 0, x: -100}}
             transition={transition}
            src={testimonialsData[selected].image} alt="" />
            <div className="arrow">
                <img onClick={() => {
                    selected === 0 ? setSelected(tLenght - 1)
                    : setSelected ((prev) => prev - 1);
                }} src={leftArrow} alt="" />
                <img onClick={() => {
                    selected === tLenght - 1 ? setSelected(0)
                    : setSelected ((prev) => prev + 1);
                }} src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials