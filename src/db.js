const Sequelize = require("sequelize");

const sequelize = new Sequelize("petgo", "root", "", {
    host: "localhost",
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