const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { email, password } = req.body;

    // Verifica se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'Usuário já existe.' });
    }

    // Cria um novo usuário
    const user = new User({ email, password });
    await user.save();

    res.status(201).json({ message: 'Usuário criado com sucesso.' });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    // Verifica se o usuário existe
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Usuário não encontrado.' });
    }

    // Verifica a senha
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(403).json({ message: 'Senha incorreta.' });
    }

    // Gera um token
    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
};

module.exports = {
    register,
    login,
};