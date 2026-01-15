import { useEffect, useState } from "react";
import { getProjects, deleteProject } from "../api/project.api";
import ProjectCard from "../components/ProjectCard";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loadProjects = async () => {
    try {
      setLoading(true);
      const res = await getProjects();
      setProjects(res.data);
      setError("");
    } catch (err) {
      setError("Failed to load projects. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProject(id);
        loadProjects();
      } catch (err) {
        setError("Failed to delete project");
      }
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>My Projects</h2>
        <div className="dashboard-actions">
          <button className="btn btn-primary" onClick={() => navigate("/create")}>
            ➕ Create Project
          </button>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="empty-state">
          <p>Loading projects...</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="empty-state">
          <h3>No Projects Yet</h3>
          <p>Start by creating your first project</p>
          <button className="btn btn-primary" onClick={() => navigate("/create")}>
            Create Your First Project
          </button>
        </div>
      ) : (
        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard
                key={p._id}
                project={p}
                onEdit={() => navigate(`/edit/${p._id}`)}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
