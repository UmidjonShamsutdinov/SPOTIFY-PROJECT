import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'
import { FaPlay } from "react-icons/fa";

const Card = ({type, photo, title, description, links, overlay}) => {
  return (
    <div className={`card ${type}`}>
        <div className="img">
          <img src={photo} alt="" />
          {overlay? <p className='card-overlay'>{overlay}</p> : ""}
          {
            type==="big2" && <div  className='play-btn'><FaPlay className='icon'/></div>
          }
        </div>
        <div className='card__content'>
            <div className="links">
              {
                  links?.map((link, i)=>
                      <Link key={i}>{link}</Link>
                      )
              }
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card