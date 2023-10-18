import React from 'react'
import Section, { SectionDescription, SectionTitle } from '../Section'
import Slider from 'react-slick';
import { SoftwareList } from '@/data/Softwares';
import { nanoid } from 'nanoid';
import SoftwareCard from './SoftwareCard';

const SoftwareSliderSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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
        <Section>
            <div className='container mx-auto'>
                <div className='my-10 flex flex-col items-center space-y-3'>
                    <div className="max-w-2xl text-center">
                        <SectionTitle className=''>Discover Our Versatile Software Solutions</SectionTitle>
                        {/* <SectionDescription >
                            Explore a world of possibilities with our range of cutting-edge software solutions. From streamlining operations to enhancing customer experiences, our software is designed to empower your business. Swipe through to see how we can transform your industry.
                        </SectionDescription> */}
                    </div>
                </div>

                <div >
                    <Slider {...settings}>
                        {
                            SoftwareList.map(sof => {
                                return (
                                    <div key={nanoid()}>
                                        <SoftwareCard {...sof} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </Section>
    )
}

export default SoftwareSliderSection