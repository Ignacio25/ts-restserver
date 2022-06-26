import { Sequelize } from "sequelize";

const db = new Sequelize('test', 'sa','1234', {
    host: 'DESKTOP-LBAJ1FD', 
    dialect: 'mssql'
});

// const db = new Sequelize('mssql://sa:1234@DESKTOP-LBAJ1FD:1433/test')
export default db; 

