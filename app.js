const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require("./routes/chatRoutes");

app.use(express.json()); // Middleware para JSON
app.use('/api/usuarios', userRoutes); // Rutas montadas
app.use('/api/chat', chatRoutes); // Rutas montadas
app.get('/', (req, res) => {
  res.send('Bienvenido al servidor');
});

module.exports = app;
