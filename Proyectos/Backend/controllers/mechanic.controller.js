const {Mechanic} = require('../models/Mechanic');
const { WorkOrder } = require('../models/WorkOrder.js');


const createMechanic = async (name,id_workshop) => {
    const mechanic = await Mechanic.create({
        name,
        id_workshop
    });
    return mechanic;
}

const getMechanicsByWorkshop = async (id_workshop) => {
    const mechanics = await Mechanic.findAll({
        where: {
            id_workshop
        }
    });
    return mechanics;
}

const editMechanic = async (id, name) => {
    const mechanic = await Mechanic.update(
        { name },
        { where: { id } }
    );
    return mechanic;
}

const deleteMechanic = async (id) => {
    const orders = await WorkOrder.findAll({ where: { id_mechanic: id } });

    if (orders.length > 0) {
        throw new Error('No se puede eliminar el mecanico porque tiene órdenes de trabajo asociadas');
    }
    const mechanic = await Mechanic.destroy({
        where: {
            id
        }
    });
    return mechanic;
}

module.exports = {
    createMechanic,
    getMechanicsByWorkshop,
    deleteMechanic,
    editMechanic
}