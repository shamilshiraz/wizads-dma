// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sphere from './Sphere'

function Magic() {
  return (
    <div className="magic">
        <div className="magitop">
            <p className='mtxt'>011N</p>
        <div className="magicontent">
                        <img src="./logo.png" alt="" id='mlogo'/>  
                        WIZADS
                    </div>
        <p className='mtxt'>SOCIALS <br />
        <a href="">INST</a>&nbsp;<a href="">LI</a></p>
        </div>

        <div className="magicircle" style={{backgroundImage:'url(/bg/spcbg.jpeg)'}}>
            {/* <div className="incirc">
         </div> */}

            <Sphere className='spheremag'/>
        </div>
    </div>
  )
}

export default Magic