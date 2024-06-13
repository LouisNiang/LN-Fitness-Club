import React from 'react'
import Header from "../../Components/Header/Header"
import hero_image from "../../assets/hero_image.png"
import hero_image_back  from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import { motion } from "framer-motion";
import "./Hero.css"

const Hero = () => {
    const mobile = window.innerWidht<= 768 ? true: false
    const transition = {type: "spring", duration: 3}
  return (
    <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />
            <div className="the-best-ad">
                <motion.div 
                initial={{left: mobile? "165px" : "238px"}}
                whileInView={{left: "8px"}}
                transition= {{...transition, type: "tween"}}>

                </motion.div>
                <span>the best fitness club in the town </span>
            </div>
            <div className="hero-text">
                <div className="">
                    <span className="stroke-text">Shape </span>
                        <span>Your</span>
                </div>
                <div className="">
                    <span>Ideal body</span>
                </div>
                <div >
                    <span>in here the will help you to share and build your ideal body and live up your live to fullest</span>
                </div>
            </div>
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coachs</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            </div>
            <div className="hero-buttons">
                <button className="btn alpha">Get started</button>
                <button className="btn beta">Learn more</button>
            </div>
        </div>
        <div className="right-h">
            <button className="btn">Join now</button>
            <motion.div
            initial={{right: "-1rem"}}
            whileInView={{right: "4rem"}}
             transition= {transition}
             className="heart-rate">
                <img src={Heart} alt="" />
                <span className="alpha">Heart rate</span>
                <span className="beta">116 bpm</span>
            </motion.div>
            <img src={hero_image} alt="" className="hero-image" />
            <motion.img initial={{right: "11rem"}}
            whileInView={{right: "20rem"}}
             transition= {transition} src={hero_image_back} alt="image-back" className="hero-image-back" />
            <motion.div
             initial={{right: "50rem"}}
             whileInView={{right: "28rem"}}
             transition= {{...transition, type: "tween"}}
             className="calories">
                <img src={Calories} alt="" />
                <div>
                <span>Calories Burned</span><span>220kcal</span>
                </div>
            </motion.div>
        </div>
    </div>

  )
}

export default Hero