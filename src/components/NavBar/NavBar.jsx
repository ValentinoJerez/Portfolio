import style from "./NavBar.module.css"

function NavBar() {
    return (
        <div className={style.NavBar}>
            <ul className={style.lista}>
                <li className={style.item}>
                    <h4>Valentino Jerez</h4>
                </li>
                <li className={style.item}><a href="">Sobre Mi</a></li>
                <li className={style.item}><a href="">Skills</a></li>
                <li className={style.item}><a href="">Educacion</a></li>
                <li className={style.item}><a href="">Proyectos</a></li>
                <li className={style.item}><h4>valenjerez69@gmail.com</h4></li>
            </ul>
        </div>
    )
}

export default NavBar;