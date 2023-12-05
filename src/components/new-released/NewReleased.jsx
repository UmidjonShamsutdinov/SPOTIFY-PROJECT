import React from 'react'
import "./NewReleased.scss"
import photo from "../../assets/newReleasedPhoto.png"
import photo1 from "../../assets/newReleasedPhoto1.png"
import photo2 from "../../assets/newReleasedPhoto2.png"
import photo3 from "../../assets/newReleasedPhoto3.png"
import Card from '../../layout/card/Card'
import { Container } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const NewReleased = () => {
    const arr = [
        {   
            type: "big",
            img: photo,
            title: "Collaboration Secrets: Design X Engineering",
            links: ["Behind The Scenes"],
            description: "Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!"
        },
        {   
            type: "small",
            img: photo1,
            title: "Ask Spotify Design 07",
            links: ["Q+A"],
            description: "Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!"
        },
        {   
            type: "small",
            img: photo2,
            title: "Making Moves: Designing Motion for 2022 Wrapped",
            links: ["Behind The Scenes"],
            description: "Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!"
        },
        {   
            type: "big2",
            img: photo3,
            title: "Zoned 44",
            links: ["Listen","Dance","Ambient","Electronic"],
            description: "Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!"
        },
    ]
  return (
    <div className='new__released'>
        <Container>
            <div className="new__released-title">
                <h2>New Releases</h2>
                <Link>View all stories <FaArrowRight className='arrow'/></Link>
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
        </Container>
    </div>
  )
}

export default NewReleased