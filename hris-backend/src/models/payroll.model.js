const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/db');
const Employee = require('./employee.model');

const Payroll = sequelize.define('Payroll', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    period_month: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    period_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    basic_salary: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
        defaultValue: 0.00
    },
    allowances: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true,
        defaultValue: 0.00
    },
    deductions: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: true,
        defaultValue: 0.00
    },
    net_pay: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
        defaultValue: 0.00
    },
    status: {
        type: DataTypes.ENUM('Pending', 'Processed', 'Paid'),
        allowNull: false,
        defaultValue: 'Pending'
    },
},
{
    tableName: 'payrolls',
    timestamps: true,
    underscored: true
});

Payroll.belongsTo(Employee, { foreignKey: 'employee_id', as: 'employee' });
module.exports = Payroll;