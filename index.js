const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('./database.db');

app.use(express.json());

// app.post('/items', (req, res) => {
//   const { name } = req.body;
//   db.run('INSERT INTO items(name) VALUES(?)', [name], function(err) {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json({ id: this.lastID, name });
//   });
// });
// 
// app.get('/items', (req, res) => {
//   db.all('SELECT * FROM items', [], (err, rows) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json(rows);
//   });
// });

app.listen(3000, () => console.log('Server on http://localhost:3000'));
