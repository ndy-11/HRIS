const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/db');

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.INTEGER, PrimaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING(50), allowNull: false, unique: true }},
        {tableName: 'roles', timestamps: false});

module.exports = Role;