import { Request, Response } from "express";
import Usuario from '../models/usuario';
import bcryptjs from 'bcryptjs';


export const login = async( req: Request, res: Response) => {

    const { email, password } = req.body;

    try {
        // Verificar si email existe
        const usuario = await Usuario.findOne({
            where: {
                email: email
            }
        });

        if (!usuario) {
            return res.status(400).json({
                msg: 'Nombre de usuario y/o password no son correctos'
            })
        }

        return res.json(usuario);

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

        res.json( req.body);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Algo salio mal'
        });
    }
}