import './index.scss'
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
                <a href='#home'
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    <img src={Home} alt="home icon"/>
                </a>
            </li>
            <li className='nav-item'>
                <a href='#contact'
                onClick={() => handlePageChange('Contacts')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    <img src={Mail} alt="home icon"/>
                </a>
            </li>
            <li className='nav-item'>
                <a href='#work' onClick={() => handlePageChange('Work')}
                className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}>
                    <img src={Work} alt="home icon"/>
                </a>
            </li>
        </ul>
    </nav>
    </div>
)

export default Sidebar

