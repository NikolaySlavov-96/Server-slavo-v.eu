const emailController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { addEmailWrite, checkEmail } = require('../services/emailService');
const { parserError } = require('../util/parser');

emailController.post('/email',
    body('email').isEmail().withMessage('Invalid Email'),
    async (req, res) => {
        try {
            const { errors } = validationResult((req));
            if (errors.length > 0) {
                throw errors;
            }
            const dataEmail = {
                email: req.body.email
            }
            const taken = await checkEmail(req.body.email);
            if(taken) {
                throw new Error('Email address is taken');
            }
            
            await addEmailWrite(dataEmail);
            res.json({ message: 'Successfull Subscribe' });
        } catch (err) {
            const message = parserError(err);
            res.status(400).json({ message });
        }
    });

module.exports = emailController;