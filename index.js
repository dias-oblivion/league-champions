require('module-alias/register');
const express = require('express');
const app = express();

const championService = require('@services/championService');

app.use(express.json());

app.get('/champions', async (req, res) => {
  try {
    const champions = await championService.listChampions();
    res.json(champions);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar campeões' });
  }
});

app.listen(3000, () => {
  console.log('Server on http://localhost:3000');
});
