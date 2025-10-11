const {getAllSuscriptions} = require("../controllers/suscription.controller");

const getAll = async (req, res) => {
     try {
        const suscriptions = await getAllSuscriptions();
        res.status(200).json({
            message: "Suscripciones obtenidas exitosamente",
            suscriptions: suscriptions
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching suscriptions' });
    }
}


module.exports = {
    getAll
};