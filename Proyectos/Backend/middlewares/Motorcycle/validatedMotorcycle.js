const { body } = require('express-validator');

const validateCreateMotorcycle = [
    body('model')
        .notEmpty().withMessage('El modelo es obligatorio')
        .isString().withMessage('El nombre debe ser una cadena de texto'),

    body('plate')
        .notEmpty().withMessage('La placa es obligatoria'),

    body('year')
        .notEmpty().withMessage('El año es obligatorio')
        .isDate().withMessage('El año debe mayor o igual a 1990'),

    body('id_workshop')
        .notEmpty().withMessage('El id del taller es obligatorio'),

    body('id_brand')
        .notEmpty().withMessage('El id de la marca es obligatorio'),

    body('id_owner')
        .notEmpty().withMessage('El id del propietario es obligatorio'),
];


module.exports = {
    validateCreateMotorcycle
}