import React from 'react';
import './Sidebar.css';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CloseIcon from '@mui/icons-material/Close';

function Sidebar({ open, click }) {
    return (
        <div className={open ? "sidebar sidebar-show" : "sidebar"}>
            <div className='sidebar-left'>
                <div className='sidebar-left-top'>
                    <AccountCircleRoundedIcon sx={{ fontSize: '1.9rem' }} />
                    <h2>Hello,<span className='sign'>sign in</span></h2>
                </div>

                <div className='sidebar-content'>
                    <div className='sidebar-item'>
                        <h2>Trending</h2>
                        <p>Best Sellers</p>
                        <p>New Releases</p>
                        <p>Movers and Shakers</p>
                    </div>

                    <div className='sidebar-item'>
                        <h2>Digital Content and Devices</h2>
                        <p>Echo & Alexa</p>
                        <p>Fire TV</p>
                        <p>Kindle E-Readers & eBooks</p>
                        <p>Audible Audiobooks</p>
                        <p>Amazon Prime Video</p>
                        <p>Amazon Prime Music</p>
                    </div>

                    <div className='sidebar-item'>
                        <h2>Shop by Category</h2>
                        <p>Mobiles, Computers</p>
                        <p>Men's Fashion</p>
                        <p>Women's Fashion</p>
                        <p>See all</p>
                    </div>

                    <div className='sidebar-item'>
                        <h2>Programs & Features</h2>
                        <p>Amazon Pay</p>
                        <p>Gift Cards & Mobile Recharges</p>
                        <p>Amazon Launchpad</p>
                        <p>Handloom and Handicrafts</p>
                        <p>See all</p>
                    </div>

                    <div className='sidebar-item'>
                        <h2>Help & Settings</h2>
                        <p>Your Account</p>
                        <p>Customer Service</p>
                        <p>Sign in</p>
                    </div>
                </div>
            </div>
            <button onClick={click} className='close-icon'>
                <CloseIcon sx={{ fontSize: '2.1rem' }} />
            </button>
        </div>
    )
}

export default Sidebar
