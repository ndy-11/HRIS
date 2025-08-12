const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcrypt');
const Role = require('./role.model');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password_hash: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
}, { tableName : 'users', timestamps: true , underscored: true });

module.exports = User;

