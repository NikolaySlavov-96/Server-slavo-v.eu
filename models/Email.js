const { Schema, model } = require('mongoose');

const emailSchema = new Schema({
    email: { type: String, require: true, unique: true }
})

emailSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Email = model('Email', emailSchema);

module.exports = Email;