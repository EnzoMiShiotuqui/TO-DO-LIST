const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const verifyJWT = promisify(jwt.verify);

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  console.log('Token recebido:', token); // Log para verificar o token

  if (!token) {
      console.log('Token não fornecido');
      return res.status(403).json({ message: 'Token não fornecido.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
          console.log('Token inválido:', err);
          return res.status(403).json({ message: 'Token inválido.' });
      }

      req.user = decoded;
      next();
  });
};


module.exports = authenticateToken;
