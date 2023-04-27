const Project = require("../models/Project");

async function getAllProject() {
    return Project.find({}).lean();
}

async function getProjectById(id) {
    return Project.findById(id).lean();
}

async function createProject(data) {
    return Project.create(data);
}

async function editProject(projectId, data) {
    const project = await Project.findById(projectId);

    project.titleProject = data.titleProject;
    project.usedTechology = data.usedTechology;
    project.description = data.description;
    project.client = data.client;
    project.server = data.server;
    project.baseDB = data.baseDB;
    project.linkGitHub = data.linkGitHub;
    project.path = data.path;
    project.dateCreate = data.dateCreate;

    await project.save();
}

module.exports = {
    getAllProject,
    getProjectById,
    createProject,
    editProject
}