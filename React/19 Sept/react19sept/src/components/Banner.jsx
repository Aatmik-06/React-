import Carousel from 'react-bootstrap/Carousel';

import img1 from "../images/r1.jpg";
import img2 from "../images/r2.jpg";
import img3 from "../images/r3.jpg";

const Banner=()=>{
    return(
        <>
       <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img src={img1} height={"200px"} width={"100%"}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img src={img2} height={"200px"}width={"100%"}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img src={img3} height={"200px"}width={"100%"}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

        </>
    )
  }
  
  export default Banner;