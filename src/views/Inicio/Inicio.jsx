import NavBar from "../../components/NavBar/NavBar";
import Skills from "../../Sections/Skills/Skills";
import Formacion from "../../Sections/Formacion/Formacion";
import Proyectos from "../../Sections/Proyectos/Proyectos";
import Footer from "../../components/Footer/Footer";

import style from "./Inicio.module.css"
import Perfil from "../../assets/perfil1SF.png"

function Inicio() {
    return (
        <div>
            <NavBar />
            <section className={style.Presentacion}>
                <div className={style.Contenido}>
                    <h1>Hola, mi nombre es Valentino Jerez y soy desarrollador web</h1>
                    <p>Graduado del Bootcamp de Desarrollo Web Full Stack en Henry, mi pasión por la tecnología y el aprendizaje constante
                        me ha llevado a participar en el proyecto Oracle ONE en Alura Latam, donde sigo ampliando mis habilidades y conocimientos</p>
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
            <section className={style.SobreMi}>
                <h2>Sobre Mi</h2>
                <p>Soy Valentino, un apasionado desarrollador web 
                     con experiencia en la creación de soluciones digitales innovadoras. Mi enfoque se centra en la calidad, la eficiencia y la entrega de resultados excepcionales. Busco constantemente nuevas oportunidades para crecer y contribuir al mundo del desarrollo web.</p>
                <p></p>
            </section>
            <Skills />
            <Formacion />
            <Proyectos />
            <Footer />
        </div>
    )
}

export default Inicio;