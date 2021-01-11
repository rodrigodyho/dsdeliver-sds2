import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as IntagramIcon } from './instagram.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior

            <div className="footer-icons">
                <a href="https://www.youtube.com/" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.instagram.com/" target="_new">
                    <IntagramIcon />
                </a>
                <a href="https://www.linkedin.com/" target="_new">
                    <LinkedinIcon />
                </a>

            </div>
        </footer>
    )
}

export default Footer;