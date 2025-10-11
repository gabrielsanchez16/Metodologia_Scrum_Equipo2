const {create,deleteById,getAll,getById,updateById} = require('../http/motorcycle.http.js');

const router = require('express').Router();

const {validateCreateMotorcycle} = require('../middlewares/Motorcycle/validatedMotorcycle.js')
const authenticate = require('../middlewares/Auth/auth.middleware.js')
const handleValidation = require('../middlewares/ErrosValidation/handleValidation.js');


router
    .route('/register')
    .post(
        authenticate,
        validateCreateMotorcycle,
        handleValidation,
        create
    );

router
    .route('/all/:id_workshop')
    .get(
        authenticate,
        handleValidation,
        getAll
    );

router
    .route('/:id')
    .get(
        authenticate,
        handleValidation,
        getById
    )
    .delete(
        authenticate,
        handleValidation,
        deleteById
    )
    .put(
        authenticate,
        handleValidation,
        updateById
    )



exports.router = router;