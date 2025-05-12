const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json()); // Middleware para JSON
app.use('/api/users', userRoutes); // Rutas montadas
app.get('/', (req, res) => {
  res.send('Bienvenido al servidor');
});

module.exports = app;
