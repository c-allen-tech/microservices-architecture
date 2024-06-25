const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'user',
  host: 'database',
  database: 'mydb',
  password: 'password',
  port: 5432,
});

app.get('/items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(5000, () => {
  console.log('API Service is running on port 5000');
});
