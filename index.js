const express = require('express');
require('dotenv').config();

console.log(process.env);

const app = express();

//Directorio Público
app.use(express.static('public'));

//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.SERVER_PORT}`);
});
