import style from "../Views/Home.module.css"
import NavBar from "../Components/NavBar/NavBar"

function Home() {
    return (
        <div className={style.Home}>
            <NavBar />
        </div>
    )
}

export default Home;