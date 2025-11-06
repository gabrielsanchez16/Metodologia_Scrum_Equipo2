const {Suscription} = require('../models/Suscription');

// Arquitecto de Software: Juan Roman Cuero
// Estructura revisada
// Funciones para gestionar suscripciones

// Requerimiento numero 17: Diseñar estructura de planes y condiciones asociadas.

const getAllSuscriptions = async () => {
  const suscriptions = await Suscription.findAll({
    order: [["price", "ASC"]] // ASC = Ascendente (menor → mayor)
  });
  return suscriptions;
};


module.exports = {
    getAllSuscriptions
}