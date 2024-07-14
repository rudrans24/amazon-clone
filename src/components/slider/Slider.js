import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './Slider.css';

function Slider() {

  const imgItem = document.querySelectorAll(".image-item");
  let startSlider = 0;
  const endSlider = (imgItem.length-1) * 100;

  function slideRight () {
    if (startSlider>=-endSlider+100){
      startSlider = startSlider - 100;
    }
    else {
      startSlider = 0;
    }

    imgItem.forEach(element => {
      element.style.transform = `translateX(${startSlider}%)`;
    })
  }

  function slideLeft () {
    if (startSlider<0){
      startSlider = startSlider + 100;
    }
    else {
      startSlider = -600;
    }

    imgItem.forEach(element => {
      element.style.transform = `translateX(${startSlider}%)`;
    })
  }

  function autoSlide () {
    slideRight()
  }

  setInterval(autoSlide, 5000);

  return (
    <div className='slider'>
      <div className='image-list'>

        <div className='image-item'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/June/Unrec/166-1._CB555072489_.jpg' alt=''/>
        </div>

        <div className='image-item'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/karigar/BeUnic_GW_PC_hero._CB554636735_.jpg' alt=''/>
        </div>

        <div className='image-item'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/2024/June/GW/Unrec/GW-Heros-Pc-08-revise._CB554583455_.jpg' alt=''/>
        </div>

        <div className='image-item'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/D132995370_Homepage_DesktopHeroTemplate_3000x1200._CB557152260_.jpg' alt=''/>
        </div>

        <div className='image-item'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg' alt=''/>
        </div>

        <div className='image-item'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Skincare-trust-Mobfdfo._CB554429490_.jpg' alt=''/>
        </div>

        <div className='image-item'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Aman/May/3000X1200_1._CB555953523_.jpg' alt=''/>
        </div>

        <div className='btn-container'>
          <button onClick={slideLeft} className='slider-btn' id='slide-btn-left'><ArrowBackIosNewIcon /></button>
          
          <button onClick={slideRight} className='slider-btn' id='slide-btn-right'><ArrowForwardIosIcon /></button>
          
        </div>

      </div>
    </div>
  )
}

export default Slider
