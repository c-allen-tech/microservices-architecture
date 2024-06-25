const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const SECRET_KEY = 'your_secret_key';

app.use(express.json());

app.post('/verify', (req, res) => {
  const token = req.body.token;
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ status: 'success', decoded });
  } catch (err) {
    res.status(401).json({ status: 'error', message: 'Invalid token' });
  }
});

app.listen(5001, () => {
  console.log('Auth Service is running on port 5001');
});
