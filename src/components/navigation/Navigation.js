import './Navigation.css';
import MenuIcon from '@mui/icons-material/Menu';

function Navigation({ click }) {
    return (
        <div className='navigation'>
            <div className='navigation-container'>
                <ul className='navigation-list'>
                    <li className='border-white all' onClick={click}>
                        <div className='hozn-bar'>
                            <MenuIcon className='three-bar' />
                            All
                        </div>
                    </li>
                    <li className='list-item border-white'>
                        <a href='#' >Fresh Meat</a>
                    </li>
                    <li className='list-item border-white'>
                        <a href='#' >Amazon miniTV</a>
                    </li>
                    <li className='list-item border-white'>
                        <a href='#' >Sell</a>
                    </li>
                    <li className='list-item border-white'>
                        <a href='#' >Best Sellers</a>
                    </li>
                    <li className='list-item border-white'>
                        <a href='#' >Mobiles</a>
                    </li>
                    <li className='list-item border-white'>
                        <a href='#' >Today's Deals</a>
                    </li>
                    <li className='list-item border-white'>
                        <a href='#' >Fashion</a>
                    </li>
                    <li className='list-item border-white'>
                        <a href='#' >Electronics</a>
                    </li>
                    <li className='list-item border-white prime-img-hover'>
                        <a href='#' className=''>Prime</a>
                        <img className='prime-img' src='https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB612889281_.jpg' />
                    </li>
                    <li className='list-item border-white'>
                        <a href='#' >New Releases</a>
                    </li>
                    <li className='list-item border-white'>
                        <a href='#' >Customer Service</a>
                    </li>
                </ul>

                <div className='navigation-ad border-white'>
                    <img src='https://m.media-amazon.com/images/G/31/img19/SiddMiniTV/SWM_400x392._CB553927340_.jpg' />
                </div>
            </div>
        </div>
    )
}

export default Navigation
