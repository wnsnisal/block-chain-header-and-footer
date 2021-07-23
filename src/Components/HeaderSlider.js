import React from 'react';
import { images } from '../helpers/CarouselData';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import headerBackground from '../images/header-background.jpg';
import '../styles/CarouselStyle.css';

export default function HeaderSlider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={headerBackground}
            alt="First slide"
          />
          <div className="col-12" style={{ position: 'absolute', top: "0", padding: "25px" }}>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6">
                <dv className="row">
                  <div className="col-12">
                    <h1 className="carouselHeading">{images[0].title}</h1>
                  </div>
                  <div className="col-12">
                    <span className="carouselText">{images[0].description}</span>
                  </div>
                  <div className="col-12">
                    <button className="btn carouselButton">Discover more</button>
                  </div>
                </dv>

              </div>
              <div className="col-12 col-sm-12 col-md-6">
                <img src={images[0].image} />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={headerBackground}
            alt="Second slide"
          />
          <div className="col-12" style={{ position: 'absolute', top: "0", padding: "25px" }}>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6">
                <dv className="row">
                  <div className="col-12">
                    <h1 className="carouselHeading">{images[1].title}</h1>
                  </div>
                  <div className="col-12">
                    <span className="carouselText">{images[1].description}</span>
                  </div>
                  <div className="col-12">
                    <button className="btn carouselButton">Discover more</button>
                  </div>
                </dv>

              </div>
              <div className="col-12 col-sm-12 col-md-6">
                <img src={images[1].image} />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={headerBackground}
            alt="Third slide"
          />
          <div className="col-12" style={{ position: 'absolute', top: "0", padding: "25px" }}>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6">
                <dv className="row">
                  <div className="col-12">
                    <h1 className="carouselHeading">{images[2].title}</h1>
                  </div>
                  <div className="col-12">
                    <span className="carouselText">{images[2].description}</span>
                  </div>
                  <div className="col-12">
                    <button className="btn carouselButton">Discover more</button>
                  </div>
                </dv>

              </div>
              <div className="col-12 col-sm-12 col-md-6">
                <img src={images[2].image} />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
