import React from 'react';
import './Header.css'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

function Header() {

    const { cart } = useSelector(item => item.basket)
    var user = useSelector(item => item.user)

    const handleAuth = () => {
        if (user) {
            signOut(auth);
        }
    }

  return (
    <div className='header'>
        <Link to='/'>
        <div className='logo-container border-white'>
            <div className='logo'></div>
            <span className='dotin'>.in</span>
        </div>
        </Link>

        <div className='address-container border-white'>
            <p className='pincode'>Delivering to Hyderabad 501510</p>
            <div className='icon-address'>
                <FmdGoodOutlinedIcon className='icon-location'/>
                <p className='location-text'>Update location</p>
            </div>
        </div>

        <div className='search-bar'>
            <select className='search-all'>
                <option>All</option>
            </select>
            <input type='text' className='search-text' placeholder='Search Amazon.in'/>
            <div className='search-icon'>
                <SearchSharpIcon />
            </div>
        </div>

        <div className='header-right-menu'>

            <div className='language-flex border-white'>
                <div className='language-image'>
                    <img src='https://cdn.britannica.com/97/1597-004-7C2918C6/Flag-India.jpg'/>
                </div>
                <select className='language-dropdown'>
                    <option>EN</option>
                </select>
            </div>
            <Link to={!user && '/login'}>
                <div className='sign-in border-white'>
                    <p onClick={handleAuth} className='hello-text'>Hello, {user?user:"sign in"}</p>
                    <select className='account-text'>
                        <option>Account & Lists</option>
                    </select>
                </div>
            </Link>

            <div className='returns-orders border-white'>
                <p className='returns-text'>Returns</p>
                <p className='orders-text'>& Orders</p>
            </div>
            <Link to='/checkout'>
                <div className='cart-container border-white'>
                    <ShoppingCartIcon className='cart-logo'/>
                    <div className='cart-number'>{cart?.length}</div>
                </div>
            </Link>

        </div>
    </div>
  )
}

export default Header
