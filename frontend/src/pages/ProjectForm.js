import { useState, useEffect } from "react";
import { createProject, updateProject, getProjects } from "../api/project.api";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/ProjectForm.css";

const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  // Load project data if editing
  useEffect(() => {
    if (id) {
      setIsEditing(true);
      loadProjectData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const loadProjectData = async () => {
    try {
      setLoading(true);
      const res = await getProjects();
      const project = res.data.find(p => p._id === id);
      if (project) {
        setTitle(project.title);
        setDescription(project.description || "");
        setStatus(project.status || "pending");
        setDueDate(project.dueDate ? project.dueDate.split('T')[0] : "");
      } else {
        setError("Project not found");
      }
    } catch (err) {
      setError("Failed to load project details");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError("Project title is required");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const projectData = { 
        title, 
        description, 
        status, 
        dueDate 
      };

      if (isEditing && id) {
        await updateProject(id, projectData);
      } else {
        await createProject(projectData);
      }
      
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || `Failed to ${isEditing ? "update" : "create"} project`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form className="project-form" onSubmit={handleSubmit}>
        <h2>{isEditing ? "Edit Project" : "Create New Project"}</h2>

        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="title">Project Title *</label>
          <input
            id="title"
            type="text"
            placeholder="Enter project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Enter project description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            disabled={loading}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              disabled={loading}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              disabled={loading}
            />
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className="btn-submit"
            disabled={loading}
          >
            {loading ? (isEditing ? "Updating..." : "Creating...") : (isEditing ? "Update Project" : "Create Project")}
          </button>
          <button 
            type="button" 
            className="btn-cancel"
            onClick={() => navigate("/dashboard")}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
