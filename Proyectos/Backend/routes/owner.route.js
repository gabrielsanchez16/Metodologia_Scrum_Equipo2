const router = require('express').Router();

const {create,getAll,getById,deleteById,updated} = require('../http/owner.http');


const authenticate = require('../middlewares/Auth/auth.middleware.js')
const handleValidation = require('../middlewares/ErrosValidation/handleValidation.js');
const {validateCreateOwner,validateGetAllOwners} = require('../middlewares/Owner/validatedOwner.js')


router
    .route('/register')
    .post(
        authenticate,
        validateCreateOwner,
        handleValidation,
        create
    )

router
    .route('/all/:id')
    .get(
        authenticate,
        handleValidation,
        getAll
    )

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
        updated
    );


exports.router = router