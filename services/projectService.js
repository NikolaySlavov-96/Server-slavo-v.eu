const Project = require("../models/Project");

async function getAllProject() {
    return await Project.find({}).sort({ _id: -1 }).lean();
}

async function getProjectById(id) {
    return await Project.findById(id).lean();
}

async function createProject(data) {
    return await Project.create(data);
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