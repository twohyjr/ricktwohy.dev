import { NavLink } from 'react-router-dom'

// Images
import profileCircle from '../Assets/profile-circle.png'

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
    faUser,
    faLaptopCode,
    faFileAlt,
    faEnvelopeOpenText,
    faCode
} from '@fortawesome/free-solid-svg-icons'

import ReactTooltip from 'react-tooltip';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ReactTooltip />
            <h3>Rick Twohy</h3>
            <img src={profileCircle} width="160" alt="My Logo" />
            <p>
                Hi, my name is Rick Twohy and i'm a senior software engineer.  Welcome to my personal Website.
            </p>
            <ul className="social-links">
                <a href="https://github.com/twohyjr" target="_blank" rel="noreferrer">
                    <li className="social-list-item" data-tip="GitHub" label="GitHub">
                        <FontAwesomeIcon icon={faGithub} fixedWidth />
                    </li>
                </a>
                <a href="https://www.linkedin.com/in/twohyjr/" target="_blank" rel="noreferrer">
                    <li className="social-list-item" data-tip="LinkedIn" label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                    </li>
                </a>
                <a href="https://www.codewars.com/users/twohyjr" target="_blank" rel="noreferrer">
                    <li className="social-list-item" data-tip="CodeWars" label="CodeWars">
                        <FontAwesomeIcon icon={faCode} fixedWidth />
                    </li>
                </a>
                <a href="https://www.youtube.com/channel/UCh1CHiHhUzsE9C0qfxWiXxA" target="_blank" rel="noreferrer">
                    <li className="social-list-item" data-tip="Youtube" label="Youtube">
                        <FontAwesomeIcon icon={faYoutube} fixedWidth />
                    </li>
                </a>
            </ul>
            <hr />
            <nav className="site-nav">
                <ul>
                    <li>
                        <NavLink exact={true} to='/' activeClassName='is-active' className="site-link">
                            <FontAwesomeIcon icon={faUser} fixedWidth /> About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/woodshop' activeClassName='is-active' className="site-link">
                            <FontAwesomeIcon icon={faLaptopCode} fixedWidth /> Woodshop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/resume' activeClassName='is-active' className="site-link">
                            <FontAwesomeIcon icon={faFileAlt} fixedWidth /> Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName='is-active' className="site-link">
                            <FontAwesomeIcon icon={faEnvelopeOpenText} fixedWidth /> Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
