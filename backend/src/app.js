const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const projectRoutes = require("./routes/project.routes");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://project-tracker-project-seven.vercel.app",
    "https://project-tracker-project-git-main-jayshree-kumaris-projects.vercel.app",
    "https://project-tracker-project-k7qu9rsx-jayshree-kumaris-projects.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.json({ 
    message: "Project Tracker API",
    status: "Running",
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
      auth: "/api/auth",
      projects: "/api/projects"
    }
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

// Error handling middleware (must be last)
app.use(errorMiddleware);

module.exports = app;
