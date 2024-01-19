import React, { useState } from 'react'
import './blog.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import home from '../../Assets/Img/Blog/home.png'

import data_blog from '../../data/blogs.json'
import { Link } from 'react-router-dom'

import recent1 from '../../Assets/Img/Blog/RecentPost/img1.png'
import recent2 from '../../Assets/Img/Blog/RecentPost/img2.png'
import recent3 from '../../Assets/Img/Blog/RecentPost/img3.png'
import recent4 from '../../Assets/Img/Blog/RecentPost/img4.png'
import recent5 from '../../Assets/Img/Blog/RecentPost/img5.png'
import arrow from '../../Assets/Img/Blog/arrow-right.png'

const Blog = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPages = 5;
  const lastIndex = currentPage * recordsPages; //Обчислює індекс останнього запису на поточній сторінці, помножуючи номер поточної сторінки на кількість записів на сторінці.
  const firstIndex = lastIndex - recordsPages; //Обчислює індекс першого запису на поточній сторінці, віднімаючи кількість записів на сторінці.
  const records = data_blog.slice(firstIndex, lastIndex); //Витягує підмасив з масиву data_blog, включаючи записи від firstIndex до lastIndex. Це представляє собою записи, які будуть відображені на поточній сторінці.
  const npage = Math.ceil(data_blog.length / recordsPages); //Обчислює загальну кількість сторінок npage на основі загальної кількості записів у data_blog та кількості записів на сторінці.
  const numbers = [...Array(npage+1).keys()].slice(1); //Створює масив чисел від 1 до npage (включно) за допомогою оператора розгортання масиву та методу keys(). Потім відсікає перший елемент, оскільки номер сторінки починається з 1, а не з 0.
  
  console.log(lastIndex)
  console.log(firstIndex)
  console.log(records)
  // console.log(npage)
  // console.log(numbers)

  function changeCPage(id){
    setCurrentPage(id)
    window.scrollTo(0,0);
  }

  return (
    <>
      <Header></Header>

      <section className="home">
        <div className="container">
          <h1 className="title">BLOG</h1>
          <div className="place">
            <div className="img-box">
              <img src={home} alt="" />
            </div>
            <div className="road">
              <Link to="/">
                <a href="" className='way'>Home</a>
              </Link>
              <span>/</span>
              <a href="" className='way'>Blog</a>
            </div>
          </div>
        </div>
      </section>

      <section className="posts">
        <div className="container">
          <div className="main_post">
            <div className="box-container">
              {
                records.map((blog)=>(
                  <div className="box" key={blog.id}>
                    <img src={blog.img} />
                    <div className="info">
                      <h1 className="title">
                        {blog.title}
                      </h1>
                      <p className="desc">
                        {blog.desc}
                      </p>
                      <Link to={`/blog/blog_info/${blog.id}`}>
                        <a href="" className="link">Read more</a>
                      </Link>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="pagination">
              {
                numbers.map((n, i) => (
                  <a className={`page-item ${currentPage === n ? 'active' : ''}`} key={i} onClick={()=>changeCPage(n)}>
                    {n}
                  </a>
                ))
              }
            </div>
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

export default Blog