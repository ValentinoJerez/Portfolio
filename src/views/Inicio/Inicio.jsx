import NavBar from "../../components/NavBar/NavBar";
import Skills from "../../Sections/Skills/Skills";
import Formacion from "../../Sections/Formacion/Formacion";
import Proyectos from "../../Sections/Proyectos/Proyectos";
import Contacto from "../../Sections/Contacto/Contacto";
import Footer from "../../components/Footer/Footer";

import style from "./Inicio.module.css"
import Perfil from "../../assets/perfil1SF.png"

function Inicio() {
    return (
        <div className={style.container}>
            <NavBar />
            <section className={style.Presentacion}>
                <div className={style.Contenido}>
                    <h1>¡Hola! Mi nombre es Valentino Jerez y soy desarrollador web</h1>
                    <p>Graduado del Bootcamp de Desarrollo Web Full Stack en Henry, mi pasión por la tecnología y el aprendizaje constante
                        me ha llevado a participar actualmente en el proyecto Oracle ONE en Alura Latam, donde sigo ampliando mis habilidades y conocimientos.</p>
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
                <img src={Perfil} alt="Foto Perfil" className={style.ImagenPerfil}/>
            </section>
            <div id="Sobre-mi">
                <section className={style.SobreMi}>
                    <h2>Sobre Mi</h2>
                    <p>Soy Valentino, tengo 20 años, soy de Buenos Aires, Argentina.
                        Disfruto explorando nuevas tecnologías y expandiendo mis habilidades de forma autodidacta.
                        Siempre estoy buscando oportunidades para aprender y crecer en este emocionante campo.</p>
                    <p>Actualmente, estoy en la búsqueda de mi primer empleo formal. Sueño con encontrar un trabajo que
                        no solo me permita aplicar mis conocimientos, sino también seguir aprendiendo y creciendo tanto personal como profesionalmente.
                        Estoy ansioso por embarcarme en esta nueva etapa y contribuir con mi pasión y dedicación a proyectos innovadores.</p>
                </section>
            </div>
            <div id="Skills">
                <Skills />
            </div>
            <div id="Formacion">
                <Formacion />
            </div>
            <div id="Proyectos">
                <Proyectos />
            </div>
            <Contacto />
            <Footer />
        </div>
    )
}

export default Inicio;