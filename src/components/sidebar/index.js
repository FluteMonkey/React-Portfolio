import './index.scss'
import { Link } from "react-router-dom";
import Jesus from '../../assets/images/Jesus.JPG';
import Home from '../../assets/images/home.png';
import Mail from '../../assets/images/mail.png';
import Work from '../../assets/images/people.png';

const Sidebar = ({ currentPage, handlePageChange }) => (
    <div className='nav-bar'>
        <a className='logo' href='#home'>
            <img src={Jesus} alt="temp logo" />
        </a>
        <nav>
        <ul>
            <li className='nav-item'>
                <Link to="/">
                    <img src={Home} alt="home icon"/>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/contact">
                    <img src={Mail} alt="home icon"/>
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/work">
                    <img src={Work} alt="Work icon"/>
                </Link>
            </li>
        </ul>
    </nav>
    </div>
)

export default Sidebar

