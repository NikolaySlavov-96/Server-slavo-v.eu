const { getAllProject, getProjectById, editProject, createProject } = require('../services/projectService');

const projectController = require('express').Router();

projectController.get('/all', async (req, res) => {
    const data = await getAllProject();
    res.json(data);
});

projectController.get('/details/:id', async (req, res) => {
    const data = await getProjectById(req.params.id);
    res.json(data);
});

projectController.get('/edit/:id', async (req, res) => {
    const data = await getProjectById(req.params.id);
    res.json(data);
})

projectController.post('/create', async (req, res) => {
    const body = req.body;
    const data = {
        titleProject: body.titleProject,
        usedTechology: body.usedTechology,
        description: body.description,
        client: body.client,
        server: body.server,
        baseDB: body.baseDB,
        linkGitHub: body.linkGitHub,
        path: body.path,
        dateCreate: body.dateCreate,
    }
    try {
        if (Object.values(data).some(d => !d)) {
            throw new Error('All fields is required');
        }

        await createProject(data);
        res.json({ message: 'Successfull edited' });
    } catch (err) {
        const message = err;
        res.status(400).json({ message });
    }
})

projectController.put('/edit/:id', async (req, res) => {
    const body = req.body;
    const data = {
        titleProject: body.titleProject,
        usedTechology: body.usedTechology,
        description: body.description,
        client: body.client,
        server: body.server,
        baseDB: body.baseDB,
        linkGitHub: body.linkGitHub,
        path: body.path,
        dateCreate: body.dateCreate,
    }
    try {
        if (Object.values(data).some(d => !d)) {
            throw new Error('All fields is required');
        }

        await editProject(req.params.id, data);
        res.json({ message: 'Successfull edited' });
    } catch (err) {
        const message = err;
        res.status(400).json({ message });
    }
});

module.exports = projectController;