const ProjectCard = ({ project, onEdit, onDelete }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.status && <p><strong>Status:</strong> {project.status}</p>}
      {project.dueDate && (
        <p><strong>Due Date:</strong> {new Date(project.dueDate).toLocaleDateString()}</p>
      )}
      <div className="project-card-actions">
        <button className="btn-edit" onClick={() => onEdit(project)}>
          ✏️ Edit
        </button>
        <button className="btn-delete" onClick={() => onDelete(project._id)}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
