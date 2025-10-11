const { body } = require('express-validator');

const validateWorkshop = [
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser una cadena de texto'),
    
    body('phone')
        .notEmpty().withMessage('El teléfono es obligatorio'),

    body('email')
        .notEmpty().withMessage('El correo es obligatorio')
        .isEmail().withMessage('Debe ser un correo válido'),

    body('password')
        .notEmpty().withMessage('La contraseña es obligatoria')
        .isLength({ min: 6 }).withMessage('Debe tener al menos 6 caracteres')
];

module.exports = validateWorkshop;
