import { Route, Routes } from "react-router-dom";
import Contacto from "../pages/contacto/Contacto";
import Registro from "../pages/registro/Registro";
import Home from "../pages/casa/casa";
import Servicios from "../pages/servicios/Servicios";
import Sesion from "../pages/sesion/sesion"

export const Routers = () => {
    return (
        <Routes>

            <Route element={<Home />} path="/" />
            <Route element={<Servicios />} path="/servicios" />
            <Route element={<Registro />} path="/registro" />
            <Route element={<Contacto />} path="/contacto" />
            <Route element={<Sesion />} path="/sesion" />

        </Routes>
    )
}