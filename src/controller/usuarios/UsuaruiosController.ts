import { ClassMiddleware, Controller, Delete, Post } from "@overnightjs/core";
import { getRepository } from "typeorm";
import { Usuarios } from "../../entity/Usuarios";
import { Request, Response } from 'express'
import { GrupoUsuarios } from "../../entity/GrupoUsuarios";
import UsuariosBusiness from "../../business/usuarios/UsuariosBusiness";
import { decodificar } from "../../config/Jwt";


@Controller('user')
@ClassMiddleware([decodificar])
export default class UsuaruiosController {

    @Post()
    async cadastroUsuarios(request: Request, response: Response) {

        const usuarios = new Usuarios()
        const grupoUsuaruios = new GrupoUsuarios()
        const usuariosBusiness = new UsuariosBusiness()

        usuarios.nomeUsuario = String(request.body.nome)
        usuarios.email = String(request.body.email)
        usuarios.senha = String(request.body.senha)
        usuarios.matricula = String(request.body.matricula)
        grupoUsuaruios.id = Number(request.body.grupoUsuario)
        usuarios.grupoUsuariosIdFK = grupoUsuaruios

        console.log(usuarios)
        const retornoUsuario = await usuariosBusiness.cadastroUsuariosBuisiness(usuarios)

        return response.status(200).json(retornoUsuario)

    }

    @Delete(':id')
    async deletarUsuario(request: Request, response: Response) {
        const deletar = Number(request.params.id)

        const setUsuarios = getRepository(Usuarios)

        const resposta = await setUsuarios.findOne({
            where: {
                id: deletar
            }
        })
        response.json(resposta)

    }

}