const router = require('express').Router();
const {create,deleteMechanicb,getAll,edit} = require('../http/mechanic.http.js')

const {validatedCreateMechanic} = require('../middlewares/Mechanic/validatedMechanic.js')
const authenticate = require('../middlewares/Auth/auth.middleware.js')
const handleValidation = require('../middlewares/ErrosValidation/handleValidation.js');


router
    .route('/register')
    .post(
        authenticate,
        validatedCreateMechanic,
        handleValidation,
        create
    );

router
    .route('/edit')
    .put(
        authenticate,
        handleValidation,
        edit
    );

router
    .route('/all/:id_workshop')
    .get(
        handleValidation,
        getAll
    );

router
    .route('/:id')
    .delete(
        authenticate,
        handleValidation,
        deleteMechanicb
    );

exports.router = router;