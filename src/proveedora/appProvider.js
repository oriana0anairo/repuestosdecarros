import React, { useEffect, useState } from "react";
import { AppContext } from "../contexto/appContext";
import { useLitteraMethods } from "@assembless/react-littera";
import idioma from "../enumeraciones/idioma"

function AppProvider({ children }) {

    const methods = useLitteraMethods();
    const [idiomas, setIdiomas] = useState(idioma.ingles)

    useEffect(() => {
        methods.setLocale(idiomas)
        console.log("entro a cambiar")
    }, [idiomas])
    console.log(idiomas)

    return (
        <AppContext.Provider value={{ setIdiomas }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider