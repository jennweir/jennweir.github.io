import React from 'react';
import GoToTop from '../components/GoToTop';
import './style.scss';
  
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
            <li class="content__container__list__item">creatives</li>
            <li class="content__container__list__item">everyone!</li>
          </ul>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};
  
export default Home;