const mapSearchResults = data => {
  const categories = data.filters.find(filter => filter.id === "category");
  const categoryPaths = categories
    ? categories.values.reduce((acc, value) => {
        const path = value.path_from_root.map(category => category.name);
        return acc.concat(path);
      }, [])
    : [];

  const items = data.results.map(result => ({
    id: result.id,
    title: result.title,
    price: {
      currency: result.currency_id,
      amount: result.price,
      decimals: 0
    },
    picture: result.thumbnail,
    condition: result.condition,
    free_shipping: result.shipping.free_shipping,
    location: result.address.state_name,
  }));

  const response = {
    author: {
      name: "Matias",
      lastname: "Acevedo"
    },
    categories: categoryPaths,
    items: items
  };

  return response;
};

module.exports = {
  mapSearchResults
};
