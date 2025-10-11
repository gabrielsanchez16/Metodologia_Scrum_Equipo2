const {create,deleteOrder,getById,getByMechanic,getByMotorcycle,updated} = require('../http/workOrder.http.js');


const router = require('express').Router();

const authenticate = require('../middlewares/Auth/auth.middleware.js')
const handleValidation = require('../middlewares/ErrosValidation/handleValidation.js');
const {validateWorkOrder} = require('../middlewares/WorkOrder/ValidatedWorkOrder.js');



router
    .route('/register')
    .post(authenticate, validateWorkOrder, handleValidation, create);

router
    .route('/delete/:id')
    .delete(authenticate, handleValidation,deleteOrder);

router
    .route('/getById/:id')
    .get(handleValidation, getById);

router
    .route('/getByMechanic/:id_mechanic')
    .get(authenticate, handleValidation, getByMechanic);

router
    .route('/getByMotorcycle/:id_motorcycle')
    .get(authenticate, handleValidation, getByMotorcycle);

router
    .route('/update')
    .put(authenticate, validateWorkOrder, handleValidation, updated);

exports.router = router;