const express = require('express');
require('dotenv').config();

const app = express();

//Directorio Público
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.SERVER_PORT}`);
});
