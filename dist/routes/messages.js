"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messages_1 = require("../controllers/messages");
const router = (0, express_1.Router)();
router.post('/', messages_1.sendWhatsapp);
exports.default = router;
//# sourceMappingURL=messages.js.map