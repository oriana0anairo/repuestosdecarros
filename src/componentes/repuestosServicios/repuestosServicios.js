import React from "react";

function RepuestosServicios({ imagen }) {
    return (
        <div>
            <div className="repuestos">
                <img src={imagen} />
                <span>Lorem ipsum dolor sit amet,</span>
            </div>
        </div>
    )
}

export default RepuestosServicios