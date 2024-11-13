import React from 'react'
import Info from '../../component/Info'
import Stats from '../../component/Stats'
import { FaDownload } from 'react-icons/fa'
import CV from "../../assets/resume.pdf"
import Skills from '../../component/Skills'
import { resume } from '../../data'
import ResemeItems from '../../component/ResemeItems'
import './about.css'



const About = () => {
  return (
   <main className='section container'>
    <section className='about'>
      <h2 className='section__title'>
        About <span>Me</span>
      </h2>

      <div className="about__container grid">
        <div className="about__info">
          <h3 className="section__subtitle">Personal Infos</h3>

          <ul className="info__list grid">
            <Info />
          </ul>

          <a href='CV' download='resume.pdf' className='button'>
            Download CV
            <span className='button__icon'>
              <FaDownload/>
              </span>
          </a>
        </div>

        <div className="stats grid">
          <Stats />
        </div>
      </div>
    </section>

    <div className="separator"></div>
      
      <section className='skills'>
        <h3 className='section__subtitle subtitle__center'>
          My Skills</h3>
        
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className='resume'>
        <h3 className="section__subtitle subtitle__center">
         Education
        </h3>

        <div className="resume__container grid">
          {resume.map(item => (
              <div key={item.id} className="resume__data">
                <ResemeItems {...item} />
              </div>
            ))}
        </div>

      </section>
    
   </main>
  )
}

export default About
            
            
