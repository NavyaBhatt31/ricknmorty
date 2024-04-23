const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/character', async (req, res) => {
  const { page, status, gender, species } = req.query;
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&status=${status}&gender=${gender}&species=${species}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
