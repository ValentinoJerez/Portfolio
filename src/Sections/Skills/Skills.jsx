import style from "./Skills.module.css"

import HTML from "../../assets/LogosHtml5.png"
import  CSS from "../../assets/LogosCss3.png"
import JavaScript from "../../assets/LogosJavascript.png"
import React from "../../assets/LogosReact.png"
import Redux from "../../assets/LogosRedux.png"
import Node from "../../assets/LogosNodejs.png"
import Tailwind from "../../assets/LogoTailwindcss.png"
import Postgre from "../../assets/LogosPostgresql.png"
import Figma from "../../assets/DeviconFigma.png"
import Photoshop from "../../assets/DeviconPhotoshop.png"
import Illustrator from "../../assets/SkillIconsIllustrator.png"

function Skills() {
    return (
        <div>
            <h2>Skills</h2>
            <div className={style.skillContainer}>
                <div className={style.card}>
                    <img src={HTML} alt="HTML-Logo" />
                </div>
                <div className={style.card}>
                    <img src={CSS} alt="CSS-Logo" />
                </div>
                <div className={style.card}>
                    <img src={JavaScript} alt="JavaScript-Logo" />
                </div>
                <div className={style.card}>
                    <img src={React} alt="React-Logo" />
                </div>
                <div className={style.card}>
                    <img src={Redux} alt="Redux-Logo" />
                </div>
                <div className={style.card}>
                    <img src={Node} alt="NodeJS-Logo" />
                </div>
                <div className={style.card}>
                    <img src={Tailwind} alt="Tailwind-Logo" />
                </div>
                <div className={style.card}>
                    <img src={Postgre} alt="PostgreSQL-Logo" />
                </div>
                <div className={style.card}>
                    <img src={Figma} alt="Figma-Logo" />
                </div>
                <div className={style.card}>
                    <img src={Photoshop} alt="Photoshop-Logo" />
                </div>
                <div className={style.card}>
                    <img src={Illustrator} alt="Illustrator-Logo" />
                </div>
            </div>
        </div>
    )
}

export default Skills;