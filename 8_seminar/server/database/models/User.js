const { sequelize } = require("../server");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: DataTypes.STRING,
    email: {
        type: DataTypes.STRING, 
        unique: true
    },
    
    role: {
        type: DataTypes.ENUM,
        values: ['admin', 'user', 'tester'],
        validate: {
            isIn: [['admin', 'user', 'tester']]
        }
    }
})

module.exports = User;