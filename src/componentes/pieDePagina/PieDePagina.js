import React from "react";
import "./pieDePagina.css"
import franja from "../../img/home/home/div-blog.png"
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Button, Stack, TextField } from "@mui/material";
import paypal from "../../img/faq/paypal-footer2.png";
import logoFooter from "../../img/faq/logo-png.png"
import { useLittera } from "@assembless/react-littera"
import { Translation } from "../../utils/traduccion";
import ContactoPiePagina from "../contactoPieDePagina/contactoPiePagina";
import slogan from "../../img/faq/slogan.png"
import logosolo from "../../img/faq/logosolo.png"

function PieDePagina() {
    const trans = useLittera(Translation.contacto)

    const contacto = [
        {
            icono: <YouTubeIcon />,
            redSocial: "@carprojectsofficial"
        },
        {
            icono: <InstagramIcon />,
            redSocial: "@car.projecsts"
        },
        {
            icono: <WhatsAppIcon />,
            redSocial: "+58 414-9710220"
        },
        {
            icono: <TwitterIcon />,
            redSocial: "@thecarprojects"
        },
        {
            icono: <FacebookOutlinedIcon />,
            redSocial: "@carprojectsofficial"
        },
        {
            icono: <EmailIcon />,
            redSocial: "carprojects@gmail.com"
        },

    ]

    return (
        <div>
            <footer className="pie">
                <div className="logos">
                    <img className="logosolo" src={logosolo} />
                    <img className="slogan" src={slogan} />
                </div>
                <section className="primeraParteDelFooter">

                    <div className="contactos">
                        {
                            contacto.map((key, i) =>
                                <ContactoPiePagina icono={key.icono} redSocial={key.redSocial} />
                            )
                        }


                    </div>
                    <div className="paypalFormulario">
                        <div className="miniFormulario">
                            <p>{trans.reInformacion}</p>


                            <TextField
                                id="filled-nombre"
                                label={trans.nombre}
                                variant="filled"
                                size="small"
                            />

                            <TextField
                                id="filled-email"
                                label="Email"
                                variant="filled"
                                size="small"
                            />
                            <Button sx={{ marginRight: "6%" }} id="botonEnviar" variant="contained">Enviar</Button>

                        </div>
                        <div className="paypal">
                            <img src={paypal} />
                        </div>
                    </div>
                    <aside>
                        copyright @ 2018 <span>Car Projects</span><br />
                        {trans.TeryCon} &nbsp;
                        {trans.diseñado}
                    </aside>
                </section>
                <section className="segundaParteDelPie">
                    <div className="franja" >
                        <img src={franja} />
                    </div>
                    <div className="logoPie">
                        <img src={logoFooter} />
                    </div>

                </section>
            </footer>
        </div>
    )
}

export default PieDePagina