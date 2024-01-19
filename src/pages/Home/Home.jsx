import React, { useEffect, useRef, useState } from 'react'

import { Navigation, Pagination, EffectCoverflow  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import './home.css'
import '../../components/Fonts/fonts.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import mobile from '../../Assets/Img/MobileApp.png'
import GoodlePlay from '../../Assets/Img/Home/GoodlePlay.png'
import AppStore from '../../Assets/Img/Home/AppStore.png'

import about_mobile from '../../Assets/Img/Home/AboutUs/AboutImg.png'

import check from '../../Assets/Img/Home/icons/checkbox.png'
import mobile_app from '../../Assets/Img/Home/AppFuature/App.png'

import browser from '../../Assets/Img/Home/AppFuature/browser.png'
import cell_phone from '../../Assets/Img/Home/AppFuature/cell-phone.png'
import comment from '../../Assets/Img/Home/AppFuature/comment.png'
import eyescan from '../../Assets/Img/Home/AppFuature/eyeScan.png'
import mate from '../../Assets/Img/Home/AppFuature/mate.png'
import vector from '../../Assets/Img/Home/AppFuature/vector.png'
import mobiles from '../../Assets/Img/Home/DownloadApp/downloadApp.png'

import downloaded from '../../Assets/Img/Home/DownloadApp/download.png'
import likes from '../../Assets/Img/Home/DownloadApp/like.png'
import rating from '../../Assets/Img/Home/DownloadApp/starts.png'

import video from '../../Assets/Img/Home/HowToUse/Image.png'
import play from '../../Assets/Img/Home/HowToUse/playbutton.png'

import people from '../../Assets/Img/Home/Team/avatar.png'
import border from '../../Assets/Img/Home/Team/people1.png'

import facebook from '../../Assets/Img/Home/Team/facebook.png'
import instagram from '../../Assets/Img/Home/Team/instagram.png'
import twitter from '../../Assets/Img/Home/Team/twitter.png'
import youtube from '../../Assets/Img/Home/Team/youtube.png'

import blog1 from '../../Assets/Img/Home/Blog/blog1.png'
import blog2 from '../../Assets/Img/Home/Blog/blog2.png'
import blog3 from '../../Assets/Img/Home/Blog/blog3.png'

import email from '../../Assets/Img/Home/icons/mail.png'
import phone from '../../Assets/Img/Home/icons/phone.png'

import mobile1 from '../../Assets/Img/Home/Slider/slider1.png'
import mobile2 from '../../Assets/Img/Home/Slider/slider2.png'
import mobile3 from '../../Assets/Img/Home/Slider/slider3.png'
import mobile4 from '../../Assets/Img/Home/Slider/slider4.png'
import mobile5 from '../../Assets/Img/Home/Slider/slider5.png'
import CustomerSlider from '../../components/customer-slider/CustomerSlider';

const Home = () => {
  return (
    <>
      <Header></Header>

      <section className="main">
        <div className="container">
          <div className="left">
            <div className="box">
              <h1 className='title'>
                A Great App Makes Your Life Better
              </h1>
              <p className="desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>

              <div className="download">
                <h3 className="title">Download App Now</h3>
                <div className="buttons">
                  <a href="" className='app'>
                    <img src={GoodlePlay} alt="" />
                  </a>
                  <a href="" className='app'>
                    <img src={AppStore} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="img-box">
              <img src={mobile} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="about_app">
        <div className="container">
          <div className="head">
            <h1 className="title">
              About Our App
            </h1>
            <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
          </div>
          <div className="inner-box">
            <div className="left">
              <div className="box">
                <div className="img-box">
                  <img src={about_mobile} alt="" />
                </div>
                <div className="circle"></div>
              </div>
            </div>
            <div className="right">
              <div className="box-container">
                <div className="box">
                  <div className="inner-box">
                    <div className="img-box">
                      <img src={check} alt="" />
                    </div>
                    <div className="info">
                      <h3 className="title">
                        Creative Design
                      </h3>
                      <p className="desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="box">
                  <div className="inner-box">
                      <div className="img-box">
                        <img src={check} alt="" />
                      </div>
                      <div className="info">
                        <h3 className="title">
                          easy to use
                        </h3>
                        <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                        </p>
                      </div>
                    </div>
                </div>

                <div className="box">
                  <div className="inner-box">
                    <div className="img-box">
                      <img src={check} alt="" />
                    </div>
                    <div className="info">
                      <h3 className="title">
                        Best user experince
                      </h3>
                      <p className="desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="app_features">
        <div className="container">
          <div className="head">
            <h1 className="title">
              App features
            </h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="img-box">
                <img src={comment} alt="" />
              </div>
              <h3 className="title">
                Full free chat
              </h3>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            
            <div className="img_box">
              <div className="bottom">

              <div className="box">
                <div className="img-box">
                  <img src={vector} alt="" />
                </div>
                <h3 className="title">
                  awsome ui design
                </h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className="box">
                <div className="img-box">
                  <img src={eyescan} alt="" />
                </div>
                <h3 className="title">
                  retina ready greaphics
                </h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              </div>

              <img src={mobile_app} alt="" />

              <div className="top">

                <div className="box">
                  <div className="img-box">
                    <img src={browser} alt="" />
                  </div>
                  <h3 className="title">
                    unlimiter features
                  </h3>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <div className="box">
                  <div className="img-box">
                    <img src={cell_phone} alt="" />
                  </div>
                  <h3 className="title">
                    iso & androind version
                  </h3>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              
              </div>
            </div>
            
            <div className="box">
              <div className="img-box">
                <img src={mate} alt="" />
              </div>
              <h3 className="title">
                24/7 support by real pepole
              </h3>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="checkout">
        <div className="container">
          <div className="head">
            <h1 className="title">
              Checkout Our App Interface Look
            </h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
          </div>
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
                  depth: 100,
                  modifier:2.5
                  
                }
              }
              pagination={{clickable:true}}
              modules={[EffectCoverflow, Pagination]}
              className='swiper_container'
            >
              <SwiperSlide>
                <img src={mobile1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mobile2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mobile3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mobile4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mobile5} alt="" />
              </SwiperSlide>

            </Swiper>
          <div className="download_app">
            <div className="left">

              <div className="head">
                <h1 className="title">
                  Download App Now
                </h1>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </p>
              </div>

              <div className="buttons">
                <a href="" className='app'>
                  <img src={GoodlePlay} alt="" />
                </a>
                <a href="" className='app'>
                  <img src={AppStore} alt="" />
                </a>
              </div>

              <div className="rows">
                <div className="row">
                  <div className="img-box">
                    <img src={downloaded} alt="" />
                  </div>
                  <h3>59865</h3>
                  <h6>Download</h6>
                </div>

                <div className="row">
                  <div className="img-box">
                    <img src={likes} alt="" />
                  </div>
                  <h3>29852</h3>
                  <h6>Like</h6>
                </div>

                <div className="row">
                  <div className="img-box">
                    <img src={rating} alt="" />
                  </div>
                  <h3>1500</h3>
                  <h6>5 start rating</h6>
                </div>
              </div>

            </div>
            <div className="right">
              <div className="box">
                <div className="img-box">
                  <img src={mobiles} alt="" />
                </div>
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how_to_use">
        <div className="container">
          <div className="head">
            <h1 className="title">
              how to use the app perfectly
            </h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
          </div>
          <div className="box">
            <div className="intro">
              <div className="img-box">
                <img src={video} alt="" />
              </div>
              <div className="button-play">
                <img src={play} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <div className="head">
            <h1 className="title">
              Our reative team
            </h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
          </div>

          <div className="box-container">
            <div className="box">
              <div className="img-box">
                <div className="avatar">
                  <img src={people} alt="" />
                </div>
                <div className="border">
                  <img src={border} alt="" />
                </div>
              </div>
              <div className="info">
                <h1 className="title">
                  Carla Press
                </h1>
                <h3 className="profesion">
                  App Developer
                </h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.
                </p>
              </div>
              <div className="social-icons">
                <a className="icon">
                  <img src={facebook} alt="" />
                </a>
                <a className="icon">
                  <img src={instagram} alt="" />
                </a>
                <a className="icon">
                  <img src={twitter} alt="" />
                </a>
                <a className="icon">
                  <img src={youtube} alt="" />
                </a>
              </div>
            </div>

            <div className="box">
              <div className="img-box">
                <div className="avatar">
                  <img src={people} alt="" />
                </div>
                <div className="border">
                  <img src={border} alt="" />
                </div>
              </div>
              <div className="info">
                <h1 className="title">
                  Carla Press
                </h1>
                <h3 className="profesion">
                  App Developer
                </h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.
                </p>
              </div>
              <div className="social-icons">
                <a className="icon">
                  <img src={facebook} alt="" />
                </a>
                <a className="icon">
                  <img src={instagram} alt="" />
                </a>
                <a className="icon">
                  <img src={twitter} alt="" />
                </a>
                <a className="icon">
                  <img src={youtube} alt="" />
                </a>
              </div>
            </div>

            <div className="box">
              <div className="img-box">
                <div className="avatar">
                  <img src={people} alt="" />
                </div>
                <div className="border">
                  <img src={border} alt="" />
                </div>
              </div>
              <div className="info">
                <h1 className="title">
                  Carla Press
                </h1>
                <h3 className="profesion">
                  App Developer
                </h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.
                </p>
              </div>
              <div className="social-icons">
                <a className="icon">
                  <img src={facebook} alt="" />
                </a>
                <a className="icon">
                  <img src={instagram} alt="" />
                </a>
                <a className="icon">
                  <img src={twitter} alt="" />
                </a>
                <a className="icon">
                  <img src={youtube} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomerSlider></CustomerSlider>

      <section className="blog">
        <div className="container">
          <div className="head">
            <h1 className="title">
              Our recent blog
            </h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
          </div>

          <div className="box-container">
            <div className="box">
              <div className="img-box">
                <img src={blog1} alt="" />
              </div>
              <div className="info">
                <h3 className="title">
                  The Snap Pixel: How It Works and How to Install 
                </h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                </p>
                <a href="#" className="link">
                  Read more
                </a>
              </div>
            </div>

            <div className="box">
              <div className="img-box">
                <img src={blog2} alt="" />
              </div>
              <div className="info">
                <h3 className="title">
                  The Snap Pixel: How It Works and How to Install 
                </h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                </p>
                <a href="#" className="link">
                  Read more
                </a>
              </div>
            </div>

            <div className="box">
              <div className="img-box">
                <img src={blog3} alt="" />
              </div>
              <div className="info">
                <h3 className="title">
                  The Snap Pixel: How It Works and How to Install 
                </h3>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                </p>
                <a href="#" className="link">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  )
}

export default Home