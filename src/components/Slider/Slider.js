import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class SimpleSlider extends Component {
  render () {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={'https://images.unsplash.com/photo-1532787799187-93655e51d472?ixlib=rb-1.2.1&w=1000&q=80'} alt='img' />
          </div>
          <div>
            <img src={'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=428&h=214&q=60'} alt='img' />
          </div>
          <div>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaeL9UuyUmZ9PKixAz_L8nfzGT6i35y847e4oU6JJcmSRGUHH'} alt='img' />
          </div>
        </Slider>
      </div>
    )
  }
}

export default SimpleSlider
