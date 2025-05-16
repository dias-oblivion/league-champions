const db = require('@db'); 

function getAllChampions() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM champions', [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

module.exports = {
  getAllChampions,
};
