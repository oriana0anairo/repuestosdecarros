import React from "react";
import adorno from "../../img/login/login/img-header.png"
import fondo from "../../img/home/home/header-responsive-home.jpg"
import { Button, TextField } from "@mui/material";
import { useLittera } from "@assembless/react-littera"
import { Translation } from "../../utils/traduccion";
import Box from '@mui/material/Box';
import llave from "../../img/login/login/img-pas.png"
import user from "../../img/login/login/img-name.png"
import dobleLlave from "../../img/login/login/img-pass.png"
import carta from "../../img/login/login/img-email.png"
import PieDePagina from "../../componentes/pieDePagina/PieDePagina";
import Cabecera from "../../componentes/cabecera/Cabecera"
import "./registro.css"

function Registro() {
    const trans = useLittera(Translation.login)
    return (
        <div>
            <header>
                <Cabecera />
            </header>

            <div id="inicioRegistro">

                <div id="fondoRegistro">
                    <img src={fondo} />
                </div>
                <div id="contenedorDeRegistro">

                    <div id="adorno">
                        <img src={adorno} />
                    </div>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TextField sx={{ margin: "3%" }} name="name" label={trans.nombre} variant="standard" />
                        <img src={user} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TextField sx={{ margin: "3%" }} label={trans.contraseña} variant="standard" />
                        <img src={llave} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TextField sx={{ margin: "3%" }} label={trans.Repetir} variant="standard" />
                        <img src={dobleLlave} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TextField sx={{ margin: "3%" }} label="Email" variant="standard" />
                        <img src={carta} />
                    </Box>

                    <Button variant="contained" sx={{ backgroundColor: '#ff5503', margin: "6%" }}>{trans.enviar}</Button>
                </div>


            </div>
            <PieDePagina />
        </div>

    )
}

export default Registro