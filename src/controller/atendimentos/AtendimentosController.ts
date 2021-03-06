import { Request, Response } from "express";
import { Controller, Get, Post } from "@overnightjs/core";
import { Atendimentos } from "../../entity/Atendimentos";
import AtendimentosBusiness from "../../business/atendimentos/AtendimentosBusiness";
import { Empresas } from "../../entity/Empresas";
import { Usuarios } from "../../entity/Usuarios";

@Controller('atendimento')
export default class AtendimentosController {

    @Get()
    async buscarAtendimentoUsuarios(request: Request, response: Response) {

        const atendimentosBusiness = new AtendimentosBusiness()
        const retornoBuscaAtendimento = await atendimentosBusiness.buscarAtendimentosUsuarios(4)
        return response.status(200).json(retornoBuscaAtendimento)

    }


    @Post()
    async cadastrarAtendimentos(request: Request, response: Response) {
        const atendimento = new Atendimentos()
        const empresa = new Empresas()
        const usuario = new Usuarios()
        const atendimentosBusiness = new AtendimentosBusiness()

        atendimento.descricaoAtendimento = String(request.body.descricaoAtendimento)
        empresa.id = Number(request.body.codigoEmpresaId)
        usuario.id = Number(1)
        atendimento.dataAtendimento = new Date()
        atendimento.usuariosIdFK = usuario
        atendimento.empresasIdFK = empresa
        console.log(atendimento)

        const atendimentoSalvo = await atendimentosBusiness.cadastrarAtendimentos(atendimento)

        return response.status(200).json(atendimentoSalvo)
    }
}