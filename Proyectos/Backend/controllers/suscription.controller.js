const {Suscription} = require('../models/Suscription');


const getAllSuscriptions = async () => {
  const suscriptions = await Suscription.findAll({
    order: [["price", "ASC"]] // ASC = Ascendente (menor → mayor)
  });
  return suscriptions;
};


module.exports = {
    getAllSuscriptions
}