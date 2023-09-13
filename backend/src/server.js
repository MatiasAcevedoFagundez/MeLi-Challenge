const express = require('express');
const cors = require('cors');
const itemsRouter = require('./routes/itemsRoutes');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(itemsRouter);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
