import api from "../api";

export function buscaUsuario(login){
    login = "andreocunha"
    try {
        const resultado = api.get(`/users?login=${login}`);
        return resultado.data[0];
    } catch (error) {
        console.log(error)
        return {}
    }
}