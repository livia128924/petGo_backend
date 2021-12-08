const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB,process.env.USER,process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql",
    define: {
        defaultScope: {
            attributes: {
                exclude: ['created_at', 'updated_at']
            }
        }
    }
});

module.exports = sequelize;