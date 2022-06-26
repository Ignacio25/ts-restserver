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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Verificar si email existe
        const usuario = yield usuario_1.default.findOne({
            where: {
                email: email
            }
        });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Nombre de usuario y/o password no son correctos'
            });
        }
        return res.json(usuario['nombre']);
        //Si usuario esta activo en la base
        // if ( !usuario.estado) {
        //     return res.status(400).json({
        //         msg: 'Nombre de usuario y/o password no son correctos - estado false'
        //     })
        // }
        // verificar la contraseña
        // const validPassword = bcryptjs.compareSync( password, usuario.password );
        // if ( !validPassword ) {
        //     return res.status(400).json({
        //         msg: 'Nombre de usuario y/o password no son correctos - password'
        //     })
        // }
        //Generar JWT
        res.json(req.body);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Algo salio mal'
        });
    }
});
exports.login = login;
//# sourceMappingURL=auth.js.map