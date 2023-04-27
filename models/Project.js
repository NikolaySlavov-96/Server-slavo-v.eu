const { model, Schema } = require('mongoose');

const projectSchema = new Schema({
    titleProject: { type: String, require: true },
    usedTechology: { type: String, require: true },
    description: { type: String, require: true },
    client: { type: String, require: true },
    server: { type: String, require: true },
    baseDB: { type: String, require: true },
    linkGitHub: { type: String, require: true },
    path: { type: String, require: true },
    dateCreate: { type: Date, require: true },
});

const Project = model('Project', projectSchema);

module.exports = Project;