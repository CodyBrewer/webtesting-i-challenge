const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const weaponsRouter = require('./weapons/router.js');

const app = express();

// Global Middleware
app.use(helmet());
app.use(express.json());
app.use(cors());

// Routing
app.use('/api/weapons', weaponsRouter);

// API Status Endpoint
app.get('/api/status', (req, res) => {
  res.send({ api: 'up' });
});

module.exports = app;
