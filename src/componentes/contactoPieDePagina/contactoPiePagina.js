import React from "react";

function ContactoPiePagina({ icono, redSocial }) {
    return (
        <div>
            <div className="contacto">
                {icono}
                <span>{redSocial}</span>
            </div>

        </div>
    )
}

export default ContactoPiePagina