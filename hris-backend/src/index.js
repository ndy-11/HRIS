// src/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { sequelize, connectDB } = require('./config/db');

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// import models (ensure side effects/relasi terdaftar)
const Role = require('./models/role.model');
const User = require('./models/user.model');
const Employee = require('./models/employee.model');
const Attendance = require('./models/attendance.model');
const Leave = require('./models/leave.model');
const Payroll = require('./models/payroll.model');

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/employees', require('./routes/employee.routes'));

const seedAdmin = require('./utils/seedAdmin');

const start = async () => {
  try {
    await connectDB();
    await sequelize.sync({ alter: true });
    await seedAdmin();
    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();
