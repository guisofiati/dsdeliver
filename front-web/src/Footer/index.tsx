import './styles.css';
import { ReactComponent as YouTubeIcon} from './youtube.svg';
import { ReactComponent as LinkedinIcon} from './linkedin.svg';
import { ReactComponent as InstagramIcon} from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
           Siga, curta e acompanhe nossas postagens nas redes sociais! 
           <div className="footer-icons">
                <a href="https://github.com/guisofiati" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/guisofiati/" target="_new">
                    <LinkedinIcon />
                </a>  
                <a href="https://www.instagram.com/s0fiati/" target="_new">
                    <InstagramIcon />
                </a>  
           </div>
        </footer>
    )
}

export default Footer;