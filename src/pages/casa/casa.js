import React from "react";
import { useLittera } from "@assembless/react-littera"
import { Translation } from "../../utils/traduccion";
import "./casa.css"
import MenuHamburguesa from "../../componentes/menuHamburguesa/CustomizedList"
import NestedList from "../../componentes/cabecera/NestedList";
import logo from "../../img/faq/logo-naranja.png"
import ScrollableTabsButtonVisible from "../../componentes/lista/ScrollableTabsButtonVisible"
import Example from "../../componentes/carrusel/Example"
import carroFlotante from "../../img/home/home/carro_muestra.png"
import rueda from "../../img/servicios/servicios/categ01.png"
import motorGris from "../../img/servicios/servicios/categ02.png"
import luz from "../../img/servicios/servicios/categ03.png"
import imagen from "../../img/home/home/publica.png"
import PieDePagina from "../../componentes/pieDePagina/PieDePagina"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { IconButton, Dialog, Typography } from "@mui/material";
import franjaNaranja from "../../img/home/home/mesa_vitrina.png"
import video from "../../img/home/home/video.mp4"
import adorno from "../../img/home/home/div-blog.png"
import EntradaBlog from "../../componentes/entradaBlog/entradaBlog";
import ultimoFondo from "../../img/home/home/servicios-repv.jpg"
import logoBlanca from "../../img/faq/logo-png.png"

function Home() {

    const trans = useLittera(Translation.home)

    return (
        <div>
            <header className="cabeza">
                <div className="sombra">
                    <div className="menuHambueguesa">
                        <MenuHamburguesa />
                    </div>

                    <section className="sectionCabeza">
                        <div className="logoCentro">
                            <img src={logo} />
                            <h1>{trans.pregunta}</h1>
                        </div>

                        <div>
                            <ScrollableTabsButtonVisible />
                        </div>

                    </section>
                    <div className="menuPequeño">
                        <NestedList />
                    </div>
                </div>

            </header>
            <main className="inicio">
                <section className="seccionuno" >
                    <div className="segundoFondo">

                        <Example />
                    </div>
                </section>
                <section className="fondoBlanco">
                    <div className="franjaNaranja">
                        <img src={franjaNaranja} />

                    </div>
                    <div className="parteArriba">
                        <img src={carroFlotante} />
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                    </div>
                    <div className="parteAbajo">
                        <div>

                            <p>{trans.rines}</p>
                            <img src={rueda} />
                        </div>
                        <div>

                            <p>{trans.faros}</p>
                            <img src={motorGris} />
                        </div>
                        <div>

                            <p>{trans.iluminacion}</p>
                            <img src={luz} />
                        </div>
                        <div>

                            <p>{trans.sistema}</p>
                            <img src={rueda} />
                        </div>
                    </div>

                </section>
                <section className="imagen">
                    <img src={imagen} />
                </section>
                <section className="seccioncuatro">
                    <div className="tercerFondo">
                        <Example />
                    </div>
                    <p className="textoDelFondoTres"><span>Eventos dolor sit amet<br></br></span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>

                </section>
                <section className="seccionVideo">
                    <div className="video">
                        <Typography variant="h4" color="GrayText" textAlign='left'>{trans.empresa}</Typography>
                        <video src={video} width="470" height="290"></video>
                        <Typography variant="h4" color="orangered" textAlign='left'>Lorem ipsum</Typography>
                        <Typography variant="body2" textAlign='left' sx={{ color: "#434343" }}>
                            <b>Publicidad sobre un articulo especifico</b>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</Typography>

                    </div>
                    <div className="imagenVideo">
                        <img src={adorno} />
                    </div>
                    <div className="blog">
                        <Typography variant="h3" color="orangered" textAlign='left'>Blog</Typography>
                        <EntradaBlog />
                        <EntradaBlog />
                        <EntradaBlog />
                    </div>
                </section>
                <section className="seccionSexta">
                    <div className="ultimoFondo">
                        <img src={ultimoFondo} />
                    </div>
                    <div className="autosClasico">
                        <div>
                            <img src={logoBlanca} />
                        </div>
                        <p className="negritaAutos">
                            <span >Autos Clasicos<br /></span>
                            Puvlicidad de CONTENIDO, consectetuer adipiscing elit, sed
                            sed diam nonummy nibh auismod tinciddunt ut laoreet dolore mag
                            na aliquam erat volutpat. Ut wisi enim ad minim veniam,quis nostrud
                            nostrud exerci tatio ulla mcorper.
                        </p>
                    </div>

                </section>
            </main>


            <PieDePagina />

            <div className="subirMenu">
                <IconButton color="primary" onClick={() => window.scrollTo(0, 0)}>
                    <ArrowCircleUpIcon sx={{ color: "#abaaaa" }} />
                </IconButton>
            </div>
        </div>
    )

}

export default Home