import { Link } from "react-router-dom";
import style from "../NavBar/NavBar.module.css"

import Icono from "../../assets/Icono-Cohete.png"

function NavBar() {
    return (
        <nav className={style.container}>
                <div className={style.Icono}>
                    <img src={Icono} className={style.logo} alt="Logo Pagina Web" />
                </div>
                <div id="navbar-toggler">
                    <ul className={style.menu}>
                        <li><a aria-current="page" href="#">Sobre mí</a></li>
                        <li><a href="#">Educación</a></li>
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
        </nav>

    )
}

export default NavBar