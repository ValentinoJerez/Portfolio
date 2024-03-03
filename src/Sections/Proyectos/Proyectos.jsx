import style from "../Proyectos/Proyectos.module.css"

import Link from "../../assets/Link.png"
import GitHub from "../../assets/BiGithub.png"
import Creva from "../../assets/CreVaGroup.png"
import Barber from "../../assets/BarberiaAlura.png"

function Proyectos() {
    return (
        <div>
            <h2 className={style.titulo}>Proyectos</h2>
            <div className={style.Container}>
                <div className={style.card}>
                    <div className={style.imagenTexto}>
                        <img src={Creva} alt="" className={style.imagen} />
                        <h4>CreVa Group</h4>
                        <p>En colaboración con un equipo, contribuí al desarrollo de una página web para una empresa dedicada a impulsar las carreras profesionales de las personas. Nuestra misión fue crear una experiencia en línea que simplificara y optimizara la búsqueda laboral.</p>
                        <div className={style.links}>
                            <a href="https://creva.vercel.app/" target="_blank"><img src={Link} alt="" className={style.Link} />Demo</a>
                            <a href="http://" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className={style.Link} />Repositorio</a>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.imagenTexto}>
                        <img src={Barber} alt="" className={style.imagen} />
                        <h4>Barberia Alura</h4>
                        <p>Como parte de mi estudio en el programa ONE, desarrolle </p>
                        <div className={style.links}>
                            <a href="https://github.com/ValentinoJerez/BarberiaAlura" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className={style.Link} />Repositorio</a>
                        </div>
                    </div>
                </div>
                {/* <div className={style.card}>
                    <div className={style.imagenTexto}>
                        <img src={Barber} alt="" className={style.imagen} />
                        <h4>Barberia Alura</h4>
                        <p></p>
                        <div className={style.links}>
                            <a href="https://creva.vercel.app/" target="_blank"><img src={Link} alt="" className={style.Link} />Demo</a>
                            <a href="http://" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className={style.Link} />Repositorio</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Proyectos;