const parseData = (res, data = {}, type = "") => {
    let response = {
      author: {
        name: process.env.AUTHOR_NAME,
        lastname: process.env.LAST_NAME
      },
    };
    const categories = [];
  
    switch (type) {

      case "search":
        
        if (data.filters.length) {
          const { path_from_root: pathFromRoot } = data.filters[0].values[0];
          pathFromRoot.map((category) => categories.push(category.name));
        }
  
        let items = [];
        data.results
          .slice(0, process.env.ITEMS_LIMIT || 4)
          .forEach((item, index) => {
            const price = item.price.toString().split(".");
            const decimals = price.length == 2 ? price[1] : "0";
            items[index] = {
              id: item.id,
              title: item.title,
              price: {
                currency: item.currency_id,
                amount: Number(price[0]),
                decimals: Number(decimals),
              },
              picture: item.thumbnail,
              condition: item.condition,
              free_shipping: item.shipping.free_shipping,
              location: item.address.state_name,
            };
          });
        response = { ...response, categories, items };
        break;
  
     
      case "single":
        
        if (data.categories.path_from_root.length) {
          const { path_from_root: pathFromRoot } = data.categories;
          pathFromRoot.map((category) => categories.push(category.name));
        }
  
        const price = data.item.price.toString().split(".");
        const decimalSingle = data.item.price.length == 2 ? price[1] : "0";
        const item = {
          id: data.item.id,
          title: data.item.title,
          price: {
            currency: data.item.currency_id,
            amount: Number(price[0]),
            decimals: Number(decimalSingle),
          },
          picture: data.item.pictures.length ? data.item.pictures[0].url : "",
          condition: data.item.condition,
          free_shipping: data.item.shipping.free_shipping,
          sold_quantity: Number(data.item.sold_quantity),
          description: data.description.plain_text,
        };
        response = { ...response, categories, item };
        break;
      default:
        response = { ...response, data };
        break;
    }
  
    res.json(response);
  };
  
  module.exports = parseData;