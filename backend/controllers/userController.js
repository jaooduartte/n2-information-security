const connection = require('../config/db');

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';

  connection.query(query, [name, email], (err, result) => {
    if (err) {
      console.error('Erro ao inserir usuário:', err);
      return res.status(500).send('Erro ao criar usuário');
    }
    res.status(201).json({ id: result.insertId, name, email });
  });
};

exports.getAllUsers = (req, res) => {
  const query = 'SELECT * FROM users';
  
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao obter usuários:', err);
      return res.status(500).send('Erro ao buscar usuários');
    }
    res.status(200).json(results);
  });
};

exports.getUserById = (req, res) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  
  connection.query(query, [req.params.id], (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      return res.status(500).send('Erro ao buscar usuário');
    }
    if (results.length === 0) {
      return res.status(404).send('Usuário não encontrado');
    }
    res.status(200).json(results[0]);
  });
};

exports.updateUser = (req, res) => {
  const { name, email } = req.body;
  const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
  
  connection.query(query, [name, email, req.params.id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar usuário:', err);
      return res.status(500).send('Erro ao atualizar usuário');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Usuário não encontrado');
    }
    res.status(200).json({ id: req.params.id, name, email });
  });
};

exports.deleteUser = (req, res) => {
  const query = 'DELETE FROM users WHERE id = ?';
  
  connection.query(query, [req.params.id], (err, result) => {
    if (err) {
      console.error('Erro ao deletar usuário:', err);
      return res.status(500).send('Erro ao deletar usuário');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Usuário não encontrado');
    }
    res.status(204).send();
  });
};