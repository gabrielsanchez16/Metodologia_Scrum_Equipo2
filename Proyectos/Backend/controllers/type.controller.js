const {Type} = require('../models/Type');


const createType = async (name) => {
    const type = await Type.create({ name });
    return type;
}

const getAllTypes = async () => {
    const types = await Type.findAll();
    return types;
}

module.exports = {
    createType,
    getAllTypes
}