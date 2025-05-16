const championRepository = require('@repositories/championRepository');

async function listChampions() {
  const champions = await championRepository.getAllChampions();
  return champions;
}

module.exports = {
  listChampions,
};
