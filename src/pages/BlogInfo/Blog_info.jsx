import React from 'react'
import './blog_info.css'

import { Link, useParams } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import home from '../../Assets/Img/Blog/home.png'

import recent1 from '../../Assets/Img/Blog/RecentPost/img1.png'
import recent2 from '../../Assets/Img/Blog/RecentPost/img2.png'
import recent3 from '../../Assets/Img/Blog/RecentPost/img3.png'
import recent4 from '../../Assets/Img/Blog/RecentPost/img4.png'
import recent5 from '../../Assets/Img/Blog/RecentPost/img5.png'
import arrow from '../../Assets/Img/Blog/arrow-right.png'

import main_img from '../../Assets/Img/Blog/blog_info_img.png'

import timer from '../../Assets/Img/Blog/icons/timer.png'
import person from '../../Assets/Img/Blog/icons/person.png'
import message from '../../Assets/Img/Blog/icons/message.png'

import video from '../../Assets/Img/Blog/Img-box.png'
import play from '../../Assets/Img/Home/HowToUse/playbutton.png'

import row_1 from '../../Assets/Img/Blog/rows/row-1.png'
import row_2 from '../../Assets/Img/Blog/rows/row-2.png'

import profile from '../../Assets/Img/Blog/Profile.png'

import facebook from '../../Assets/Img/Home/Team/facebook.png'
import instagram from '../../Assets/Img/Home/Team/instagram.png'
import twitter from '../../Assets/Img/Home/Team/twitter.png'
import youtube from '../../Assets/Img/Home/Team/youtube.png'


