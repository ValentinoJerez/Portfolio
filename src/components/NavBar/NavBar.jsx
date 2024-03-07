import style from "./NavBar.module.css"

function NavBar() {
    return (
        <div className={style.NavBar}>
            <h3><a href="#"><b>Valentino Jerez</b></a></h3>
            <ul className={style.lista}>
                <li className={style.item}><a href="#Sobre-mi">Sobre Mi</a></li>
                <li className={style.item}><a href="#Skills">Skills</a></li>
                <li className={style.item}><a href="#Formacion">Educacion</a></li>
                <li className={style.item}><a href="#Proyectos">Proyectos</a></li>
                <li className={style.item}><h4><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkHWMqCbhrWVCvPxpnxdHbzRhwxptbvKQlvTnkWgfxcgRdtmwqZlQCNbnHVRjtkdKmkcJC" target="_blank" rel="noopener noreferrer"><b>valenjerez69@gmail.com</b></a></h4></li>
            </ul>
        </div>
    )
}

export default NavBar;