const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/db');
const Employee = require('./employee.model');

const leaveTypes = sequelize.define('LeaveType', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    leave_types: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    days: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Pending', 'Approved', 'Rejected'),
        allowNull: false,
        defaultValue: 'Pending'
    },
    reason: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    photo: {
        type: DataTypes.TEXT,
        allowNull: true
    }
},
{tableName: 'leave', timestamps: true, underscored: true });
Leave.belongsTo(Employee, { foreignKey: 'employee_id', as: 'employee' });
module.exports = Leave;