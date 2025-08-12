const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/db');

const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NIK: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    full_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
        allowNull: false,
    },
    birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    join_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    department: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    photo: {
        type: DataTypes.TEXT,
        allowNull: true
    },
},
    {tableName: 'employees', timestamps: true, underscored: true });

    module.exports = Employee;
