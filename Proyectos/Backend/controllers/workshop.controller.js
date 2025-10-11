const { Workshop } = require('../models/Workshop.js');
const cloudinary = require('cloudinary').v2;
const { Service } = require('../models/Service.js');
const { Owner } = require('../models/Owner.js');
const { Motorcycle } = require('../models/Motorcycle.js');
const { Mechanic } = require('../models/Mechanic.js');
const { MailtrapClient } = require('mailtrap');
const crypto = require("crypto");

const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

const createWorkshop = async (name, phone, email, password, logo, id_logo_public, city, address,id_type_workshop) => {
    // Check if the workshop already exists
    const existingWorkshop = await Workshop.findOne({ where: { email } });
    if (existingWorkshop) {
        throw new Error('Ya existe un taller con este correo');
    }

    const newWorkshop = await Workshop.create({
        name,
        phone,
        email,
        password,
        suscription: false, // Default value for new workshops
        logo,
        id_logo_public,
        city,
        address,
        id_type_workshop
    });
    return newWorkshop;
}

const resetPassword = async (email) => {
    const workshop = await Workshop.findOne({ where: { email } });
    if (!workshop) {
        throw new Error('Taller no existe');
    }

    //generar password aleatoria
    const password = crypto.randomBytes(6).toString("base64");

    workshop.password = password;
    await workshop.save();

    const SENDER_EMAIL = "noreply@systemworkshop.shop";
    const RECIPIENT_EMAIL = email;

    const client = new MailtrapClient({ token: process.env.TOKEN_MAILTRAP });

    try {
        await client.send({
            from: { name: "Password Reset", email: SENDER_EMAIL },
            to: [{ email: RECIPIENT_EMAIL }],
            template_uuid: "ad6e5f3a-27d0-420a-a0a5-0df77ad92e21",
            template_variables: { pass_reset: password }
        });
        return { success: true, message: "Contraseña reseteada y correo enviado" };
    } catch (error) {
        console.error("Error enviando email:", error);
        throw new Error("No se pudo enviar el correo de reseteo.");
    }

    // Aquí iría la lógica para resetear la contraseña, como enviar un email
}

const editWorkshop = async (id, name, phone, email, password, logo, id_logo_public, passwordConfirmation, city, address,id_type_workshop,id_suscription,suscription) => {
    const workshop = await Workshop.findByPk(id);
    if (!workshop) {
        throw new Error('Taller no encontrado');
    }
    // Solo actualiza si vienen definidos
    if (name !== undefined) workshop.name = name;
    if (phone !== undefined) workshop.phone = phone;
    if (email !== undefined) workshop.email = email;
    if (logo != undefined) workshop.logo = logo;
    if (city !== undefined) workshop.city = city;
    if (address !== undefined) workshop.address = address;
    if (id_type_workshop !== undefined) workshop.id_type_workshop = id_type_workshop;
    if (id_suscription !== undefined) workshop.id_suscription = id_suscription;
    if (suscription !== undefined) workshop.suscription = suscription;

    if (password && passwordConfirmation) {
        // Verifica que la contraseña tenga al menos 6 caracteres
        if (password.length < 6) {
            throw new Error('La contraseña debe tener al menos 6 caracteres');
        }
        const valid = workshop.verificarPassword(passwordConfirmation);

        if (!valid) {
            throw new Error('Contraseña vieja incorrecta');
        }
        // No se encripta ya que el hook de Sequelize lo hace automáticamente (se configuro en el modelo)
        workshop.password = password;
    };

    if (id_logo_public != undefined) {
        if (workshop.id_logo_public) {
            await cloudinary.uploader.destroy(workshop.id_logo_public);
        }
        workshop.id_logo_public = id_logo_public;
    }


    await workshop.save();

    const workshopData = workshop.toJSON();
    delete workshopData.password;

    return workshopData;
};


const getWorkshopById = async (id) => {
    const workshop = await Workshop.findByPk(id, {
        attributes: { exclude: ['password'] } // Exclude password from the result
    });
    if (!workshop) {
        throw new Error('Taller no encontrado');
    }
    return workshop;
}

const deleteWorkshop = async (id) => {
    const workshop = await Workshop.findByPk(id);
    if (!workshop) {
        throw new Error('Taller no encontrado');
    }
    // Elimina la imagen de Cloudinary si existe
    if (workshop.id_logo_public) {
        await cloudinary.uploader.destroy(workshop.id_logo_public);
    }

    await Service.destroy({ where: { id_workshop: id } });
    await Motorcycle.destroy({ where: { id_workshop: id } });
    await Owner.destroy({ where: { id_workshop: id } });
    await Mechanic.destroy({ where: { id_workshop: id } });

    await workshop.destroy();

    return true;
}


module.exports = {
    createWorkshop,
    getWorkshopById,
    editWorkshop,
    deleteWorkshop,
    resetPassword
}