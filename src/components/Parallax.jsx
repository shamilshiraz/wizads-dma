// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'


function Parallax() {

    const container=useRef(null)
    const {scrollYProgress}=useScroll({
        target:container,
        offset:['start start','end end']
    })

    const scale4=useTransform(scrollYProgress,[0,1],[1,4])



  return (
    <div ref={container} className="prlxcontainer">
        <div className="prlxsticky">
            <div className="prlxd">
                <p id='prlxh'>Vision</p>
                <p id='prlxp'>We aim to be the go-to agency for transforming brands 
with innovation and creativity, building strong, lasting 
partnerships that unlock their full potential.</p>
            </div>
            <div className="prlxel">
                <motion.div style={{scale:scale4}} className="prlximg">
                    <img src="./vision.jpeg" alt="" />
                </motion.div>
            </div>
            <hr id='prlxhr'/>
            <div className="prlxd2">
                <p id='prlxh'>Mission</p>
                <p id='prlxp2'>At Wizads, our mission is to craft captivating brand 
experiences through creative and strategic marketing, 
helping our clients stand out and grow.</p>
            </div>
        </div>
    </div>
  )
}

export default Parallax