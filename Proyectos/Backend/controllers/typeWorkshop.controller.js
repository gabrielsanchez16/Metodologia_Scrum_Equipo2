const {TypeWorkshop} = require('../models/TypeWorkshop');


const getAllTypes = async () => {
    const types = await TypeWorkshop.findAll();
    return types;
}

module.exports = {
    getAllTypes
}