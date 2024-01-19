import React from 'react'
import './footer.css'
import '../Fonts/fonts.css'
import facebook from '../../Assets/Img/Home/icons/facebook-fill.png'
import instagram from '../../Assets/Img/Home/icons/instagram-fill.png'
import twitter from '../../Assets/Img/Home/icons/twitter-fill.png'
import youtube from '../../Assets/Img/Home/icons/youtube-fill.png'
import send from '../../Assets/Img/Home/Footer/send.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="box-container">
          <div className="box">
            <h1>LOGO</h1>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
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
          <div className="box">
            <h1>Quick Link</h1>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Screenshot</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div className="box">
            <h1>News Letter</h1>
            <p className='desc'>
              Subscribe our newsletter to get our latest update & news
            </p>
            <div className="input-box">
              <input type="text"  placeholder='Your email address'/>
              <button type='submit' className='button'>
                <img src={send} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright 2024. Horyn Oleksandr. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer