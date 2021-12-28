import React from 'react'
import Slider from "react-slick";

const Trending = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay:true,  
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
        <>
          <div className="container-fluid shadow-lg my-4 py-5">
          <Slider {...settings}>
          <div>
            <img src="/images/15.jpg" className="img-fluid custom-slide"alt=""/>
            <h3>oppo mobile new brand</h3>
            <p>This is al sort description</p>
          </div>
          <div>
          <img src="/images/16.jpg" className="img-fluid custom-slide"alt=""/>
          <h3>Lava r1 2021</h3>
          <p>This is al sort description</p>
          </div>
          <div>
          <img src="/images/17.jpg" className="img-fluid custom-slide"alt=""/>
          <h3>iphone 13 pro</h3>
          <p>This is al sort description</p>
          </div>
          <div>
          <img src="/images/18.jpg" className="img-fluid custom-slide"alt=""/>
          <h3>lenovo laptop</h3>
          <p>This is al sort description</p>
          </div>
          <div>
          <img src="/images/14.jpg" className="img-fluid custom-slide"alt=""/>
          <h3>oppo mobile new brand</h3>
          <p>This is al sort description</p>
          </div>
          <div>
          <img src="/images/16.jpg" className="img-fluid custom-slide"alt=""/>
          <h3>oppo mobile new brand</h3>
          <p>This is al sort description</p>
          </div>
          <div>
          <img src="/images/18.jpg" className="img-fluid custom-slide"alt=""/>
          <h3>oppo mobile new brand</h3>
          <p>This is al sort description</p>
          </div>
          <div>
          <img src="/images/15.jpg" className="img-fluid custom-slide"alt=""/>
          <h3>oppo mobile new brand</h3>
          <p>This is al sort description</p>
          </div>
        </Slider>
            

              </div>  
        </>
    )
}

export default Trending
