const {body} = require('express-validator');

const validateServiceByWorkshop = [
    body('name_service').notEmpty().withMessage('El nombre del servicio es obligatorio'),
    body('quantity_order').isInt({ gt: 0 }).withMessage('La cantidad debe ser un número entero mayor que 0'),
    body('price_unit').isFloat({ gt: 0 }).withMessage('El precio unitario debe ser un número mayor que 0'),
    body('price_total').isFloat({ gt: 0 }).withMessage('El precio unitario debe ser un número mayor que 0'),
    body('id_order').notEmpty().withMessage('El ID de la orden es obligatorio'),
    body('id_service').notEmpty().withMessage('El ID del servicio es obligatorio')
];

module.exports = {
    validateServiceByWorkshop
};
