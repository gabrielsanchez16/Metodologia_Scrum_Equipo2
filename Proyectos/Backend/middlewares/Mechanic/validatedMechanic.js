const {body} = require('express-validator');

const validatedCreateMechanic = [
    body('name')
        .notEmpty().withMessage('El nombre del mecanico es obligatorio'),

    body('id_workshop')
        .notEmpty().withMessage('El id del taller es obligatorio')
]


module.exports = {
    validatedCreateMechanic
}