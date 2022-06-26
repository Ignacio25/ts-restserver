import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import db from "../db/connection";

interface UsuarioModel extends Model<InferAttributes<UsuarioModel>, InferCreationAttributes<UsuarioModel>> {
  nombre: string;
  email: string,
  estado: boolean;
  google: boolean;
  rol: string;
  createdAt: Date;
  updatedAt: Date;
}

const Usuario = db.define<UsuarioModel>('Usuario', {

    nombre: {
      type: DataTypes.STRING 
    },
    email: {
      type: DataTypes.STRING 
    },
    estado: {
      type: DataTypes.BOOLEAN 
    },
    google: {
      type: DataTypes.BOOLEAN 
    },
    rol: {
      type: DataTypes.STRING 
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }

});

export default Usuario;