const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/chat', chatRoutes);

// 👇 Mueve esta parte aquí
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando! Puedes enviar mensajes POST a /api/chat');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
