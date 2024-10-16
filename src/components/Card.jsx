// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import './card.css'
import { motion, useScroll, useTransform } from 'framer-motion'



// eslint-disable-next-line react/prop-types
function Card({title,description,src,i,progress,range,targetScale}) {
    const container =useRef(null)
    const {scrollYProgress}=useScroll({
        target: container,
        offset:['start end','start start']
    })
    const dynamicTop = `calc(-10% + ${i * 20}px)`
    const dynamicleft= `calc(-10% + ${i * 20}px)`

    const imagescale=useTransform(scrollYProgress,[0,1],[2,1])
    const scale=useTransform(progress,range,[1,1])


  return (
<div className="cardContainer" ref={container}>
<motion.div className="card" style={{top:dynamicTop,scale, left:dynamicleft}} >
        <div className="chead">
            {title}
        </div>
        <div className="cbody">
            <div className="imgcontainer">
                <motion.div style={{scale:imagescale}} className="inner">
                <img src={src} alt="" />
                </motion.div>
            </div>
            <p>{description}</p>
        </div>
      </motion.div>
</div>
  )
}

export default Card