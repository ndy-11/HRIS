const express = require('express');
const router = express.Router();
const empCtrl = require('../controllers/employee.controller');
const authJwt = require('../middlewares/authJwt');
const { Employee } = require('../models');

router.get('/', authJwt, empCtrl.list);
router.post('/', authJwt, empCtrl.create);
router.put('/:id', authJwt, empCtrl.update);
router.delete('/:id', authJwt, async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        await employee.destroy();
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting employee', error: error.message });
    }
})

module.exports = router;

