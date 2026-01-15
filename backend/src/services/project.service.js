const Project = require("../models/project.model");

class ProjectService {
  create(data, userId) {
    return Project.create({ ...data, userId });
  }

  getAll(userId) {
    return Project.find({ userId });
  }

  update(id, userId, data) {
    return Project.findOneAndUpdate(
      { _id: id, userId },
      data,
      { new: true }
    );
  }

  delete(id, userId) {
    return Project.findOneAndDelete({ _id: id, userId });
  }
}

module.exports = new ProjectService();
