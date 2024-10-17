/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import {  useScroll } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import './main.css'



function Sphere() {
    const scene=useRef(null)

    const {scrollYProgress}=useScroll({
        target:scene,
        offset:['start end','end start']
    })

    const [color ,normal ,aoMap]=useLoader(TextureLoader,[
        '/ht.png',
        '/t8.jpg',
        '/wizadsbg2.avif'
    ])
  return (
    <Canvas ref={scene} className='sphere'>
        <ambientLight intensity={.7}/>
        <directionalLight intensity={5.5} position={[1,0,0]}/>
        <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
            <sphereGeometry args={[1,64,64]}/>
            <meshStandardMaterial map={color}/>
        </motion.mesh>
    </Canvas>
  )
}

export default Sphere