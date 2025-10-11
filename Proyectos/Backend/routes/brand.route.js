const router = require('express').Router();

const {getAll,getByName} = require('../http/brand.http');

const authenticate = require('../middlewares/Auth/auth.middleware.js')
const handleValidation = require('../middlewares/ErrosValidation/handleValidation.js');


router
    .route('/')
    .get(
        authenticate,
        handleValidation,
        getAll
    );

router
    .route('/:name')
    .get(
        authenticate,
        handleValidation,
        getByName
    );

exports.router = router;