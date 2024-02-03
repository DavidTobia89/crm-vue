import api from "../lib/Axios"
export default {
    obtenerClientes(){
        return api.get('/clientes')
    },
    agregarCliente(data){
        return api.post('/clientes', data)
    }
}