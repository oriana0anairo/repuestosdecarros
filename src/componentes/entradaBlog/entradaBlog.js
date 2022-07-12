import cuadro from "../../img/home/home/cuadroNaranja.png"
import './entradaBlog.css'

function EntradaBlog() {

    return (<div className="contenedor">
        <p>
            Lorem ipsum dolor sit amet, consec-
            tetuer adipiscing elit, sed diam nonum
            my nibh euismod tincidunt ut laoreet
            dolore magna aliquan erat valutpat
        </p>
        <div>
            <img src={cuadro} />
        </div>
    </div>)

}


export default EntradaBlog