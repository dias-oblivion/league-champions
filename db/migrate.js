const { Umzug, SequelizeStorage } = require('umzug');
const sqlite3 = require('sqlite3');
const { Sequelize } = require('sequelize');
const path = require('path');

// Inicializa Sequelize só para usar o armazenamento de migrations do Umzug
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database.db'),
  logging: false,
});

const umzug = new Umzug({
  migrations: {
    glob: path.join(__dirname, './migrations', '*.sql'),
    resolve: ({ name, path, context }) => ({
      name,
      up: async () => {
        const fs = require('fs');
        const sql = fs.readFileSync(path, 'utf8');
        return context.query(sql); 
      },
    }),
  },
  context: sequelize,
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

umzug.up().then(() => {
  console.log('Migrations executadas com sucesso.');
}).catch((err) => {
  console.error('Erro ao executar migrations:', err);
});


module.exports = umzug;
