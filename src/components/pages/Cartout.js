import React from 'react';
import Checkout from '../checkout/Checkout';
import { useState } from 'react';
import Navigation from '../navigation/Navigation';
import Sidebar from '../sidebar/Sidebar';
import Slider from '../slider/Slider';
import Header from '../header/Header';

function Cartout() {

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    };

    return (
        <div>
            <Header />
            <Navigation click={handleClick} />
            <Sidebar open={open} click={handleClick} />
            <Checkout />
        </div>
    )
}

export default Cartout
