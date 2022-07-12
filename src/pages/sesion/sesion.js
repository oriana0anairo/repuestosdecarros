import React, { useContext, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { useLittera } from "@assembless/react-littera"
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import adorno from "../../img/login/login/img-header.png"
import fondo from "../../img/home/home/header-responsive-home.jpg"
import { Translation } from "../../utils/traduccion";
import llave from "../../img/login/login/img-pas.png"
import user from "../../img/login/login/img-name.png"
import Cabecera from "../../componentes/cabecera/Cabecera"
import PieDePagina from "../../componentes/pieDePagina/PieDePagina"
import { AppContext } from "../../contexto/appContext";
import { login } from "../../servicios/sesion"
import "./sesion.css"

function Sesion() {
    const [sesionInformacion, setSesionInformacion] = useState({ locale: "en" })
    const handleChange = (e) => {
        setSesionInformacion({ ...sesionInformacion, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()
    const trans = useLittera(Translation.login)

    useEffect(() => {
        const usuario = localStorage.getItem("usuario")
        if (usuario) navigate('/')
    }, [])

    const enviarUsuario = async () => {
        const respuesta = await login(sesionInformacion)
        if (respuesta.data) {

            localStorage.setItem('usuario', respuesta.data)
            navigate('/')
        } else {
            console.log(respuesta)
        }
    }
    return (
        <div>
            <Cabecera />
            <div className="mainSesion">

                <div className="fondoSesion">
                    <img src={fondo} />
                </div>
                <div className="contenedorDeSesion">

                    <div className="adorno">
                        <img src={adorno} />
                    </div>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TextField sx={{ margin: "3%" }} onChange={handleChange} name="email" label={trans.nombre} variant="standard" />
                        <img src={user} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TextField sx={{ margin: "3%" }} onChange={handleChange} name="password" label={trans.contraseña} variant="standard" type={"password"} />
                        <img src={llave} />
                    </Box>

                    <Typography variant="subtitle2" sx={{ my: 2 }}>{trans.unaCuenta}</Typography>

                    <Link to="/registro">{trans.registrate}<br /></Link>

                    <Button onClick={enviarUsuario} variant="contained" sx={{ backgroundColor: '#ff5503', margin: "10%" }}>{trans.enviar}</Button>
                </div>


            </div>
            <PieDePagina />
        </div >

    )
}

export default Sesion