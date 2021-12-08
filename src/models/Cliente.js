const Sequelize = require("sequelize");
const db = require("../db");

const Clientes = db.define(
  "clientes",
  {
    codigo: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING(60),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(80),
      allowNull: false,
    },
    data_nascimento: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    endereco: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    usuario: {
      type: Sequelize.STRING(80),
      allowNull: false,
    },
    senha: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    celular: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    cep: {
      type: Sequelize.STRING(11),
      allowNull: false,
    },
    situacao: {
      type: Sequelize.ENUM("0", "1"),
      allowNull: false,
      defaultValue: "1",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);
module.exports = Clientes;
