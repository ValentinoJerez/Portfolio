import style from "../Footer/Footer.module.css"

import GitHub from "../../assets/Github.png"
import Instagram from "../../assets/Instagram.png"
import LinkedIn from "../../assets/Linkedin.png"
import Behance from "../../assets/BehanceLogo.png"

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.redes}>
                <a href="https://www.linkedin.com/in/valentino-jerez/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="Linkedin Logo" /></a>
                <a href="https://github.com/ValentinoJerez" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub Logo" /></a>
                <a href="https://www.behance.net/valentinojerez" target="_blank" rel="noopener noreferrer"><img src={Behance} alt="Behance Logo" /></a>
                <a href="https://www.instagram.com/valen_jerez03/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram Logo" /></a>
            </div>
            <div>
                <p>&copy; Valentino Jerez | 2024</p>
            </div>
        </footer>
    )
}

export default Footer;