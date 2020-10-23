import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './WorkSlider.css';
import carousel_1 from '../../../images/carousel-1.png';
import carousel_2 from '../../../images/carousel-2.png';
import carousel_3 from '../../../images/carousel-3.png';
import carousel_4 from '../../../images/carousel-4.png';
import carousel_5 from '../../../images/carousel-5.png';
import { Container } from 'react-bootstrap';

const WorkSlider = () => {
    const allCarousel = [carousel_1, carousel_2, carousel_3, carousel_4, carousel_5];
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2.5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='slide-container my-5 py-5'>
            <Container>
                <div className="text-center text-white mb-5">
                    <h2 className="font-weight-bolder">Here are some of <span className="text-success">our works</span></h2>
                </div>

                <Carousel
                    responsive={responsive}
                    keyBoardControl={true}
                    showDots={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                >
                    {
                        allCarousel.map((carousel, index) => {
                            return (
                                <div key={index}>
                                    <img src={carousel} alt="" />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </Container>
        </section>
    );
};

export default WorkSlider;