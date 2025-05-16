const sqlite3 = require('sqlite3').verbose();

let db;

function connect() {
  if (!db) {
    db = new sqlite3.Database('./database.db', (err) => {
      if (err) {
        console.error('Erro ao conectar no banco:', err.message);
      } else {
        console.log('Conectado ao banco SQLite');
      }
    });

    process.on('SIGINT', () => {
      db.close((err) => {
        if (err) {
          console.error('Erro ao fechar o banco:', err.message);
        } else {
          console.log('Conexão com o banco encerrada.');
        }
        process.exit(0);
      });
    });
  }

  return db;
}

module.exports = connect();
