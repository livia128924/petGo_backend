const Sequelize = require("sequelize");
const db = require("../db");
const Clientes = require("./Cliente");

const Pet = db.define(
  "Pet",
  {
    codigo: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    pet_nome: {
      type: Sequelize.STRING(60),
      allowNull: false,
    },
    pet_observacao: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    cli_codigo: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    pet_raca: {
      type: Sequelize.STRING(80),
      allowNull: false,
    },
    pet_foto: {
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

Pet.belongsTo(Clientes, { foreignKey: 'codigo', allowNull: true })

module.exports = Pet;
