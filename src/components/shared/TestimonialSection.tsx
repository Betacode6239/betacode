import React from 'react'
import Section, { SectionTitle } from './Section'
import Rating from './Rating'
import Slider from 'react-slick';
import { nanoid } from 'nanoid'
import { useInView, useTrail, animated } from '@react-spring/web';

type TestimonialCardProps = {
    data: {
        image: string,
        rating: number,
        text: string,
        writer: string
    }
}

const TestimonialCard = ({
    data
}: TestimonialCardProps) => {
    return (
        <div className="grid grid-cols-3 items-center gap-5 text-muted-foreground px-5">
            <div className='aspect-square bg-center rounded-2xl bg-cover bg-no-repeat' style={{ backgroundImage: `url(${data.image})` }}></div>
            <div className='space-y-3 col-span-2'>
                <Rating rating={data.rating} />

                <div className='space-y-2'>
                    <p>{data.text}</p>
                    <div>
                        <span className='font-bold text-gray-500 '>{data.writer}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TestimonialSection = () => {

    const [ref, inView] = useInView();
    const trails = useTrail(2, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: inView ? 1 : 0,
        y: inView ? 0 : -50,
        from: { opacity: 0, y: -50 },
        delay: 1000
    })

    const testimonials = [
        {
            image: "/assets/images/tst-1.png",
            rating: 5,
            text: "Betacode's API services have been a game-changer for our platform. The seamless integration and robust performance have delighted our users. We highly recommend Betacode for any API needs.",
            writer: "John Doe"
        },
        {
            image: "/assets/images/tst-2.png",
            rating: 4.5,
            text: "As a developer, I'm impressed with Betacode's API documentation and support. It made implementing their services into our app a breeze. Their team is responsive and always ready to assist.",
            writer: "Jane Smith"
        },
        {
            image: "/assets/images/tst-1.png",
            rating: 5,
            text: "Betacode's API services have been a game-changer for our platform. The seamless integration and robust performance have delighted our users. We highly recommend Betacode for any API needs.",
            writer: "John Doe"
        },
        {
            image: "/assets/images/tst-2.png",
            rating: 4.5,
            text: "As a developer, I'm impressed with Betacode's API documentation and support. It made implementing their services into our app a breeze. Their team is responsive and always ready to assist.",
            writer: "Jane Smith"
        },

    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };



    return (


        <Section className='py-24'>
            <div className="container mx-auto" ref={ref}>
                <div className=' flex flex-col items-center'>
                    <animated.div style={{...trails[0]}}><p className=''>3,436 Clients happy to use BetaCode</p></animated.div>
                    <animated.div style={{...trails[1]}}><SectionTitle className=''>Don't Take just Our Words</SectionTitle></animated.div>
                </div>

                <div className='pt-16'>
                    <Slider {...settings}>
                        {
                            testimonials.map(t => {
                                return <div key={nanoid()} className='pr-5'><TestimonialCard data={t} /></div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </Section>
    )
}

export default TestimonialSection