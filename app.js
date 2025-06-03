const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Rutas
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const configRoutes = require('./routes/configRoutes'); // <- esta línea importa configRoutes

app.use('/', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/configuraciones', configRoutes); // <- esta línea la usa

/*
app.get('/', (req, res) => {
  res.send('Bienvenido al servidor');
});*/

module.exports = app;
