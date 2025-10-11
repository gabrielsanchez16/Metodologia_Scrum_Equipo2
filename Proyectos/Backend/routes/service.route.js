const router = require('express').Router();

const { create,deleteServiceById,getAll,getByName } = require('../http/service.http.js');

const { validatedCreateService } = require('../middlewares/Service/validatedService.js');
const authenticate = require('../middlewares/Auth/auth.middleware.js')
const handleValidation = require('../middlewares/ErrosValidation/handleValidation.js');

router
    .route('/')
    .post(
        authenticate,
        validatedCreateService,
        handleValidation,
        create
    );

router
    .route('/:id_workshop')
    .get(
        authenticate,
        handleValidation,
        getAll
    );

router
    .route('/search/:name/:id_workshop')
    .get(
        authenticate,
        handleValidation,
        getByName
    );

router
    .route('/:id')
    .delete(
        authenticate,
        handleValidation,
        deleteServiceById
    );


exports.router = router;
