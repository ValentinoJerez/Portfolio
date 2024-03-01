import style from "../Formacion/Formacion.module.css"

import AP from "../../assets/LogoAP.png"
import Henry from "../../assets/LogoHenry.png"
import CoderHouse from "../../assets/LogoCoderHouse.png"

function Formacion() {
    return (
        <div className={style.container}>
            <h2>Formacion Academica</h2>
            <div className={style.containerCards}>
                <div className={style.card}>
                    <img src={AP} alt="" />
                </div>
                <div className={style.card}>
                    <img src={Henry} alt="" className={style.logo}/>
                </div>
                <div className={style.card}>
                    <img src={CoderHouse} alt="" className={style.logo}/>
                </div>
                <div className={style.card}>
                    
                </div>
            </div>
        </div>
    )
}

export default Formacion;