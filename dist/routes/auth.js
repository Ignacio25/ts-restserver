"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../controllers/auth");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.post('/login', [
    (0, express_validator_1.body)('email').isEmail(),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('La contraseña debe tener 6 o mas caracteres'),
    validar_campos_1.validarCampos
], auth_1.login);
exports.default = router;
//# sourceMappingURL=auth.js.map