import NavBar from "../../components/NavBar/NavBar";

import style from "./Inicio.module.css"
import Perfil from "../../assets/perfil1SF.png"

function Inicio() {
    return (
        <div>
            <NavBar />
            <section className={style.Presentacion}>
                <div className={style.Contenido}>
                    <h1>Hola, mi nombre es Valentino Jerez y soy desarrollador web full stack</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia soluta veritatis facere non consequuntur provident
                        quas possimus tempore nesciunt incidunt, exercitationem sequi atque maxime, beatae ex asperiores, id veniam a.</p>
                    <div className={style.Redes}>
                        <ul className={style.ListaRedes}>
                            <li><a href="https://www.linkedin.com/in/valentino-jerez/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                            <li><a href="https://github.com/ValentinoJerez" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="https://www.behance.net/valentinojerez" target="_blank" rel="noopener noreferrer">Behance</a></li>
                            <li><a href="https://www.instagram.com/valen_jerez03/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="http://" target="_blank" rel="noopener noreferrer">Curriculum</a></li>
                        </ul>
                    </div>
                </div>
                <img src={Perfil} alt="Foto Perfil" className={style.ImagenPerfil} />
            </section>
        </div>
    )
}

export default Inicio;