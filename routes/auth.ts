import { Router } from "express";
import { body } from 'express-validator';
import { login } from "../controllers/auth";
import { validarCampos } from "../middlewares/validar-campos";

const router = Router();

router.post('/login', [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener 6 o mas caracteres'),
    validarCampos
],login );

export default router;