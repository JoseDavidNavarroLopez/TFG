const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Rutas
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const configRoutes = require('./routes/configRoutes'); 
const conversationRoutes = require('./routes/chatRoutes');

app.use('/', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/configuraciones', configRoutes);
app.use('/conversaciones', conversationRoutes);

/*
app.get('/', (req, res) => {
  res.send('Bienvenido al servidor');
});*/

module.exports = app;
