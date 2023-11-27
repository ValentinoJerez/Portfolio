import { NavLink } from "react-router-dom";
import style from "../NavBar/NavBar.module.css"

export default function NavBar(){
    return(
        <div className={style.Nav}>
            <div>
                <NavLink to="/SobreMi">Sobre Mi</NavLink>
                <NavLink to="/Educacion">Educacion</NavLink>
            </div>
        </div>
    )
}
