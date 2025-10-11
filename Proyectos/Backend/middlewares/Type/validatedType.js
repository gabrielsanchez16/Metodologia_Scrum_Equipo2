const { body } = require('express-validator');

const validateCreateType = [
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser una cadena de texto'),
];


module.exports = {
    validateCreateType
}