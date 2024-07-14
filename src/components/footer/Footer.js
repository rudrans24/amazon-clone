import React from 'react';
import './Footer.css';
import LanguageIcon from '@mui/icons-material/Language';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

function Footer() {
  return (
    <div className='footer'>
      <div className='foot-1'>
        <p>Back to top</p>
      </div>
      <div className='foot-2'>
        <div className='menu-list'>
            <div className='list-down'>
                <h2>Get to Know Us</h2>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Science</p>
            </div>
            <div className='list-down'>
                <h2>Connect with Us</h2>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className='list-down'>
                <h2>Make Money with Us</h2>
                <p>Sell on Amazon</p>
                <p>Sell under Amazon Accelerator</p>
                <p>Protect and Build Your Brand</p>
                <p>Amazon Global Selling</p>
                <p>Become an Affiliate</p>
                <p>Fulfilment by Amazon</p>
                <p>Advertise Your Products</p>
                <p>Amazon Pay on Merchants</p>
            </div>
            <div className='list-down'>
                <h2>Let Us Help You</h2>
                <p>COVID-19 and Amazon</p>
                <p>Your Account</p>
                <p>Returns Center</p>
                <p>Recalls and Product Safety Alerts</p>
                <p>100% Purchase Protection</p>
                <p>Amazon App Download</p>
                <p>Help</p>
            </div>
        </div>
        <div className='logo-list'>
            <img src='https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png' className='footer-logo' alt='' />
            <div className='language-list'>
                <LanguageIcon className='lang-icon'/>
                <p>English</p>
                <UnfoldMoreIcon className='unfold-icon'/>
            </div>
            <div className='region-list'>
                <img src='https://th.bing.com/th/id/R.607b9f69862d76af04b474113c0c7ff5?rik=lfnOsbv7mhDNbQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fbc%2fFlag_of_India.png&ehk=Pk5lH0C%2fhstFahWfb15vLjtrJb3DslIU4%2fAQneo9IIM%3d&risl=&pid=ImgRaw&r=0' alt='' className='flag-img' />
                <p>India</p>
            </div>
        </div>
      </div>
      <div className='foot-3'>
        <div className='footer-list'>
            <div className='service-row'>
                <div className='service-list'>
                    <h2>AbeBooks</h2>
                    <p>Books, art</p>
                    <p>& collectibles</p>
                </div>
                <div className='service-list'>
                    <h2>Amazon Web Services</h2>
                    <p>Scalable Cloud</p>
                    <p>Computing Services</p>
                </div>
                <div className='service-list'>
                    <h2>Audible</h2>
                    <p>Download</p>
                    <p>Audio Books</p>
                </div>
                <div className='service-list'>
                    <h2>IMDb</h2>
                    <p>Movies, TV</p>
                    <p>& Celebrities</p>
                </div>
            </div>
            <div className='service-row'>
                <div className='service-list'>
                    <h2>AbeBooks</h2>
                    <p>Books, art</p>
                    <p>& collectibles</p>
                </div>
                <div className='service-list'>
                    <h2>Amazon Web Services</h2>
                    <p>Scalable Cloud</p>
                    <p>Computing Services</p>
                </div>
                <div className='service-list'>
                    <h2>Audible</h2>
                    <p>Download</p>
                    <p>Audio Books</p>
                </div>
                <div className='service-list'>
                    <h2>IMDb</h2>
                    <p>Movies, TV</p>
                    <p>& Celebrities</p>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <div className='copyright-row'>
                <p>Conditions of Use & Sale</p>
                <p>Privacy Notice</p>
                <p>Interest-Based Ads</p>
            </div>
            <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
