const bcrypt = require('bcrypt');
const Role = require('../models/role.model');
const User = require('../models/user.model');

async function seedAdmin() {
  const [r1] = await Role.findOrCreate({ where: { name: 'Admin' }});
  await Role.findOrCreate({ where: { name: 'HR' }});
  await Role.findOrCreate({ where: { name: 'Employee' }});

  const [adminUser, created] = await User.findOrCreate({
    where: { email: 'admin@example.com' },
    defaults: {
      username: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('admin123', 10),
      roleId: r1.id
    }
  });

  if (created) console.log('✅ Admin user created (admin@example.com / admin123)');
  else console.log('ℹ️ Admin already exists');
}

module.exports = seedAdmin;
