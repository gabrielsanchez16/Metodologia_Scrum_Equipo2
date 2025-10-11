const router = require('express').Router();
const {deletePhotoHandler,registerPhotoHandler,updatePhotoHandler} = require('../http/photo.http.js');

const authenticate = require('../middlewares/Auth/auth.middleware.js')
const handleValidation = require('../middlewares/ErrosValidation/handleValidation.js');
const {uploadPhotos} = require('../middlewares/Multer/multer.js');




router
    .route('/register')
    .post(
        uploadPhotos.single('photo'),
        authenticate,
        handleValidation,
        registerPhotoHandler
    )

router
    .route('/:id')
    .put(
        uploadPhotos.single('photo'),
        authenticate,
        handleValidation,
        updatePhotoHandler
    )
    .delete(
        authenticate,
        handleValidation,
        deletePhotoHandler
    );


exports.router = router;