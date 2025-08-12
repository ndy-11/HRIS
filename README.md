<p align="center">
  <img src="https://placehold.co/200x200?text=HRIS+Logo" alt="HRIS Logo" width="120" />
</p>

<h1 align="center">🚀 HRIS Backend</h1>

<p align="center">
  <b>Modern, Secure, and Lightning-Fast HRIS API</b><br>
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-18.x-green?logo=node.js">
  <img alt="Express" src="https://img.shields.io/badge/Express.js-4.x-blue?logo=express">
  <img alt="Sequelize" src="https://img.shields.io/badge/Sequelize-6.x-2f406a?logo=sequelize">
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg">
</p>

---

## 🎬 Quick Demo

```bash
curl -H "Authorization: Bearer <token>" http://localhost:3000/employees
```

---

## ✨ Features

- 🔐 **JWT Authentication**: Secure your endpoints with industry-standard authentication.
- 👥 **Employee Management**: Effortlessly create, read, update, and delete employee records.
- 🛡️ **Role-Based Access**: Manage roles and permissions with ease.
- ⚡ **Fast & Modular**: Clean project structure for easy maintenance and scalability.
- 📊 **Ready for Integration**: Easily connect with your frontend or third-party systems.

---

## 🗂️ Project Structure

```
hris-root/
├── hris-backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   └── routes/
│   └── ...
└── ...
```

---

## 🚦 Getting Started

**Clone & Install**
```bash
git clone https://github.com/ndy-11/hris-backend.git
cd hris-backend
npm install
```

**Configure Database**
- Edit `src/config/db.js` with your database credentials.

**Run Migrations**
- Use Sequelize CLI or your preferred migration tool.

**Start the Server**
```bash
npm start
```

---

## 📚 API Endpoints

### 👤 Employees

| Method | Endpoint            | Description                       | Auth Required |
|--------|---------------------|-----------------------------------|:-------------:|
| GET    | `/employees`        | List all employees                |      ✅       |
| POST   | `/employees`        | Create a new employee             |      ✅       |
| PUT    | `/employees/:id`    | Update an employee                |      ✅       |
| DELETE | `/employees/:id`    | Delete an employee                |      ✅       |

### 🏷️ Roles

- Managed via the `Role` model in `src/models/role.model.js`.

---

## 🔒 Authentication

All employee routes are protected by JWT.<br>
Middleware: `src/middlewares/authJwt.js`

---

## 🌟 Why HRIS Backend?

- **Modern Stack:** Built with the latest Node.js, Express, and Sequelize.
- **Secure by Default:** JWT authentication and role-based access.
- **Easy to Extend:** Modular codebase for rapid feature development.
- **Community Driven:** Open to contributions and ideas!

---

## 🤝 Contributing

We welcome contributions!  
Feel free to fork, submit pull requests, or open issues for suggestions and improvements.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  <b>Made with ❤️ for HR teams who value efficiency and security.</b><br>
  <sub>Empower your HR processes with technology.</sub>
</p>
