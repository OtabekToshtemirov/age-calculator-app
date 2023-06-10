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
        </footer>
    );
}

export default Footer;