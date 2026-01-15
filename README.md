# Project Tracker - Full Stack Application

## Overview

**Project Tracker** is a modern full-stack web application for managing projects efficiently. Built with **React** for the frontend and **Node.js/Express** for the backend, with **MongoDB** as the database.

### Key Features

✨ **User Authentication**
- Sign up with email and password
- Secure JWT-based login
- Password hashing with bcrypt
- Protected routes and API endpoints

📊 **Project Management**
- Create projects with title, description, and due dates
- View all projects in a responsive grid
- **Edit projects** with complete form pre-fill
- Delete projects with confirmation
- Track project status (pending, in-progress, completed)

🎨 **Modern UI/UX**
- Professional navbar with conditional rendering
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Beautiful gradient design with custom color scheme
- Form validation and error handling

🔐 **Security**
- JWT tokens for authentication
- Password hashing with bcrypt
- Protected API routes
- CORS enabled for secure cross-origin requests
- Environment variables for sensitive data

---

## Tech Stack

### Frontend
- **Framework**: React 19.2.3
- **Routing**: React Router v7
- **HTTP Client**: Axios with interceptors
- **State Management**: React Context API
- **Styling**: CSS3 (Flexbox, Grid, Animations)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken)
- **Security**: bcrypt password hashing
- **Middleware**: CORS, JSON body parser

### Deployment
- **Frontend**: Vercel
- **Backend**: Railway / Heroku / Render
- **Database**: MongoDB Atlas (Cloud)

---

## Getting Started

### Prerequisites

- Node.js 14+ and npm installed
- MongoDB installed locally (or MongoDB Atlas account)
- Git installed
- Code editor (VS Code recommended)

### Local Development Setup

#### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/Project_Tracker_ProjectAI.git
cd Project_Tracker_ProjectAI
```

#### 2. Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your MongoDB URI and JWT secret
# MONGO_URI=mongodb://localhost:27017/project-tracker
# JWT_SECRET=your_secret_key

# Start backend server
npm start
```

Backend runs on `http://localhost:8000`

#### 3. Setup Frontend

```bash
cd ../frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Edit .env.local with API URL
# REACT_APP_API_URL=http://localhost:8000/api

# Start frontend development server
npm start
```

Frontend runs on `http://localhost:3000`

#### 4. Test the Application

1. Visit http://localhost:3000
2. Click **Sign Up** to create an account
3. Log in with your credentials
4. **Create a project** using the "Create Project" button
5. **View projects** on the Dashboard
6. **Edit a project** by clicking the Edit button
7. **Delete a project** by clicking the Delete button
8. **Log out** using the Navbar

---