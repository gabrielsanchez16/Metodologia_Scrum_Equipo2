const AuthController = require('../controllers/auth.controller.js');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { token, workshop } = await AuthController.login(email, password);

        res.status(200).json({
            message: 'Login exitoso',
            workshop,
            token
        });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = {
    login
};
