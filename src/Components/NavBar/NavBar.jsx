import { Link } from "react-router-dom";
import style from "../NavBar/NavBar.module.css"

import Icono from "../../assets/Icono-Cohete.png"

function NavBar() {
    return (
        <nav>
            <div class="navbar-container">
                <button type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"></button>
                <div id="navbar-toggler">
                    <img src={Icono} width="50" alt="Logo Pagina Web" />
                    <ul class="navbar-menu">
                        <li><a aria-current="page" href="#">Sobre mí</a></li>
                        <li><a href="#">Educación</a></li>
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar