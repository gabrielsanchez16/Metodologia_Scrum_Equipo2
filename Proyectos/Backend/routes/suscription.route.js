const router = require('express').Router();

const {getAll} = require('../http/suscription.http.js');

const authenticate = require('../middlewares/Auth/auth.middleware.js')
const handleValidation = require('../middlewares/ErrosValidation/handleValidation.js');


router
    .route('/')
    .get(
        handleValidation,
        getAll
    );

exports.router = router;