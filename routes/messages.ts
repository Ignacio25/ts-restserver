import { Router } from "express";
import { 
    sendWhatsapp
} from "../controllers/messages";

const router = Router();

router.post('/', sendWhatsapp );

export default router;