import React, {Component} from 'react';
import slide1 from '../img/slide/1.jpg';
import slide2 from '../img/slide/2.jpg';
import slide3 from '../img/slide/3.jpg';
import {Carousel} from 'react-bootstrap';

export default class ImageSlide extends Component {
    render() {
        return (
            <div className="IM" >
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>20 YEARS
                                OF EXISTENCE</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>300+
                                FACULTY MEMBERS</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>5000 YEARS
                                OF COLLECTIVE EXPERIENCE</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}


