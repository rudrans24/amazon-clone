import React from 'react';
import Slider from '../slider/Slider';
import Navigation from '../navigation/Navigation';
import Sidebar from '../sidebar/Sidebar';
import Productrow from '../productrow/Productrow';
import Todaydeal from '../todaydeal/Todaydeal';
import Productlist from '../productlist/Productlist';
import Header from '../header/Header';
import { useState } from 'react';
import Footer from '../footer/Footer';

function Home() {

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open)
  };

  return (
    <div className='home'>
      <Header />
      <Navigation click={handleClick} />
      <Sidebar open={open} click={handleClick} />
      <Slider />
      <Productrow />
      <Todaydeal />
      <Productlist />
      <Footer />
    </div>
  )
}

export default Home
