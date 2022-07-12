import React, { useEffect } from "react";
import Cabecera from "../../componentes/cabecera/Cabecera";
import primerFondo from "../../img/servicios/servicios/back-header.jpg"
import "./servicios.css"
import fondoCurva from "../../img/servicios/servicios/fondo-curva.png"
import carroAmarillo from "../../img/servicios/servicios/galeriag4.jpg";
import carroAzul from "../../img/servicios/servicios/galeriag2.jpg";
import carroRojo from "../../img/servicios/servicios/galeriag3.jpg"
import motor from "../../img/servicios/servicios/galeriag5.jpg"
import carroNaranja from "../../img/servicios/servicios/galeriag1.jpg"
import franja from "../../img/servicios/servicios/back-categorias.png"
import rueda from "../../img/servicios/servicios/categ01.png"
import motorGris from "../../img/servicios/servicios/categ02.png"
import luz from "../../img/servicios/servicios/categ03.png"
import PieDePagina from "../../componentes/pieDePagina/PieDePagina";
import segundaPortada from "../../img/servicios/servicios/back-servicios.jpg"
import { useNavigate } from "react-router-dom";
import RepuestosServicios from "../../componentes/repuestosServicios/repuestosServicios";

function Servicios() {

    const navegacion = useNavigate()
    const usuario = localStorage.getItem("usuario")
    const repuestos = [
        { imagen: rueda },
        { imagen: motorGris },
        { imagen: luz },
        { imagen: rueda },
        { imagen: motorGris },
        { imagen: luz }
    ]
    useEffect(() => {

        if (!usuario) navegacion('/')
    }, [])
    if (!usuario) return <></>
    return (
        <div>
            <Cabecera />
            <main className="incioServicios">
                <div className="primeraImagen">
                    <img src={primerFondo} />
                </div>

                <p className="textoflotanteServicios">
                    <span>Servicios dolor sit amet<br /></span>
                    <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec rutrum dictum sodales. Nunc a ipsum mi. Maecenas massa
                    ligula, sagittis at tincidunt nec, consequat at orci. Nam
                    rhoncus lacinia rhoncus. Vivamus libero velit, aliquam nec
                    consectetur nec, mattis vel purus. Nullam maximus, diam id
                    aliquet laoreet, enim magna porttitor lacus, vitae sodales
                </p>

                <div className="fondoCurva">
                    <img src={fondoCurva} />
                </div>
                <h3 className="classic">Classic Cars</h3>

                <section className="tiraDeFotos">
                    <img src={carroAmarillo} />
                    <img src={carroAzul} />
                    <img src={carroRojo} />
                    <img src={motor} />
                </section>

                <div className="carroNaranja">
                    <img src={carroNaranja} />
                </div>
                <section className="quinta">
                    <div className="backCategorias">
                        <img src={franja} />
                    </div>
                    <div className="ultimosElementos">
                        <div className="textoflotanteBlanco">
                            <span>Lorem ipsum dolor sit amet, consecte<br></br></span>
                            <p><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec rutrum dictum sodales. Nunc a ipsum mi. Maecenas massa
                                ligula, sagittis at tincidunt nec, consequat at orci. Nam
                                rhoncus lacinia rhoncus. Vivamus libero velit, aliquam nec
                                consectetur nec, mattis vel purus. Nullam maximus, diam id
                                aliquet laoreet, enim magna porttitor lacus, vitae sodales</p>
                        </div>

                        <section className="listaDeRepuestos">
                            {
                                repuestos.map((key, i) =>
                                    <RepuestosServicios imagen={key.imagen} />
                                )
                            }
                        </section>
                    </div>
                </section>

                <section className="ultima">
                    <div className="segundaPortada">
                        <img src={segundaPortada} />
                    </div>
                    <p className="ultimosTextoFlotante">
                        <span>Lorem ipsum dolor sit amet, consecte<br></br></span>
                        <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec rutrum dictum sodales. Nunc a ipsum mi. Maecenas massa
                        ligula, sagittis at tincidunt nec, consequat at orci. Nam
                        rhoncus lacinia rhoncus. Vivamus libero velit, aliquam nec
                        consectetur nec, mattis vel purus. Nullam maximus, diam id
                        aliquet laoreet, enim magna porttitor lacus, vitae sodales
                    </p>
                </section>



            </main>

            <PieDePagina />

        </div>
    )
}

export default Servicios