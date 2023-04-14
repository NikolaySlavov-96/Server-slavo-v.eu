const Email = require("../models/Email");


async function addEmailWrite(email) {
    return Email.create(email);
};

async function checkEmail(email) {
    return Email.findOne({ email });
}

module.exports = {
    addEmailWrite,
    checkEmail
}