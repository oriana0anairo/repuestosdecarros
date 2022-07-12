import React from "react";
import { useLittera } from "@assembless/react-littera"
import { Translation } from "../../utils/traduccion";
import logo from "../../img/servicios/servicios/logo-horizontal.png"
import "./cabecera.css"
import NestedList from "./NestedList"
import { Link } from "react-router-dom";
import MenuHamburguesa from "../menuHamburguesa/CustomizedList.js"

function Cabecera() {

    const trans = useLittera(Translation.cabecera)
    return (
        <div className="cabeceraCompleta">
            <div className="cabecera">
                <div className="menuHamburguesa">
                    <MenuHamburguesa />
                </div>

                <img src={logo} className="logo" />
                <div className="menus">

                    <div className="menuIdiomas">
                        <NestedList />
                    </div>

                    <nav className="alinearMenu">
                        <ul className="menu"  >
                            <li className="elementoNav" ><Link to="/">{trans.inicio}</Link></li>
                            <li className="elementoNav"><Link to="/">{trans.tienda}</Link></li>
                            <li className="elementoNav"><Link to="/servicios">{trans.servicios}</Link></li>
                            <li className="elementoNav"><Link to="/">{trans.empresa}</Link></li>
                            <li className="elementoNav"><Link to="/">Blog</Link></li>
                            <li className="elementoNav"><Link to="/contacto">{trans.contacto}</Link></li>
                            <li className="elementoNav"><Link to="/">FAQ</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Cabecera