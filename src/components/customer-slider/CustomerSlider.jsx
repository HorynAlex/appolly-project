import React from 'react'

import { Navigation, Pagination, EffectCoverflow  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import './slider.css'

import people from '../../Assets/Img/Home/Team/avatar.png'

const CustomerSlider = () => {
  return (
    <section className="customers">
        <div className="container">
          <div className="head">
            <h1 className="title">
              Our Happy Customers
            </h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
          </div>

          <div className="slider">
          <Swiper
              effect= {'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={
                {
                  rotate: 0,
                  stretch: 0,
                  depth: 850,
                  modifier:1.5                  
                }
              }
              pagination={{clickable:true}}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className='swiper_customers'
            >
              <SwiperSlide className='slider-customer'>
                <div className="box">
                  <div className="img-box">
                    <img src={people} alt="" />
                  </div>
                  <div className="info">
                    <h1 className="title">
                      Ann Lubin
                    </h1>
                    <h3 className="profesion">
                      Co-Founder
                    </h3>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slider-customer'>
                <div className="box">
                  <div className="img-box">
                    <img src={people} alt="" />
                  </div>
                  <div className="info">
                    <h1 className="title">
                      Ann Lubin
                    </h1>
                    <h3 className="profesion">
                      Co-Founder
                    </h3>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='slider-customer'>
              <div className="box">
              <div className="img-box">
                <img src={people} alt="" />
              </div>
              <div className="info">
                <h1 className="title">
                  Ann Lubin
                </h1>
                <h3 className="profesion">
                  Co-Founder
                </h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </p>
              </div>
            </div>
              </SwiperSlide>
              <SwiperSlide className='slider-customer'>
              <div className="box">
              <div className="img-box">
                <img src={people} alt="" />
              </div>
              <div className="info">
                <h1 className="title">
                  Ann Lubin
                </h1>
                <h3 className="profesion">
                  Co-Founder
                </h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </p>
              </div>
            </div>
              </SwiperSlide>
              <SwiperSlide className='slider-customer'>
              <div className="box">
              <div className="img-box">
                <img src={people} alt="" />
              </div>
              <div className="info">
                <h1 className="title">
                  Ann Lubin
                </h1>
                <h3 className="profesion">
                  Co-Founder
                </h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </p>
              </div>
            </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
  )
}

export default CustomerSlider