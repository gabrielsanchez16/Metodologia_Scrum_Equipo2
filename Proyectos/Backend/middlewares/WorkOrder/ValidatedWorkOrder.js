const { body } = require('express-validator');

const validateWorkOrder = [
    body('title')
        .notEmpty().withMessage('El título es obligatorio')
        .isString().withMessage('El título debe ser una cadena de texto'),

    body('date')
        .notEmpty().withMessage('La fecha es obligatoria')
        .isDate().withMessage('Debe ser una fecha válida'),

    body('description')
        .notEmpty().withMessage('La descripción es obligatoria')
        .isString().withMessage('La descripción debe ser una cadena de texto'),

    body('recommendations')
        .notEmpty().withMessage('Las recomendaciones son obligatorias')
        .isString().withMessage('Las recomendaciones deben ser una cadena de texto'),

    body('price')
        .notEmpty().withMessage('El precio es obligatorio')
        .isNumeric().withMessage('El precio debe ser un número'),

    body('id_motorcycle')
        .notEmpty().withMessage('El ID de la motocicleta es obligatorio'),

    body('id_mechanic')
        .notEmpty().withMessage('El ID del mecánico es obligatorio')
];

module.exports = {
    validateWorkOrder
}