const Blog_info = () => {
  console.log(useParams())

  const {id} = useParams();

  return (
    <>
      <Header></Header>

      <section className="home">
        <div className="container">
          <h1 className="title">
            The Snap Pixel: How It Works and How to Install 
          </h1>
          <div className="place">
            <div className="img-box">
              <img src={home} alt="" />
            </div>
            <div className="road">
              <Link to="/">
                <a href="" className='way'>Home</a>
              </Link>
              <span>/</span>
              <Link to="/blog">
                <a href="" className='way'>Blog</a>
              </Link>
              <span>/</span>
              <a href="" className='way'>Blog details</a>
            </div>
          </div>
        </div>
      </section>

      <section className="posts">
        <div className="container">
          <div className="main_post">
            <div className="img_box">
              <img src={main_img} alt="" />
            </div>
            <div className="data_pers_comment">
              <div className="box">
                <div className="img-box">
                  <img src={timer} alt="" />
                </div>
                <h3 className="name">
                  January 25, 2021
                </h3>
              </div>
              <div className="box">
                <div className="img-box">
                  <img src={person} alt="" />
                </div>
                <h3 className="name">
                  Charlie Herwitz
                </h3>
              </div>
              <div className="box">
                <div className="img-box">
                  <img src={message} alt="" />
                </div>
                <h3 className="name">
                  50 Comment
                </h3>
              </div>
            </div>
            <div className="box-container">
              <div className="main_title">
                <p className="title main_title">
                  The Memphis Design movement is one of unlikeliest success stories in the history of design. Like so many artistic reactions, it began as an outlet for its creators, a way to rail against and confound elite sensibilities. The result was a style that was revolutionary in its time and whose spirit is a continual source of inspiration to this day.
                </p>
                <p className="title">
                  As popular and influential as Memphis Design has been over the years, it can sometimes get a bad rap. It is a loud, colorful style that is hard to separate from its era. And when implemented without care, it can make some design projects feel antiquated. On the other hand, a good designer can turn these sins into virtues: obnoxious retro becoming lively nostalgia.
                </p>
                <p className="title">
                  Memphis Design is a 1980s design aesthetic characterized by scattered, brightly colored shapes and lines. It typically combines circles and triangles with black-and-white graphic patterns such as polka dots and squiggly lines.
                </p>
              </div>
              <div className="video">
                <div className="intro">
                  <div className="img-box">
                    <img src={video} alt="" />
                  </div>
                  <div className="button-play">
                    <img src={play} alt="" />
                  </div>
                </div>
              </div>
              <div className="box-desc">
                <p className="desc">
                  Imagine you’re at a party, and you’re bored. You’ve been bored for a while—years, it feels like. You wonder how a party, something that is supposed to be fun, can feel like it’s draining the life out of your very soul. As you look around the yawning faces of the guests, you realize it’s going to take drastic measures to salvage any excitement out of this long night. So you sneak a desperate gulp of your drink, slip on your tinted sunglasses and leap atop of the sofa. You’ve sacrificed yourself to karaoke.
                </p>
              </div>
              <div className="rows">
                <div className="row">
                  <div className="img-box">
                    <img src={row_1} alt="" />
                  </div>
                  <p className="name">
                    The birth of Memphis Design was a lot like this, starting with a gathering of architects and industrial designers in Milan, Italy in 1981. But it wasn’t the party that bored the guests. It was the general state of design—how creativity had stagnated to become corporate and uniform.
                  </p>
                </div>

                <div className="row">
                  <div className="img-box">
                    <img src={row_2} alt="" />
                  </div>
                  <p className="name">
                    Long before all this, there had been a number of fine art and design movements that precipitated Memphis Design, and these were likely on the guests’ minds as they traced where it all had gone wrong.
                    Kadinsky composition On White
                    Kadinsky’s work also likely inspired the Memphis design movement.
                  </p>
                </div>
              </div>
            </div>
            <div className="author">
              <div className="left">
                <div className="img-box">
                  <img src={profile} alt="" />
                </div>
                <div className="social">
                  <div className="icon">
                    <img src={facebook} alt="" />
                  </div>
                  <div className="icon">
                    <img src={instagram} alt="" />
                  </div>
                  <div className="icon">
                    <img src={twitter} alt="" />
                  </div>
                  <div className="icon">
                    <img src={youtube} alt="" />
                  </div>
                </div>
              </div>
              <div className="right">
                <h3 className="name">Charlie Herwitz</h3>
                <h6 className="profecion">UI Designer</h6>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor porttitor est amet, volutpat augue a sodales nec, vitae. Pulvinar vitae eu sed elit vitae.
                </p>
              </div>
            </div>
            <div className="comments"></div>
          </div>
          <aside className='recent_post'>
            <div className="input-box">
              <input type="text" placeholder='Search for...'/>
            </div>

            <div className="box-container">
              <h3 className="title">Recent Post</h3>
              <div className="box">
                <div className="img-box">
                  <img src={recent1} alt="" />
                </div>
                <h3 className="title">
                  Irina Rozovsky captures Brooklyn’s Prospect Park in a romantic light
                </h3>
              </div>

              <div className="box">
                <div className="img-box">
                  <img src={recent2} alt="" />
                </div>
                <h3 className="title">
                  A new online show is tracing leading artists’ early commer-cial practice
                </h3>
              </div>

              <div className="box">
                <div className="img-box">
                  <img src={recent3} alt="" />
                </div>
                <h3 className="title">
                  Think Food Bank project uses stickers to prompt people to contribute
                </h3>
              </div>

              <div className="box">
                <div className="img-box">
                  <img src={recent4} alt="" />
                </div>
                <h3 className="title">
                  A new photo book is celebra ting LA’s vibrant lowrider culture
                </h3>
              </div>

              <div className="box">
                <div className="img-box">
                  <img src={recent5} alt="" />
                </div>
                <h3 className="title">
                  The indie publishers adapting to the pandemic
                </h3>
              </div>
            </div>

            <div className="category">
              <h1 className="title">
                Category
              </h1>
              <ul className='category-list'>
                <li className='category-item'>
                  <div className="img-box">
                    <img src={arrow} alt="" />
                  </div>
                  <h5>E-commars app</h5>
                </li>

                <li className='category-item'>
                  <div className="img-box">
                    <img src={arrow} alt="" />
                  </div>
                  <h5>Banking app</h5>
                </li>

                <li className='category-item'>
                  <div className="img-box">
                    <img src={arrow} alt="" />
                  </div>
                  <h5>Business app</h5>
                </li>

                <li className='category-item'>
                  <div className="img-box">
                    <img src={arrow} alt="" />
                  </div>
                  <h5>Video app</h5>
                </li>

                <li className='category-item'>
                  <div className="img-box">
                    <img src={arrow} alt="" />
                  </div>
                  <h5>E-commars app</h5>
                </li>
              </ul>
            </div>

            <div className="tags">
              <h1 className="title">
                Tags
              </h1>
              <ul className='tags-list'>
                <li className='tags-item'>
                  <a href="" className=''>E-commars app</a>
                </li>
                <li className='tags-item'>
                  <a href="" className=''>Music app</a>
                </li>
                <li className='tags-item'>
                  <a href="" className=''>Bank app</a>
                </li>
                <li className='tags-item'>
                  <a href="" className=''>Social app</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer></Footer>
    </>
  )
}

export default Blog_info