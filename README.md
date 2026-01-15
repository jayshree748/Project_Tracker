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


## Project Structure

```
Project_Tracker_ProjectAI/
├── backend/
│   ├── src/
│   │   ├── app.js                 # Express app setup
│   │   ├── server.js              # Server entry point
│   │   ├── config/
│   │   │   ├── db.js              # MongoDB connection
│   │   │   └── env.js             # Environment config
│   │   ├── controllers/           # Request handlers
│   │   │   ├── auth.controller.js
│   │   │   └── project.controller.js
│   │   ├── middleware/            # Custom middleware
│   │   │   ├── auth.middleware.js
│   │   │   └── error.middleware.js
│   │   ├── models/                # Database schemas
│   │   │   ├── user.model.js
│   │   │   └── project.model.js
│   │   ├── routes/                # API routes
│   │   │   ├── auth.routes.js
│   │   │   └── project.routes.js
│   │   ├── services/              # Business logic
│   │   │   ├── auth.service.js
│   │   │   └── project.service.js
│   │   └── utils/                 # Utilities
│   │       └── token.util.js
│   ├── .env.example               # Environment template
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── App.js                 # Main app component
│   │   ├── api/
│   │   │   ├── auth.api.js        # Auth API calls
│   │   │   ├── project.api.js     # Project API calls
│   │   │   └── axios.js           # Axios config
│   │   ├── components/
│   │   │   ├── Navbar.js          # Navigation component
│   │   │   └── ProjectCard.js     # Project card component
│   │   ├── context/
│   │   │   └── AuthContext.js     # Authentication context
│   │   ├── pages/
│   │   │   ├── Home.js            # Landing page
│   │   │   ├── About.js           # About page
│   │   │   ├── Contact.js         # Contact page
│   │   │   ├── Login.js           # Login page
│   │   │   ├── Signup.js          # Signup page
│   │   │   ├── Dashboard.js       # Projects dashboard
│   │   │   └── ProjectForm.js     # Create/Edit form
│   │   ├── routes/
│   │   │   └── ProtectedRoute.js  # Protected route HOC
│   │   ├── styles/
│   │   │   ├── Navbar.css
│   │   │   ├── Auth.css
│   │   │   ├── Pages.css
│   │   │   ├── Dashboard.css
│   │   │   └── ProjectForm.css
│   │   ├── index.js               # React entry point
│   │   └── index.css              # Global styles
│   ├── public/
│   ├── .env.example               # Environment template
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── MONGODB_ATLAS_SETUP.md         # MongoDB setup guide
├── DEPLOYMENT_GUIDE.md            # Vercel/Railway guide
├── ENVIRONMENT_SETUP.md           # Environment variables guide
├── VISUAL_GUIDE.md                # Visual guide
├── .gitignore
└── README.md                      # This file
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Create new user account |
| POST | `/api/auth/login` | User login |

**Request/Response Examples:**

```bash
# Signup
POST /api/auth/signup
{
  "email": "user@example.com",
  "password": "securePassword123"
}

# Response
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "userId": "507f1f77bcf86cd799439011"
}

# Login
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "securePassword123"
}

# Response
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "userId": "507f1f77bcf86cd799439011"
}
```

### Projects

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get user's projects |
| POST | `/api/projects` | Create new project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |

**Request/Response Examples:**

```bash
# Get Projects
GET /api/projects
Headers: Authorization: Bearer {token}

# Response
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Build Website",
    "description": "Create responsive website",
    "status": "in-progress",
    "dueDate": "2025-02-28",
    "createdBy": "user_id"
  }
]

# Create Project
POST /api/projects
Headers: Authorization: Bearer {token}
{
  "title": "New Project",
  "description": "Project description",
  "status": "pending",
  "dueDate": "2025-03-15"
}

# Update Project
PUT /api/projects/507f1f77bcf86cd799439011
Headers: Authorization: Bearer {token}
{
  "title": "Updated Title",
  "status": "completed"
}

# Delete Project
DELETE /api/projects/507f1f77bcf86cd799439011
Headers: Authorization: Bearer {token}
```

---

## Environment Variables

### Backend (.env)

```env
# Server Configuration
PORT=8000

# MongoDB
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/project-tracker?retryWrites=true&w=majority

# JWT
JWT_SECRET=your_super_secret_key_change_this_in_production
JWT_EXPIRES_IN=7d

# Environment
NODE_ENV=development
```

### Frontend (.env.local)

```env
# API Base URL
REACT_APP_API_URL=http://localhost:8000/api
```

---

## Features in Detail

### 1. User Authentication
- ✅ Secure signup with password hashing
- ✅ Email-based login
- ✅ JWT tokens stored in localStorage
- ✅ Automatic token injection in API requests
- ✅ Protected routes based on authentication

### 2. Project Management
- ✅ **Create**: Add new projects with details
- ✅ **Read**: View all user projects in grid layout
- ✅ **Update**: Edit project details (FULLY WORKING)
- ✅ **Delete**: Remove projects with confirmation

### 3. Responsive Design
- ✅ Mobile-first approach
- ✅ Mobile: 320px - 479px
- ✅ Tablet: 480px - 767px
- ✅ Desktop: 768px+
- ✅ All pages responsive

### 4. Navigation
- ✅ Navbar with conditional menu items
- ✅ Links to Home, About, Contact (public)
- ✅ Dashboard, Logout for authenticated users
- ✅ Sign In, Sign Up for guests
- ✅ Active link highlighting

### 5. Error Handling
- ✅ Form validation
- ✅ API error messages
- ✅ User-friendly error displays
- ✅ Loading states
- ✅ Try-catch blocks in middleware

---