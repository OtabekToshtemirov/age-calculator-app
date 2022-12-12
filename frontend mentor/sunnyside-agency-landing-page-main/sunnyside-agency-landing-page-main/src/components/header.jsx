import logo from '../../images/logo.svg';
import iconArrowDown from '../../images/icon-arrow-down.svg';
import './header.css';
import { useState } from 'react';

function Header() {
    const [active, setActive] = useState(false);

    const activator = () => {
        setActive(!active);
        if (!active) {
            document.querySelector('.nav').classList.remove('active');
            document.querySelector('.menu').classList.remove('active');
            document.querySelector('.toggle').classList.remove('active');
        } else {
            document.querySelector('.nav').classList.add('active');
            document.querySelector('.toggle').classList.add('active');
            document.querySelector('.menu').classList.add('active');
        }
    }

    const clicked = () => {
        document.querySelector('.nav').classList.remove('active');
        document.querySelector('.menu').classList.remove('active');
        document.querySelector('.toggle').classList.remove('active');
        setActive(false);
    }






    return (<>
            <div className="header">
                <div className="container">
                    <nav className='nav'>
                        <div className="logo">
                            <a href="index.html">
                                <img src={logo} alt="logo"/>
                            </a>
                        </div>
                        <div className="menu">
                            <ul>
                                <li onClick={clicked}><a href="#">About</a></li>
                                <li onClick={clicked}><a href="#">Services</a></li>
                                <li onClick={clicked}><a href="#">Projects</a></li>
                                <li onClick={clicked}><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="toggle" onClick={activator}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </nav>
                    <div className="text">
                        <h1>We are creatives</h1>
                        <img src={iconArrowDown} alt="icon arrow down"/>
                    </div>

                </div>
            </div>
        </>);
}

export default Header;