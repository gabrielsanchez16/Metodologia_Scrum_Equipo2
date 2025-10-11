const router = require('express').Router();
const multer = require('multer');

//HTTP
const { create, getById, edit, deleteWorkshop, resetPasswordHttp } = require('../http/workshop.http.js');
const { login } = require('../http/auth.http.js');

//Validaciones 
const validateWorkshop = require('../middlewares/Workshop/validateWorkshop.js');
const handleValidation = require('../middlewares/ErrosValidation/handleValidation.js');
const validateLogin  = require('../middlewares/Login/validateLogin.js');
const authenticate = require('../middlewares/Auth/auth.middleware.js')

const {upload} = require('../middlewares/Multer/multer.js');




router
    .route('/register')
    .post(
        upload.single('logo'),
        validateWorkshop,
        handleValidation,
        create
    );

router
    .route('/login')
    .post(
        validateLogin,
        handleValidation,
        login
    );

router
    .route('/reset-password')
    .post(
        handleValidation,
        resetPasswordHttp
    );

router
    .route('/:id')
    .get(
        authenticate,
        handleValidation,
        getById
    )
    .put(
        authenticate,
        upload.single('logo'),
        handleValidation,
        edit
    )
    .delete(
        authenticate,
        handleValidation,
        deleteWorkshop
    );
    


exports.router = router
