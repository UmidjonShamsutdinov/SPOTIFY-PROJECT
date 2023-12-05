import React from 'react'
import { Container } from '../../utils/Utils'
import "./Jobs.scss"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Jobs = () => {
  return (
    <div className='jobs'>        
            <div className="jobs-title">
                <h2>Jobs <br/> <span>Open roles at Spotify Design</span></h2>
                <Link>View Team<FaArrowRight className='arrow'/></Link>
            </div>
            <div className='jobs-content'>
                <div className="content">
                    <Link>
                        <p>Miami</p>
                        <h2>Design Manager - Editorial, LatAm</h2>
                    </Link>
                </div>
                <div className="arrow-jobs">
                    <FaArrowRight className='icon-arrow'/>
                </div>
            </div>        
    </div>
  )
}

export default Jobs
