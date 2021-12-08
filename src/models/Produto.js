const Sequelize = require("sequelize");
const db = require("../db");

const Produto = db.define(
  "Produto",
  {
    codigo: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    empresa: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    foto: {
      type: Sequelize.STRING,
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
module.exports = Produto;
