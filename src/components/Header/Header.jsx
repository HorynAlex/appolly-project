import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import '../Fonts/fonts.css'
import email from '../../Assets/Img/Home/icons/mail.png'
import phone from '../../Assets/Img/Home/icons/phone.png'
import facebook from '../../Assets/Img/Home/icons/facebook-fill.png'
import instagram from '../../Assets/Img/Home/icons/instagram-fill.png'
import twitter from '../../Assets/Img/Home/icons/twitter-fill.png'
import youtube from '../../Assets/Img/Home/icons/youtube-fill.png'
import Logo from '../../Assets/Img/Home/Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {

  const [active, setActive] = useState(false)
  const navbar = useRef()

  window.addEventListener('scroll', function(){
    var header = document.querySelector('.header');
    header.classList.toggle('sticky', this.window.scrollY > 50)
  })

  useEffect(()=>{
    const handle = (e) => {
      if(!navbar.current.contains(e.target)){
        setActive(false);
        console.log("menu is close");
      }
    }
    document.addEventListener('mousedown', handle);

    return ()=>{
      document.removeEventListener('mousedown', handle);
    }
  },[])

  return (
    <header className='header'>
      <div className="container">
        <div className="header_top">
          <div className="left">
            <div className="email">
              <div className="img-box">
                <img src={email} alt="" />
              </div>
              <p className="email">Info@youremail.com</p>
            </div>
            <div className="phone">
              <div className="img-box">
                <img src={phone} alt="" />
              </div>
              <a className="number">(480) 555-0103</a>
            </div>
          </div>
          <div className="right">
            <div className="icons">
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
        <div className="header_bottom">
          <div className="mobile" ref={navbar}>
            <div className={`burger ${active ? 'active' : ''}`} onClick={()=> setActive(!active)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`navbar-mobile ${active ? 'show' : ''}`}>
              <ul className="link-list">
                <li>
                  <a className='link'>
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li>
                  <a className='link'>About</a>
                </li>
                <li>
                  <a className='link'>Features</a>
                </li>
                <li>
                  <a className='link'>Screenshot</a>
                </li>
                <li>
                  <a className='link'>
                    <Link to="/blog">Blog</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="left">
            <a className='link'>
              <Link to="/">Home</Link>
            </a>
            <a className='link'>About</a>
            <a className='link'>Features</a>
          </div>

          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <div className="right">
            <a className='link'>Screenshot</a>
            <a className='link'>
              <Link to="/blog">Blog</Link>
            </a>
            <button className='download'>
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header