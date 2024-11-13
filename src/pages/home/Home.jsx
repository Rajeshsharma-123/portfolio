import React from 'react';
import Profile from "../../assets/image1.svg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import DynamicText from '../../component/DynamicText';
import "./home.css" ;

const Home = () => {
  return (
      <section className='home section grid'>
          <img src={Profile} alt="" className='home__img' />

          <div className='home__content'>
            <div className='home__data'>
              <h1 className='home__title'>
                   <span>I'm Rajesh Sharma.</span> <DynamicText />
                    
              </h1>

              <p className="home__description">
              Creative and detail-oriented web developer with expertise in front-end design, responsive layouts, and user-centered interfaces. Passionate about transforming ideas into engaging digital experiences. Skilled in HTML, CSS, JavaScript, and modern frameworks to build visually stunning, functional websites.
              </p>

              <Link to='/about' className='button'>
              More About Me {' '}
              <span className='button__icon'><FaArrowRight/></span>
              </Link>
            </div>
          </div>

          <div className="color__block"></div>
      </section>
  )
}

export default Home
