import EquipeUsuarioRepository from "../../repositoryDb/EquipeUsuarioRepository"

export default class EquipeUsuariosBusiness {

readonly equipeUsuarioRepository = new EquipeUsuarioRepository

    async index() {
        
        const resposta = await this.equipeUsuarioRepository.listEquipeUsuarioRepository()
        return resposta

    }
}


