import React, { useEffect, useRef, useState } from 'react'
import "./Spotlights.scss"
import photo from "../../assets/spotlight1.png"
import photo1 from "../../assets/spotlight2.png"
import photo2 from "../../assets/spotlight3.png"
import photo3 from "../../assets/spotlight4.png"
import Card from '../../layout/card/Card'
import { Container } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Spotlights = () => {





    const arr = [
        {   
            type: "defaultP",
            img: photo,
            overlay: "Stockholm",
            title: "Tobi Oyadiran",
            description: "Product Designer II"
        },
        {  
            type: "smallP",
            img: photo1,
            overlay: "New York",
            title: "Grace Kwon",
            description: "Senior Service Designer"
        },
        {   
            type: "mediumP",
            img: photo2,
            overlay: "Stockholm",
            title: "René Simonsson",
            description: "Product Designer I"
        },        
        {   
            type: "defaultP",
            img: photo3,
            overlay: "New York",
            title: "Ashley Moody",
            description: "Product Designer II"
        },       
        {   
            type: "defaultP",
            img: photo,
            overlay: "Stockholm",
            title: "Tobi Oyadiran",
            description: "Product Designer II"
        },
        {  
            type: "smallP",
            img: photo1,
            overlay: "New York",
            title: "Grace Kwon",
            description: "Senior Service Designer"
        },
        {   
            type: "mediumP",
            img: photo2,
            overlay: "Stockholm",
            title: "René Simonsson",
            description: "Product Designer I"
        },        
        {   
            type: "defaultP",
            img: photo3,
            overlay: "New York",
            title: "Ashley Moody",
            description: "Product Designer II"
        },       
        {   
            type: "defaultP",
            img: photo,
            overlay: "Stockholm",
            title: "Tobi Oyadiran",
            description: "Product Designer II"
        },
        {  
            type: "smallP",
            img: photo1,
            overlay: "New York",
            title: "Grace Kwon",
            description: "Senior Service Designer"
        },
        {   
            type: "mediumP",
            img: photo2,
            overlay: "Stockholm",
            title: "René Simonsson",
            description: "Product Designer I"
        },        
        {   
            type: "defaultP",
            img: photo3,
            overlay: "New York",
            title: "Ashley Moody",
            description: "Product Designer II"
        },       
        {   
            type: "defaultP",
            img: photo,
            overlay: "Stockholm",
            title: "Tobi Oyadiran",
            description: "Product Designer II"
        },
        {  
            type: "smallP",
            img: photo1,
            overlay: "New York",
            title: "Grace Kwon",
            description: "Senior Service Designer"
        },
        {   
            type: "mediumP",
            img: photo2,
            overlay: "Stockholm",
            title: "René Simonsson",
            description: "Product Designer I"
        },        
        {   
            type: "defaultP",
            img: photo3,
            overlay: "New York",
            title: "Ashley Moody",
            description: "Product Designer II"
        },       
    ]
  return (
    <div className='spotlights'>
        <Container>
            <div className="spotlights-title">
                <h2>In the Spotlight <br/> <span>Meet the humans who design Spotify</span></h2>
                <Link>View all in the spotlights <FaArrowRight className='arrow'/></Link>
            </div>
            <div className='cards'>
                <Swiper
                    slidesPerView={3.4}
                    spaceBetween={120}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {
                        arr.map((e, i)=>
                            <SwiperSlide className='swiper-slide spotlightslide' key={i}>
                                <Link key={i}>
                                    <Card type={e.type} photo={e.img} title={e.title} description={e.description} links={e.links} overlay={e.overlay}/>
                                </Link>
                            </SwiperSlide>
                            )
                    }                    
                </Swiper>
            </div>
        </Container>
    </div>
  )
}

export default Spotlights