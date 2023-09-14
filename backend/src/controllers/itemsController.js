const axios = require('axios');

const searchItems = async (req, res) => {
  try {
    const search = req.query.search;
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&&limit=4`);
    const data = response.data;
    res.json({ message: 'Consulta exitosa', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en la consulta' });
  }
};

module.exports = { searchItems };
