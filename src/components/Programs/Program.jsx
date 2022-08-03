import React from 'react'
import "./Program.css"
import {programsData} from "../../data/programData";
import arrow from "../../assets/arrow.png"

const Program = () => {
  return (
    <div className="programs" id="progrms">
        <div className='program-heading'>
            <span className='stroke-text'>explore our</span>
            <span>programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className='program-catagories'>
            {programsData.map((program)=>(
                <div className='catagory'>
                    {program.image}
                    <span>{program.heading}</span><span>{program.details}</span>
                    <div className='join-now'><span>Join Now</span><img src={arrow} alt="" /></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Program
