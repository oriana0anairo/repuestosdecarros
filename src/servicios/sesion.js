import { POST } from "../utils/crud"


export const login = async (body) => {
    const respuesta = await POST("https://idpsurveyapi.nelumbo.com.co/api/auth/login", body)
    return respuesta
}