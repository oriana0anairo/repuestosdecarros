import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { Translation } from "../../utils/traduccion";
import { useLittera } from '@assembless/react-littera';
import "./cabecera.css"
import DirectionsCarFilledSharpIcon from '@mui/icons-material/DirectionsCarFilledSharp';
import { AppContext } from '../../contexto/appContext';
import idioma from '../../enumeraciones/idioma';
import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { fontSize } from '@mui/system';
import "./cabecera.css"
export default function NestedList() {
    const trans = useLittera(Translation.cabecera)
    const [open, setOpen] = React.useState(false);
    const { setIdiomas } = useContext(AppContext)
    const usuario = localStorage.getItem("usuario")
    const navigate = useNavigate()


    const handleClick = () => {
        setOpen(!open);
    };

    function borrar() {
        if (usuario) {
            localStorage.clear()
            navigate("/")
        } else return
    }



    return (
        <List
            id='opciones'
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >

            <ListItemButton
                sx={{ color: "#bcbcbc" }}
                component={Link}
                to={!usuario ? "/sesion" : "/"}
                id='elementosDeLista'
                onClick={() => { borrar(); }}
            >
                <ListItemText primary={usuario ? trans.usuario : trans.sesion} />
            </ListItemButton>
            <div id='elementosDeListaconlinea' >
                <ListItemButton onClick={handleClick}  >
                    <ListItemText sx={{ color: "#bcbcbc" }} primary={trans.idioma} />
                </ListItemButton>
                <Collapse id='menuDesplegable' in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton >
                            <ListItemText id='itemmenuDesplegable' primary={trans.ingles} onClick={() => setIdiomas(idioma.ingles)} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText id='itemmenuDesplegable' primary={trans.spanish} onClick={() => setIdiomas(idioma.español)} />
                        </ListItemButton>
                    </List>
                </Collapse>
            </div>

            <ListItemButton id='elementosDeListaconlinea'>
                <DirectionsCarFilledSharpIcon sx={{ color: "#bcbcbc", fontSize: "15px" }} />
            </ListItemButton>
        </List>
    );
}
