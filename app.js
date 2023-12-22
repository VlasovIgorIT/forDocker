const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Обработка запросов
app.get('/', async (req, res) => {
  try {
    // const { keyword } = req.query;
    const response = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
    const jokes = response.data;
    res.json(jokes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при поиске анекдотов' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});