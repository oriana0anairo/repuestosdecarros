import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import Cabecera from "../../componentes/cabecera/Cabecera"
import fondo from "../../img/contacto/182026062bkg-contacto.jpg"
import "./contacto.css"
import { useLittera } from "@assembless/react-littera"
import { Translation } from "../../utils/traduccion";
import PieDePagina from "../../componentes/pieDePagina/PieDePagina";
import telegram from "../../img/contacto/contacto-tg.png"
import whatsappgrande from "../../img/contacto/contacto-ws.png";
import "./contacto.css"

function Contacto() {
    const trans = useLittera(Translation.contacto)
    return (
        <div>
            <header>
                <Cabecera />
            </header>
            <main className="mainContacto">

                <div className="contenedorContacto">
                    <section className="formularioContacto">
                        <h1 className="tituloContacto"> Lorem ipsum dolor sit amet, consectetue </h1>

                        <div className="formularioDeAfuera">
                            <div className="formularioDeAdentro">
                                <TextField
                                    id="outlined-basic"
                                    label={trans.nombre}
                                    variant="outlined"
                                    sx={{ m: 1, backgroundColor: '#dfdddd' }}
                                    className="itemFormulario"
                                /* onInput={(e) => {
                                    e.target.value = e.target.value
                                        .replace(/[^a-zA-Z ]{2,254}/g, "")
                                }} */

                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    sx={{ m: 1, backgroundColor: '#dfdddd' }}
                                    className="itemFormulario"

                                />
                                <TextField
                                    id="outlined-basic"
                                    label={trans.telefono}
                                    variant="outlined"
                                    sx={{ m: 1, backgroundColor: '#dfdddd' }}
                                    className="itemFormulario"
                                    onInput={(e) => {
                                        e.target.value = e.target.value
                                            .replace(/[^0-9]/, "")
                                            .replace(/(\..*)\./g, "$1");
                                    }}

                                />
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    autoWidth

                                    label={trans.region}
                                    value={trans.region}
                                    sx={{ m: 1, borderRadius: '0', height: '40px', backgroundColor: '#dfdddd' }}
                                >
                                    <MenuItem value={trans.region}>
                                        <em>{trans.region}</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Canada</MenuItem>
                                    <MenuItem value={21}>Colombia</MenuItem>
                                    <MenuItem value={22}>Venezuela</MenuItem>
                                </Select>
                            </div>

                            <div className="formularioDeAdentro">
                                <TextField
                                    id="outlined-multiline-static"
                                    label={trans.mensaje}
                                    multiline
                                    rows={9}
                                    sx={{ m: 1, backgroundColor: '#dfdddd' }}
                                />
                                <Button id="botonEnviar" variant="contained">Enviar</Button>
                            </div>
                        </div>

                        <span>{trans.aviso}</span>
                    </section>

                    <div className="numero">
                        <img src={telegram} />
                        <span>+58 414-9710220</span>
                        <img src={whatsappgrande} />
                    </div>

                </div>
            </main>
            <PieDePagina />

        </div >
    )
}

export default Contacto