import React from 'react'
import './Shop'
import {Carousel} from 'react-bootstrap'
class Slider extends React.Component {

    render() {
        return(
            <Carousel fade className="slider">
                <Carousel.Item interval={4000}>
                    <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/1331/9421/t/6/assets/slide4.jpg?v=7441337087663666703"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/1331/9421/t/6/assets/slide5.jpg?v=11891945162065202782"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/1331/9421/t/6/assets/slide1.jpg?v=12728600628972236300"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }   
}

export default Slider