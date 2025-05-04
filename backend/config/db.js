const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jpdx1906', //utuiliza sua senha do mysql, essa é a minha, só alterar dai
  database: 'users_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como id ' + connection.threadId);
});

module.exports = connection;