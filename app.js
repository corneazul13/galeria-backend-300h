const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente ');
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conectado a MongoDB');
  // Levantar servidor solo si conexión exitosa
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(` Servidor escuchando en el puerto ${PORT}`);
  });
})
.catch((error) => {
  console.error(' Error al conectar a MongoDB:', error);
});
