const router = require('express').Router();

const {getAll} = require('../http/typeWorkshop.http.js');
const handleValidation = require('../middlewares/ErrosValidation/handleValidation.js');



router
    .route('/')
    .get(
        handleValidation,
        getAll
    );

exports.router = router;