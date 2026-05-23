# 📊 Lead Client Management System (LCM)

A modern full-stack Lead Client Management System built using React.js, Node.js, Express.js, and MongoDB. The application helps businesses efficiently manage leads, track client information, monitor sales pipelines, and improve customer relationship management.

## 🌐 Live Deployment

Frontend: https://your-live-link.surge.sh

Backend: Node.js + Express API

Database: MongoDB Atlas

---

# 📌 About This Project

### Task 2 – Future Interns Full Stack Web Development

The Lead Client Management System (LCM) is designed to simplify lead tracking and client management processes. It enables users to create, update, monitor, and organize client information through a centralized dashboard.

### Project Objectives

- Manage client leads efficiently
- Store customer information securely
- Track lead status and progress
- Improve sales workflow management
- Provide an easy-to-use dashboard interface

---

# ✨ Features

## 🎨 Frontend Features

- Modern Responsive User Interface
- Dashboard Overview
- Lead Management Module
- Client Information Management
- Search & Filter Functionality
- Mobile-Friendly Design
- Interactive Components
- Real-Time Data Updates

## 🔧 Backend Features

- RESTful API Architecture
- Express.js Server
- MongoDB Database Integration
- CRUD Operations
- Data Validation
- Error Handling
- Secure API Endpoints
- Environment Variable Configuration

---

# 📋 Core Functionalities

### 👤 Client Management

- Add New Clients
- Update Client Information
- Delete Client Records
- View Client Details

### 📈 Lead Tracking

- Create New Leads
- Track Lead Status
- Monitor Sales Pipeline
- Update Lead Progress
- Lead Categorization

### 📊 Dashboard

- Total Leads Overview
- Active Clients Statistics
- Status Tracking
- Quick Actions Panel

### 🔍 Search & Filtering

- Search Clients
- Search Leads
- Filter by Status
- Filter by Category

---

# 🛠️ Technologies Used

## Frontend

- React.js
- HTML5
- CSS3
- JavaScript (ES6+)
- Axios
- React Router DOM

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Additional Packages

- dotenv
- cors
- nodemon
- express-validator
- helmet

---

# 📁 Project Structure

```text
Lead-Client-Management-System/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── .env
├── package.json
├── README.md
└── .gitignore
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/sanjanard11/FUTURE_FS_01.git
```

## Install Dependencies

### Root Dependencies

```bash
npm install
```

### Client Dependencies

```bash
cd client
npm install
```

### Server Dependencies

```bash
cd ../server
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
```

---

# ▶️ Running The Project

## Run Backend

```bash
npm run server
```

## Run Frontend

```bash
npm run client
```

## Run Both Together

```bash
npm run dev
```

Frontend:

```text
http://localhost:3000
```

Backend:

```text
http://localhost:5000
```

---

# 🔌 API Endpoints

## Leads

```http
GET /api/leads
POST /api/leads
PUT /api/leads/:id
DELETE /api/leads/:id
```

## Clients

```http
GET /api/clients
POST /api/clients
PUT /api/clients/:id
DELETE /api/clients/:id
```

---

# 🌐 Deployment

## Frontend Deployment

- GitHub Pages
- Vercel
- Netlify
- Surge

## Backend Deployment

- Render
- Railway
- Vercel
- Heroku

---

# 🔒 Security Features

- Input Validation
- Environment Variables Protection
- MongoDB Data Security
- CORS Configuration
- Secure API Routes
- Error Handling Middleware

---

# 🎯 Future Enhancements

- User Authentication
- Admin Dashboard
- Role-Based Access Control
- Email Notifications
- Lead Analytics
- Customer Activity Tracking
- Report Generation
- Data Export Feature

---

# 👩‍💻 Developer

**SANJANA RD**

Future Interns – Full Stack Web Development

GitHub:
https://github.com/sanjanard11

LinkedIn:
Sanjana RD

Email:
sanjanasanju06256@gmail.com

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Happy Coding! 🚀
