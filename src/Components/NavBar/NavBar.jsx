import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div class="collapse navbar-collapse" id="navbar-toggler">
                    <img src="Imagenes/Icono-Cohete.png" width="50" alt="Logo Pagina Web" />
                    <ul class="navbar-nav" d-flex justify-content-center align-items-center>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Sobre mi</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Educacion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Proyectos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar