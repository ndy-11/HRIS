const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/db');
const Employee = require('./employee.model');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

const Attendance = sequelize.define('Attendance', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    check_in: {
        type: DataTypes.TIME,
        allowNull: true
    },
    check_out: {
        type: DataTypes.TIME,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('Hadir', 'Terlambat', 'Izin', 'Sakit', 'Alfa'),
        allowNull: false,
        defaultValue: 'Hadir'
    },
    location: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    note: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'attendances',
    timestamps: true,
    underscored: true
});

Attendance.belongsTo(Employee, { FOREIGNKEYS: 'employee_id', as: 'employee' });
module.exports = Attendance;