const {create,deleteServiceHttp,getAll,update,getServicesByWorkshopHttp} = require('../http/serviceByWorkshop.http.js')

const router = require('express').Router();

const authenticate = require('../middlewares/Auth/auth.middleware.js');
const handleValidation = require('../middlewares/ErrosValidation/handleValidation.js');
const {validateServiceByWorkshop} = require('../middlewares/ServiceByWorkshop/validatedServiceByWorkshop.js');

router
    .route('/register')
    .post(
        authenticate,
        validateServiceByWorkshop,
        handleValidation,
        create
    );

router
    .route('/:id_order')
    .get(
        authenticate,
        handleValidation,
        getAll
    );

router
    .route('/delete/:id')
    .delete(
        authenticate,
        handleValidation,
        deleteServiceHttp
    );

router
    .route('/update')
    .put(
        authenticate,
        handleValidation,
        update
    );

router
    .route('/workshop/:id_workshop')
    .get(
        authenticate,
        handleValidation,
        getServicesByWorkshopHttp
    );

exports.router = router;