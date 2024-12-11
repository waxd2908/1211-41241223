const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('public')); // 指定靜態檔案目錄

app.get('/api/stocks/:id/daily', async (req, res) => {
  const stockId = req.params.id;
  const apiUrl = `https://api.example.com/stocks/${stockId}/daily`; // 替換為實際 API URL

  try {
    const response = await axios.get(apiUrl, {
      headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
