"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Usuarios_1 = require("../../entity/Usuarios");
var GrupoUsuarios_1 = require("../../entity/GrupoUsuarios");
var UsuarioRepository_1 = __importDefault(require("../../repository/UsuarioRepository"));
var UsuariosBusiness = /** @class */ (function () {
    function UsuariosBusiness() {
        this.usuarioRepository = new UsuarioRepository_1.default;
    }
    UsuariosBusiness.prototype.buscarUsuariosall = function (grupoUsuarioId) {
        return __awaiter(this, void 0, void 0, function () {
            var retornoUsuariosAllList, retornoUsuariosAll;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(grupoUsuarioId <= 3)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.usuarioRepository.buscarUsuarioRepositoryAll()];
                    case 1:
                        retornoUsuariosAll = _a.sent();
                        retornoUsuariosAllList = retornoUsuariosAll.map(function (user) {
                            var retMap = new Usuarios_1.Usuarios();
                            retMap.id = user.id;
                            retMap.nomeUsuario = user.nomeUsuario;
                            retMap.email = user.nomeUsuario;
                            retMap.senha = user.senha;
                            retMap.ativo = user.ativo;
                            retMap.bloqueado = user.bloqueado;
                            retMap.grupoUsuariosIdFK = user.grupoUsuariosIdFK;
                            retMap.tipoEquipeIdFK = user.tipoEquipeIdFK;
                            return retMap;
                        });
                        return [2 /*return*/, retornoUsuariosAllList];
                    case 2:
                        console.log("nada");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsuariosBusiness.prototype.cadastroUsuariosBuisiness = function (usuario) {
        return __awaiter(this, void 0, void 0, function () {
            var resposta, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.usuarioRepository.insertUsuarioRpository(usuario)];
                    case 1:
                        resposta = _a.sent();
                        return [2 /*return*/, resposta];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, {
                                mesage: err_1.mesage,
                                err: err_1
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsuariosBusiness.prototype.updateUsuario = function (usuario) {
        return __awaiter(this, void 0, void 0, function () {
            var usuarioUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuarioRepository.updateUsuarioRepository(usuario)];
                    case 1:
                        usuarioUpdate = _a.sent();
                        return [2 /*return*/, usuarioUpdate];
                }
            });
        });
    };
    UsuariosBusiness.prototype.deletarUsuario = function (idUsuarioDelete, idUsuario) {
        return __awaiter(this, void 0, void 0, function () {
            var usuariosDelete, grupoUsuariosDelete, usuarios;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usuariosDelete = new Usuarios_1.Usuarios();
                        grupoUsuariosDelete = new GrupoUsuarios_1.GrupoUsuarios();
                        return [4 /*yield*/, this.usuarioRepository.buscarUsuarioGrupoUsuarioId(idUsuario)];
                    case 1:
                        usuarios = _a.sent();
                        usuariosDelete.id = usuarios.id;
                        grupoUsuariosDelete.id = usuarios.grupoUsuariosIdFK.id;
                        usuariosDelete.grupoUsuariosIdFK = grupoUsuariosDelete;
                        if (!(grupoUsuariosDelete.id <= 2)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.usuarioRepository.deleteUsuarioIdRepository(idUsuarioDelete)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'Usuário Deletado!'];
                    case 3: return [2 /*return*/, "Usu\u00E1rio " + idUsuarioDelete + ", n\u00E3o deletado!"];
                }
            });
        });
    };
    return UsuariosBusiness;
}());
exports.default = UsuariosBusiness;