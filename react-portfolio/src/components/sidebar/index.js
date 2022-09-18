import { link, NavLink } from 'react-router-dom';
import './index.scss'
import Jesus from '../../assets/images/Jesus.JPG';
import Home from '../../assets/images/home.png';
import Mail from '../../assets/images/mail.png';
import Work from '../../assets/images/people.png';

const Sidebar = () => (
    <div className='nav-bar'>
        <a className='logo' href='#home'>
            <img src={Jesus} alt="temp logo" />
        </a>
        <nav>
        <ul>
            <li className='nav-item'>
                <a href='#home' className='active'>
                    <img src={Home} alt="home icon"/>
                </a>
            </li>
            <li className='nav-item'>
                <a href='#contact' className='active'>
                    <img src={Mail} alt="home icon"/>
                </a>
            </li>
            <li className='nav-item'>
                <a href='#work' className='active'>
                    <img src={Work} alt="home icon"/>
                </a>
            </li>
        </ul>
    </nav>
    </div>
)

export default Sidebar

