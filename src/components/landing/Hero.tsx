import React from 'react'
import Slider from 'react-slick';

import { useSpring, animated } from '@react-spring/web'
import ApiHero from '../hero-slides/ApiHero';
import SoftwareHero from '../hero-slides/SoftwareHero';
import { nanoid } from 'nanoid';
import ServicesHero from '../hero-slides/ServicesHero';



const Hero = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
    };

    const heros = [
        <ApiHero/>,
        <SoftwareHero/>,
        <ServicesHero/>
    ]

    return (
        <section className='overflow-hidden'>
            <Slider {...settings}>
                {
                    heros.map(t => {
                        return <div key={nanoid()} >{t}</div>
                    })
                }
            </Slider>
        </section>
    )
}

export default Hero