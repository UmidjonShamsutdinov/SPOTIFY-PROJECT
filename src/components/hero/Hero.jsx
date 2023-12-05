import React from 'react'
import "./Hero.scss"
import { Container } from '../../utils/Utils'
import photo from "../../assets/spotlight1.png"
import photo1 from "../../assets/spotlight2.png"
import photo2 from "../../assets/spotlight3.png"
import photo3 from "../../assets/spotlight4.png"
import photo4 from "../../assets/newReleasedPhoto.png"
import photo5 from "../../assets/newReleasedPhoto1.png"
import photo6 from "../../assets/newReleasedPhoto2.png"
import photo7 from "../../assets/newReleasedPhoto3.png"



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

const Hero = () => {
    const arr = [
        {               
            img: photo,
            title: "Collaboration Secrets: Design X Engineering",
        },
        {               
            img: photo1,
            title: "Ask Spotify Design 07",
        },
        {               
            img: photo3,
            title: "Zoned 44",
        },
        {              
            img: photo2,
            title: "Making Moves: Designing Motion for 2022 Wrapped",
        },
    ]
  return (
    <div className='hero'>
        <Container>
            <div className='Hero__items'>
                <h2 className='hero__title'>Spotify Design</h2>
                <div className='hero-swiper'>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}

                        className="mySwiper adminadmin"
                    >
                        {
                            arr.map((e,i)=>
                                <SwiperSlide className='hero-slides' key={i}>
                                    <div>
                                        <p>{e.title}</p>
                                    </div>
                                    <img src={e.img} alt="" />
                                </SwiperSlide>
                                )
                        }
                    </Swiper>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Hero