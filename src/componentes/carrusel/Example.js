import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import fondo1 from "../../img/home/home/560A9649_2.jpg"
import fondo2 from "../../img/home/home/13651002.jpg"
import fondo3 from "../../img/home/home/20366004.jpg"
import fondo4 from "../../img/home/home/20315s001.jpg"



function Example(props) {
    var items = [
        {
            imagen: fondo1
        },
        {
            imagen: fondo2
        },
        {
            imagen: fondo3
        },
        {
            imagen: fondo4
        }
    ]

    /*
    <Item key={i} item={item} />
*/

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <img src={props.item.imagen} width="100%" height="750px" />
        </Paper>
    )
}

export default Example