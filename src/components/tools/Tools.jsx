import React from 'react'
import "./Tools.scss"
import photo from "../../assets/tools1.png"
import photo1 from "../../assets/tools2.png"
import Card from '../../layout/card/Card'
import { Container } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const Tools = () => {
    const arr = [
        {   
            type: "big",
            img: photo,
            title: "Collaboration Secrets: Design X Engineering",
            links: ["tools"],
            description: "Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!"
        },
        {   
            type: "big",
            img: photo1,
            title: "Collaboration Secrets: Design X Engineering",
            links: ["tools"],
            description: "Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!"
        },        
    ]
  return (
    <div className='tools'>
            <div className="tools-title">
                <h2>Tools <br/> <span>Our day-to-day resources</span></h2>
                <Link>View all tools <FaArrowRight className='arrow'/></Link>
            </div>
            <div className='cards'>
                {
                    arr.map((e, i)=>
                        <Link key={i}>
                            <Card type={e.type} photo={e.img} title={e.title} description={e.description} links={e.links}/>
                        </Link>
                        )
                }
            </div>
    </div>
  )
}

export default Tools