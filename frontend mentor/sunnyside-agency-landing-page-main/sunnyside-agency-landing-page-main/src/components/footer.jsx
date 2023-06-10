import logo from '../../images/logo.svg'
import './footer.css'
import facebook from '../../images/icon-facebook.svg'
import pinterest from '../../images/icon-pinterest.svg'
import instagram from '../../images/icon-instagram.svg'
import twitter from '../../images/icon-twitter.svg'


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="footer-menu">
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
                <div className="footer-icons">
                    <img src={facebook} alt=""/>
                    <img src={instagram} alt=""/>
                    <img src={twitter} alt=""/>
                    <img src={pinterest} alt=""/>
                </div>
            </div>
            <p className={'centered'}>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer"> Frontend Mentor</a>.
                Coded by <a href="https://www.github.com/otabektoshtemirov"> Otabek Toshemirov</a>.
            </p>
        </footer>
    );
}

export default Footer;