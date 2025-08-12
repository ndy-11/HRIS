const Employee = require('../models/employee.model');

exports.list = async (req, res) => {
    const items = await Employee.findAll();
    res.json(items);
};

exports.create = async (req, res) => {
    const body = req.body;
    const created = await Employee.create(body);
    res.status(201).json(created);
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const employee = await Employee.findByPk(id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    await employee.update(body);
    res.json(employee);
};