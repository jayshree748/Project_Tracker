const projectService = require("../services/project.service");

exports.create = async (req, res) => {
  const project = await projectService.create(req.body, req.userId);
  res.status(201).json(project);
};

exports.getAll = async (req, res) => {
  const projects = await projectService.getAll(req.userId);
  res.json(projects);
};

exports.update = async (req, res) => {
  const project = await projectService.update(
    req.params.id,
    req.userId,
    req.body
  );
  res.json(project);
};

exports.delete = async (req, res) => {
  await projectService.delete(req.params.id, req.userId);
  res.status(204).send();
};
