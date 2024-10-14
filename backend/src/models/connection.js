require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DB,
});

// Testando a conexão
async function testConnection() {
  try {
    const [rows] = await connection.query('SELECT 1');
    console.log('Conexão bem-sucedida:', rows);
  } catch (error) {
    console.error('Erro na conexão:', error);
  }
}

testConnection();

// Exportando a conexão
module.exports = connection;
