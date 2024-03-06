import style from "../Formacion/Formacion.module.css"

import AP from "../../assets/LogoAP.png"
import Henry from "../../assets/LogoHenry.png"
import CoderHouse from "../../assets/LogoCoderHouse.png"

function Formacion() {
    return (
        <div className={style.container}>
            <h2 className={style.titulo}>Formacion Academica</h2>
            <div className={style.containerCards}>
                <div>
                    <div className={style.card}>
                        <img src={AP} alt="AP-Logo" />
                    </div>
                    <h4>Desarrollo Web Full Stack</h4>
                    <h5>2022 - 2023</h5>
                </div>
                <div>
                    <div className={style.card}>
                        <img src={Henry} alt="Henry-Logo" className={style.logo} />
                    </div>
                    <h4>Bootcamp de Desarrollo Web Full Stack</h4>
                    <h5>Agosto 2023 - Noviembre 2023</h5>
                </div>
            </div>
            <h3>Cursos</h3>
            <div className={style.containerCards}>
                <div>
                    <div className={style.card}>
                    <img src={CoderHouse} alt="CoderHouse-Logo" className={style.logo} />
                    </div>
                    <h4>Curso Photoshop e Illustrator</h4>
                    <h5>Agosto 2023 - Octubre 2023</h5>
                    </div>
                    <div>
                    <div className={style.card}>
                    <img src={CoderHouse} alt="CoderHouse-Logo" className={style.logo} />
                    </div>
                    <h4>Diseño UX/UI</h4>
                    <h5>Octubre 2023 - Enero 2024</h5>
                </div>
            </div>
        </div>
    )
}

export default Formacion;