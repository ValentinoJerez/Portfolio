import NavBar from "../Components/NavBar/NavBar"

function Home() {
    return (
        <div>
            <style>{`body {margin: 0;}`}</style>
            <div className="bg-cover h-screen" style={{ backgroundImage: "url('src/assets/Fondo-constellation.png')" }}>
                <NavBar />
                <h1 className="text-white text-4xl font-bold">Hola</h1>
            </div>
        </div>
    )
}

export default Home;