const express = require('express');
const itemsRouter = require('./routes/itemsRoutes');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(itemsRouter);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
