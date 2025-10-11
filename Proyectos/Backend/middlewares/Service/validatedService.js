const {body} = require('express-validator');

const validatedCreateService = [
    body('name')
        .notEmpty()
        .withMessage('El nombre del servicio es obligatorio'),

    body('price')
        .notEmpty()
        .withMessage('El precio del servicio es obligatorio'),
    
    body('brand')
        .notEmpty()
        .withMessage('La marca del servicio es obligatoria'),
    
    body('quantity')
        .notEmpty()
        .withMessage('La cantidad del servicio es obligatoria')
        .isNumeric().withMessage('La cantidad debe ser un número'),
        
    body('id_type')
        .notEmpty()
        .withMessage('El tipo del servicio es obligatorio'),

    body('id_workshop')
        .notEmpty()
        .withMessage('El taller del servicio es obligatorio')
    
]


module.exports = {
    validatedCreateService
}