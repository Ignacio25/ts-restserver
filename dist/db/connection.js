"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('test', 'sa', '1234', {
    host: 'DESKTOP-LBAJ1FD',
    dialect: 'mssql'
});
// const db = new Sequelize('mssql://sa:1234@DESKTOP-LBAJ1FD:1433/test')
exports.default = db;
//# sourceMappingURL=connection.js.map