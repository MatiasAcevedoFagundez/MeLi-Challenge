const axios = require("axios");
const { mapSearchResults, mapItemDetails } = require("../utils/dataMapper");

const getItems = async (req, res) => {
  try {
    const search = req.query.search;
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${search}&&limit=4`
    );
    const data = response.data;
    res.json({ message: "Success", data: mapSearchResults(data) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
};

const getItemDetails = async (req, res) => {
  try {
    const itemId = req.params.id;

    const itemResponse = await axios.get(
      `https://api.mercadolibre.com/items/${itemId}`
    );
    const item = itemResponse.data;

    const descriptionResponse = await axios.get(
      `https://api.mercadolibre.com/items/${itemId}/description`
    );
    const description = descriptionResponse.data;

    const categoriesResponse = await axios.get(`https://api.mercadolibre.com/categories/${item.category_id}`);
    const categoriesData = categoriesResponse.data;
    const itemCategories = categoriesData.path_from_root.map((category) => category.name);

    res.json({ message: "Success", data: mapItemDetails(item, description, itemCategories) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
};

module.exports = { getItems, getItemDetails };
