// eslint-disable-next-line no-unused-vars
import React from 'react'

function Spellbook() {
  return (
    <div className='spellbook'>
                <div className="semi-circlespell" style={{fontFamily:'editors'}}>
                    <p className='spellpri'>Our guiding principles</p>
                </div>
        <p className='spellhead'><span style={{fontFamily:'editors'}}>The</span>Spellbook</p>
        <hr className='spellhr'/>
        <div className="spellparacont">
            <div className="spellpara">
                <p>At Wizads, we believe in the magic of 
blending creativity with strategy. Our guiding 
principle is clear: every brand has untapped 
potential, and with the perfect combination of 
insight, innovation, and a touch of wizardry, 
we unlock that potential.</p>
            </div>
            <div className="spellpara">
                <p>We merge vision with execution, transforming 
ideas into unforgettable experiences. Our 
approach isn’t just about achieving objectives
 —it’s about elevating your brand to something 
truly magical and unique.</p>
            </div>
        </div>

    </div>
    
  )
}

export default Spellbook