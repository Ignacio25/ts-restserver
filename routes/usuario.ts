import { Router } from "express";
import { 
    createUsuario, 
    deleteUsuario, 
    getUsuarioById, 
    getUsuarios, 
    updateUsuario
} from "../controllers/usuarios";

const router = Router();

router.get('/',       getUsuarios );
router.get('/:id',    getUsuarioById );
router.post('/',      createUsuario );
router.put('/:id',    updateUsuario );
router.delete('/:id', deleteUsuario );

export default router;