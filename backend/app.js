const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

// Manejar preflight OPTIONS requests
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://ateneai.onrender.com');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(204); // Sin contenido
});

// Servir archivos estáticos desde frontend
app.use(express.static(path.join(__dirname, '../front')));

// Ruta raíz: enviar el HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../front/html', 'index.html'));
});

// Middlewares


// Rutas
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const configRoutes = require('./routes/configRoutes'); 
const conversationRoutes = require('./routes/conversationRoutes'); 
const mensajeRoutes = require("./routes/mensajeRoutes");


app.use('/usuarios', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/configuraciones', configRoutes);
app.use('/conversaciones', conversationRoutes);
app.use("/mensaje", mensajeRoutes);

module.exports = app;
