import React from 'react';
import './Todaydeal.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Todaydeal() {

    //button functionality

    let imageRow = document.querySelector('.image-row');

    function backward () {
        let width = imageRow.clientWidth;
        imageRow.scrollLeft = imageRow.scrollLeft -  width;
    }

    function forward () {
        let width = imageRow.clientWidth;
        imageRow.scrollLeft = imageRow.scrollLeft +  width;
    }

  return (
    <div className='today-deal'>
        <h2>Today's Deals<span>See all offers</span></h2>

        <div className='image-row-flex'>

            <div className='image-row-btn-flex'>
                <button className='image-row-btn' id='image-row-btn-back' onClick={backward}>
                    <ArrowBackIosNewIcon sx={{fontSize: '30px'}}/>
                </button>
                    
                <button className='image-row-btn' id='imgae-row-btn-forward' onClick={forward}>
                    <ArrowForwardIosIcon sx={{fontSize: '30px'}}/>
                </button>
            </div>
 
            <div className='image-row'>
                <img src='https://m.media-amazon.com/images/I/71aJJQtVnoL._AC_SY200_.jpg' alt='' />


                <img src='https://m.media-amazon.com/images/I/61AHiYyu3ZL._AC_SY200_.jpg' alt='' />

                <img src='https://m.media-amazon.com/images/I/61eaeqlbsUL._AC_SY200_.jpg' alt='' />         

                <img src='https://m.media-amazon.com/images/I/71VXrDt47XL._AC_SY200_.jpg' alt='' />

                <img src='https://m.media-amazon.com/images/I/615p+mDN4+L._AC_SY200_.jpg' alt='' />

                <img src='https://m.media-amazon.com/images/I/819DWQLgjKL._AC_SY200_.jpg' alt='' />

                <img src='https://m.media-amazon.com/images/I/71nzWfUAt+L._AC_SY200_.jpg' alt='' />

                <img src='https://m.media-amazon.com/images/I/61jOliJK5CL._AC_SY200_.jpg' alt='' />

                <img src='https://m.media-amazon.com/images/I/61Fj5wTOQiL._AC_SY200_.jpg' alt='' />

                <img src='https://m.media-amazon.com/images/I/71g09REHnkL._AC_SY200_.jpg' alt='' />

                <img src='https://m.media-amazon.com/images/I/71aTghUQfqL._AC_SY200_.jpg' alt='' />

                <img src='https://m.media-amazon.com/images/I/61QiBo-sPTL._AC_SY200_.jpg' alt='' />

                <img src='https://m.media-amazon.com/images/I/61akt30bJsL._AC_SY200_.jpg' alt='' />

                <img src='https://m.media-amazon.com/images/I/61gnwDgVZbL._AC_SY200_.jpg' alt='' />
    
            </div>

        </div>
    </div>
  )
}

export default Todaydeal
