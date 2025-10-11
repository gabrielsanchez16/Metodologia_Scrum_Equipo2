const { Workshop } = require('../models/Workshop');
const {Suscription} = require("../models/Suscription")
const jwt = require('jsonwebtoken');

// Usa dotenv o config para no exponer claves
const SECRET = process.env.JWT_SECRET || 'mi_clave_secreta';

const login = async (email, password) => {
    const workshop = await Workshop.findOne({ where: { email } });

    if (!workshop) {
        throw new Error('Correo o contraseña inválidos');
    }

    const valid = workshop.verificarPassword(password);

    if (!valid) {
        throw new Error('Correo o contraseña inválidos');
    }

    

    const suscription = await Suscription.findOne({ where: { id: workshop.id_suscription } });

        

    const payload = {
        id: workshop.id,
        name: workshop.name,
        email: workshop.email,
        address: workshop.address,
        city: workshop.city,
        phone: workshop.phone,
        suscription: workshop.suscription,
        logo: workshop.logo,
        id_type_workshop: workshop.id_type_workshop,
        id_suscription: workshop.id_suscription,
        modules: suscription?.modules ? suscription?.modules : []
    };

    const token = jwt.sign(payload, SECRET, { expiresIn: '8h' });


    return { token };
};

module.exports = {
    login
};
