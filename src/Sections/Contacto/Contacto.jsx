import style from "../Contacto/Contacto.module.css"

function Contacto() {
    return (
        <div className={style.Contacto}>
            <h2>Contacto</h2>
            <p><b>¿Quieres contactarme?</b></p>
            <p>Enviame un email y me pondre en contacto contigo lo antes posible.</p>
            <h3><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkHWMqCbhrWVCvPxpnxdHbzRhwxptbvKQlvTnkWgfxcgRdtmwqZlQCNbnHVRjtkdKmkcJC" target="_blank" rel="noopener noreferrer">valenjerez69@gmail.com</a></h3>
        </div>
    )
}

export default Contacto;