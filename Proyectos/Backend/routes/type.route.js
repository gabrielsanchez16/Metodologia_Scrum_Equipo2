const router = require('express').Router();

const {create,getAll} = require('../http/type.http');

const authenticate = require('../middlewares/Auth/auth.middleware.js')
const handleValidation = require('../middlewares/ErrosValidation/handleValidation.js');
const {validateCreateType} = require('../middlewares/Type/validatedType')


router
    .route('/')
    .post(
        authenticate,
        validateCreateType,
        handleValidation,
        create
    )
    .get(
        authenticate,
        handleValidation,
        getAll
    );

exports.router = router;