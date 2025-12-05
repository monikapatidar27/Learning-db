const { DataTypes } = require('sequelize');
const pool = require('../database/dbConnection');

const User = pool.define('User', {
    user_id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        allowNull: false,  
        primaryKey: true 
    }, 
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    email: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    createdAt: DataTypes.DATE, 
    updatedAt: DataTypes.DATE
});

module.exports = User;
