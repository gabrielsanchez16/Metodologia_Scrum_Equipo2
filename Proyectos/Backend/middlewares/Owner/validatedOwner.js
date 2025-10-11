const { body, param } = require('express-validator');

const validateCreateOwner = [
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser una cadena de texto'),

    body('phone')
        .notEmpty().withMessage('El teléfono es obligatorio'),

    body('email')
        .notEmpty().withMessage('El correo es obligatorio')
        .isEmail().withMessage('Debe ser un correo válido'),

    body('identification')
        .notEmpty().withMessage('La identificación es obligatoria')
        .isLength({ min: 3 }).withMessage('Debe tener al menos 3 caracteres'),

    body('id_workshop')
        .notEmpty().withMessage('El id del taller es obligatorio')
];

const validateGetAllOwners = [
    param('id')
        .notEmpty().withMessage('El id del taller es obligatorio')
];


module.exports = {
    validateCreateOwner,
    validateGetAllOwners
}