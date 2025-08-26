import React from 'react';
import GoToTop from '../components/GoToTop';
import './style.scss';
import email from './media/emailIcon.png';
import linkedin from './media/linkedinIcon.png';
import github from './media/githubIcon.png';
import resume from './media/resumeIcon.png';
import resumepdf from './media/Resume - Jennifer Weir.pdf';
  
  
const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'Center', alignItems: 'Center' }} className="font-link">
      <div class="content">
        <div class="content__container">
          <p class="content__container__text">
            Hello
          </p>
          
          <ul class="content__container__list">
            <li class="content__container__list__item">world</li>
            <li class="content__container__list__item">coders</li>
            <li class="content__container__list__item">creators</li>
            <li class="content__container__list__item">everyone!</li>
          </ul>
        </div>

        <div class="subcontent">
          <p class="subcontent__container__text">
            I'm Jennifer Weir.
          </p>

          <div style={{ display: 'flex', alignItems: 'Center' }} className="subcontent__container">
            <div>
                <a href="mailto: jennweir@umich.edu">
                  <img src={email} alt="email" style={{ width: '20%', margin: '2%' }}></img>
                </a>
                <a href="https://www.linkedin.com/in/jennifer-weir">
                  <img src={linkedin} alt="linkedin" style={{ width: '20%', margin: '2%' }}></img>
                </a>
                <a href="https://github.com/jennweir">
                  <img src={github} alt="github" style={{ width: '20%', margin: '2%' }}></img>
                </a>
                <a href={resumepdf} target="_blank" rel="noreferrer">
                  <img src={resume} alt="resume" style={{ width: '20%', margin: '2%' }}></img>
                </a>
            </div>
          </div>



        </div>
      <GoToTop />
      </div>
    </div>
  );
};
  
export default Home;